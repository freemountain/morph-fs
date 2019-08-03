import * as errors from "../errors";
import { FileUtils, matchGlobs } from "../utils";
import { FileSystemHost } from "./FileSystemHost";

interface VirtualDirectory {
    path: string;
    files: Map<string, string>;
}

export class VirtualFileSystemHost implements FileSystemHost {
    private readonly directories = new Map<string, VirtualDirectory>();

    constructor() {
        this.getOrCreateDir("/");
    }

    delete(path: string) {
        path = FileUtils.getStandardizedAbsolutePath(this, path);
        if (this.directories.has(path)) {
            // remove descendant dirs
            for (const descendantDirPath of getDescendantDirectories(this.directories.keys(), path))
                this.directories.delete(descendantDirPath);
            // remove this dir
            this.directories.delete(path);
            return Promise.resolve();
        }

        const parentDir = this.directories.get(FileUtils.getDirPath(path));
        if (parentDir == null || !parentDir.files.has(path))
            return Promise.reject(new errors.FileNotFoundError(path));
        parentDir.files.delete(path);
        return Promise.resolve();
    }

    readDir(dirPath: string) {
        dirPath = FileUtils.getStandardizedAbsolutePath(this, dirPath);
        const dir = this.directories.get(dirPath);
        if (dir == null)
            return Promise.reject(new errors.DirectoryNotFoundError(dirPath));

        return Promise.resolve([...getDirectories(this.directories.keys()), ...dir.files.keys()]);

        function* getDirectories(dirPaths: IterableIterator<string>) {
            for (const path of dirPaths) {
                const parentDir = FileUtils.getDirPath(path);
                if (parentDir === dirPath && parentDir !== path)
                    yield path;
            }
        }
    }

    readFile(filePath: string, encoding = "utf-8") {
        filePath = FileUtils.getStandardizedAbsolutePath(this, filePath);
        const parentDir = this.directories.get(FileUtils.getDirPath(filePath));
        if (parentDir == null)
            return Promise.reject(new errors.FileNotFoundError(filePath));

        const fileText = parentDir.files.get(filePath);
        if (fileText === undefined)
            return Promise.reject(new errors.FileNotFoundError(filePath));
        return Promise.resolve(fileText);
    }

    writeFile(filePath: string, fileText: string) {
        filePath = FileUtils.getStandardizedAbsolutePath(this, filePath);
        const dirPath = FileUtils.getDirPath(filePath);
        this.getOrCreateDir(dirPath).files.set(filePath, fileText);
        return Promise.resolve();
    }

    mkdir(dirPath: string) {
        dirPath = FileUtils.getStandardizedAbsolutePath(this, dirPath);
        this.getOrCreateDir(dirPath);
        return Promise.resolve();
    }

    async move(srcPath: string, destPath: string) {
        srcPath = FileUtils.getStandardizedAbsolutePath(this, srcPath);
        destPath = FileUtils.getStandardizedAbsolutePath(this, destPath);

        if (await this.fileExists(srcPath)) {
            const fileText = await this.readFile(srcPath);
            await this.delete(srcPath);
            await this.writeFile(destPath, fileText);
        }
        else if (this.directories.has(srcPath)) {
            const moveDirectory = (from: string, to: string) => {
                this._copyDirInternal(from, to);
                this.directories.delete(from);
            };
            moveDirectory(srcPath, destPath);

            // move descendant dirs
            for (const descendantDirPath of getDescendantDirectories(this.directories.keys(), srcPath)) {
                const relativePath = FileUtils.getRelativePathTo(srcPath, descendantDirPath);
                moveDirectory(descendantDirPath, FileUtils.pathJoin(destPath, relativePath));
            }
        }
        else
            throw new errors.PathNotFoundError(srcPath);
    }

    async copy(srcPath: string, destPath: string) {
        srcPath = FileUtils.getStandardizedAbsolutePath(this, srcPath);
        destPath = FileUtils.getStandardizedAbsolutePath(this, destPath);

        if (await this.fileExists(srcPath))
            await this.writeFile(destPath, await this.readFile(srcPath));
        else if (this.directories.has(srcPath)) {
            this._copyDirInternal(srcPath, destPath);

            // copy descendant dirs
            for (const descendantDirPath of getDescendantDirectories(this.directories.keys(), srcPath)) {
                const relativePath = FileUtils.getRelativePathTo(srcPath, descendantDirPath);
                this._copyDirInternal(descendantDirPath, FileUtils.pathJoin(destPath, relativePath));
            }
        }
        else
            throw new errors.PathNotFoundError(srcPath);
    }

    private _copyDirInternal(from: string, to: string) {
        const dir = this.directories.get(from)!;
        const newDir = this.getOrCreateDir(to);

        for (const fileEntry of dir.files.entries())
            newDir.files.set(FileUtils.pathJoin(to, FileUtils.getBaseName(fileEntry[0])), fileEntry[1]);
    }

    fileExists(filePath: string) {
        filePath = FileUtils.getStandardizedAbsolutePath(this, filePath);
        const dirPath = FileUtils.getDirPath(filePath);
        const dir = this.directories.get(dirPath);
        if (dir == null)
            return Promise.resolve(false);

        return Promise.resolve(dir.files.has(filePath));
    }

    directoryExists(dirPath: string) {
        dirPath = FileUtils.getStandardizedAbsolutePath(this, dirPath);
        return Promise.resolve(this.directories.has(dirPath));
    }

    getCurrentDirectory() {
        return "/";
    }

    glob(patterns: ReadonlyArray<string>): string[] {
        const filePaths: string[] = [];

        const allFilePaths = Array.from(getAllFilePaths(this.directories.values()));
        return matchGlobs(allFilePaths, patterns, this.getCurrentDirectory());

        function* getAllFilePaths(directories: IterableIterator<VirtualDirectory>) {
            for (const dir of directories) {
                yield* dir.files.keys();
            }
        }
    }

    private getOrCreateDir(dirPath: string) {
        let dir = this.directories.get(dirPath);

        if (dir == null) {
            dir = { path: dirPath, files: new Map<string, string>() };
            this.directories.set(dirPath, dir);
            const parentDirPath = FileUtils.getDirPath(dirPath);
            if (parentDirPath !== dirPath)
                this.getOrCreateDir(parentDirPath);
        }

        return dir;
    }
}

function* getDescendantDirectories(directoryPaths: IterableIterator<string>, dirPath: string) {
    for (const path of directoryPaths) {
        if (FileUtils.pathStartsWith(path, dirPath))
            yield path;
    }
}
