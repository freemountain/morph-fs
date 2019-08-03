import * as nodeFs from "fs";
import * as mkdirp from "mkdirp";
import * as nodePath from "path";
import * as errors from "../errors";
import { FileUtils } from "../utils";
import { FileSystemHost } from "./FileSystemHost";

const copyDir = require("copy-dir");

export class DefaultFileSystemHost implements FileSystemHost {
    // Prevent "fs-extra" and "globby" from being loaded in environments that don't support it (ex. browsers).
    // This means if someone specifies to use a virtual file system then it won't load this.
    private globby: typeof import ("globby") = require("globby");

    constructor(private root: string) {
        if(!nodePath.isAbsolute(root)) {
            throw new errors.AbsolutePathExpectedError(root);
        }

    }

    delete(path: string) {
        return new Promise<void>((resolve, reject) => {
            nodeFs.unlink(path, err => {
                if (err)
                    reject(this.getFileNotFoundErrorIfNecessary(err, path));
                else
                    resolve();
            });
        });
    }

    readDir(dirPath: string) {
        return new Promise<string[]>((resolve, reject) => nodeFs.readdir(dirPath, (err, files) => {
            if(err) {
                return reject(this.getDirectoryNotFoundErrorIfNecessary(err, dirPath));
            }
            resolve(files.map(name => FileUtils.pathJoin(dirPath, name)));
        }));
    }

    readFile(filePath: string, encoding = "utf-8") {
        return new Promise<string>((resolve, reject) => {
            nodeFs.readFile(filePath, encoding, (err, data) => {
                if (err)
                    reject(this.getFileNotFoundErrorIfNecessary(err, filePath));
                else
                    resolve(data);
            });
        });
    }

    async writeFile(filePath: string, fileText: string) {
        await new Promise<void>((resolve, reject) => {
            nodeFs.writeFile(filePath, fileText, err => {
                if (err)
                    reject(err);
                else
                    resolve();
            });
        });
    }

    async mkdir(dirPath: string) {
        await new Promise<void>((resolve, reject) =>  mkdirp(dirPath, (err) => {
            if(err) {
                return reject(err);
            }
            resolve();
        }))
    }


    async move(srcPath: string, destPath: string) {
        await this.copy(srcPath, destPath);
        await this.delete(srcPath);
    }

    async copy(srcPath: string, destPath: string) {
        await new Promise((resolve, reject) => copyDir(srcPath, destPath, (err: any) => {
            if(err){
                return reject(err);
            }
            resolve();
        }));
    }

    fileExists(filePath: string) {
        return new Promise<boolean>((resolve, reject) => {
            nodeFs.stat(filePath, (err, stat) => {
                if (err)
                    resolve(false);
                else
                    resolve(stat.isFile());
            });
        });
    }

    directoryExists(dirPath: string) {
        return new Promise<boolean>((resolve, reject) => {
            nodeFs.stat(dirPath, (err, stat) => {
                if (err)
                    resolve(false);
                else
                    resolve(stat.isDirectory());
            });
        });
    }

    getCurrentDirectory(): string {
        return FileUtils.standardizeSlashes(nodePath.resolve());
    }

    glob(patterns: ReadonlyArray<string>) {
        return this.globby.sync(patterns, {
            cwd: this.getCurrentDirectory(),
            absolute: true
        });
    }

    isCaseSensitive() {
        const platform = process.platform;
        return platform !== "win32" && platform !== "darwin";
    }

    private getDirectoryNotFoundErrorIfNecessary(err: any, path: string) {
        return FileUtils.isNotExistsError(err) ? new errors.DirectoryNotFoundError(path) : err;
    }

    private getFileNotFoundErrorIfNecessary(err: any, path: string) {
        return FileUtils.isNotExistsError(err) ? new errors.FileNotFoundError(path) : err;
    }
}
