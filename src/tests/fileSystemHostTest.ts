import { expect } from "chai";
import * as errors from "../errors";
import { FileSystemHost } from "../fileSystem";

export const createFileSystemHostTest = (name: string, createFs: () => FileSystemHost) => () => {
    describe(`${name}.delete`, () => {
        it("should delete a file", async () => {
            const fs = createFs();
            const filePath = "/dir/file.ts";
            await fs.writeFile(filePath, "");
            await fs.delete(filePath);
            expect(await fs.fileExists("/dir/file.ts")).to.be.false;
        });

        it("should delete a directory and all its sub directories", async () => {
            const fs = createFs();
            await fs.writeFile("/dir/file.ts", "");
            await fs.writeFile("/dir/subdir/file.ts", "");
            await fs.writeFile("/otherDir/subdir/file.ts", "");
            await fs.delete("/dir");
            expect(await fs.fileExists("/dir/file.ts")).to.be.false;
            expect(await fs.fileExists("/dir/subdir/file.ts")).to.be.false;
            expect(await fs.directoryExists("/dir/subdir")).to.be.false;
            expect(await fs.directoryExists("/dir")).to.be.false;
            expect(await fs.directoryExists("/otherDir")).to.be.true;
            expect(await fs.fileExists("/otherDir/subdir/file.ts")).to.be.true;
        });

        it("should throw an error deleting a directory that doesn't exist", async () => {
            const fs = createFs();
            let caughtErr: any;
            try {
                await fs.delete("/somePath");
            } catch (err) {
                caughtErr = err;
            }
            expect(caughtErr).to.be.instanceOf(errors.FileNotFoundError);
        });

        it("should throw an error deleting a file that doesn't exist", async () => {
            const fs = createFs();
            let caughtErr: any;
            await fs.mkdir("dir");

            try {
                await fs.delete("/dir/file.ts");
            } catch (err) {
                caughtErr = err;
            }
            expect(caughtErr).to.be.instanceOf(errors.FileNotFoundError);
        });
    });

    describe(`${name}.readDir`, () => {
        it("should read a directory that exists", async () => {
            const fs = createFs();
            await fs.writeFile("/dir/file.ts", "");
            await fs.writeFile("/dir/subDir/file.ts", "");
            await fs.writeFile("/dir2/file.ts", "");
            await fs.writeFile("/file.ts", "");
            expect(await fs.readDir("/dir")).to.deep.equal(["/dir/subDir", "/dir/file.ts"]);
        });

        it("should throw when reading a directory that doesn't exists", async () => {
            const fs = createFs();
            let caughtErr: any;

            try {
                await fs.readDir("/dir");
            } catch (err) {
                caughtErr = err;
            }
            expect(caughtErr).to.be.instanceOf(errors.DirectoryNotFoundError);
        });
    });

    describe(`${name}.readFile`, () => {
        it("should read a file that exists", async () => {
            const fs = createFs();
            const filePath = "/dir/file.ts";
            const text = "some text";
            await fs.writeFile(filePath, text);
            expect(await fs.readFile(filePath)).to.equal(text);
        });

        it("should throw reading a file from a directory that doesn't exist", async () => {
            const fs = createFs();
            let thrownErr: any;
            try {
                await fs.readFile("/NonExistentDir/NonExistent.ts");
            } catch (err) {
                thrownErr = err;
            }
            expect(thrownErr).to.be.instanceof(errors.FileNotFoundError);
        });

        it("should throw reading a file that doesn't exist", async () => {
            const fs = createFs();
            let thrownErr: any;
            try {
                await fs.readFile("/NonExistent.ts");
            } catch (err) {
                thrownErr = err;
            }
            expect(thrownErr).to.be.instanceof(errors.FileNotFoundError);
        });
    });

    describe(`${name}.writeFile`, () => {
        it("should write a file", async () => {
            const fs = createFs();
            const filePath = "/dir/file.ts";
            const text = "some text";
            await fs.writeFile(filePath, text);
            expect(await fs.readFile(filePath)).to.equal(text);
        });

        it("should over write a file that exists", async () => {
            const fs = createFs();
            const filePath = "/dir/file.ts";
            const text = "some text";
            await fs.writeFile(filePath, "");
            await fs.writeFile(filePath, text);
            expect(await fs.readFile(filePath)).to.equal(text);
        });

        it("should create the directories", async () => {
            const fs = createFs();
            const filePath = "/dir/subdir/file.ts";
            await fs.writeFile(filePath, "");
            expect(await fs.directoryExists("/dir")).to.be.true;
            expect(await fs.directoryExists("/dir/subdir")).to.be.true;
        });
    });

    describe(`${name}.mkdir`, () => {
        it("should create the directory and all its parent directories", async () => {
            const fs = createFs();
            const path = "/dir/subdir";
            await fs.mkdir(path);
            expect(await fs.directoryExists("/dir")).to.be.true;
            expect(await fs.directoryExists("/dir/subdir")).to.be.true;
        });
    });

    describe(`${name}.copy`, () => {

        it("should copy a directory and all its sub directories", async () => {
            const fs = createFs();
            await fs.writeFile("/dir/subdir/file.ts", "text");
            await fs.writeFile("/dir/subdir/nextSubDir/test.ts", "text2");
            await fs.copy("/dir/subdir", "/newDir/newSubDir");

            expect(await fs.directoryExists("/dir")).to.be.true;
            expect(await fs.directoryExists("/dir/subdir")).to.be.true;
            expect(await fs.readFile("/dir/subdir/file.ts")).to.equal("text");
            expect(await fs.readFile("/dir/subdir/nextSubDir/test.ts")).to.equal("text2");
            expect(await fs.directoryExists("/newDir")).to.be.true;
            expect(await fs.directoryExists("/newDir/newSubDir")).to.be.true;
            expect(await fs.directoryExists("/newDir/newSubDir/nextSubDir")).to.be.true;
            expect(await fs.readFile("/newDir/newSubDir/file.ts")).to.equal("text");
            expect(await fs.readFile("/newDir/newSubDir/nextSubDir/test.ts")).to.equal("text2");
        });

        it("should merge when copying into another directory", async () => {
            const fs = createFs();
            await fs.writeFile("/from/file.ts", "text");
            await fs.writeFile("/from/sub/subFile.ts", "text");
            await fs.writeFile("/to/file.ts", "original");
            await fs.writeFile("/to/test.ts", "text2");
            await fs.writeFile("/to/sub/subFile2.ts", "text3");
            await fs.copy("/from", "/to");

            expect(await fs.directoryExists("/from")).to.be.true;
            expect(await fs.directoryExists("/from/sub")).to.be.true;
            expect(await fs.directoryExists("/to/sub")).to.be.true;
            expect(await fs.readFile("/to/file.ts")).to.equal("text");
            expect(await fs.readFile("/to/test.ts")).to.equal("text2");
            expect(await fs.readFile("/to/sub/subFile2.ts")).to.equal("text3");
        });

        it("should copy a file and create the directory it's being copied to", async () => {
            const fs = createFs();
            await fs.writeFile("/from/file.ts", "text");
            await fs.copy("/from/file.ts", "/to/to.ts");

            expect(await fs.directoryExists("/from")).to.be.true;
            expect(await fs.directoryExists("/to")).to.be.true;
            expect(await fs.readFile("/to/to.ts")).to.equal("text");
        });

        it("should copy a file and overwrite the file it's being copied to", async () => {
            const fs = createFs();
            await fs.writeFile("/from.ts", "text");
            await fs.writeFile("/to.ts", "text2");
            await fs.copy("/from.ts", "/to.ts");

            expect(await fs.readFile("/from.ts")).to.equal("text");
            expect(await fs.readFile("/to.ts")).to.equal("text");
        });

        it("should throw when copying a path that doesn't exist", async () => {
            const fs = createFs();
            let thrownErr: any;
            try {
                await fs.copy("/from.ts", "/to.ts");
            } catch (err) {
                thrownErr = err;
            }

            expect(thrownErr).to.be.instanceof(errors.PathNotFoundError);
        });
    });

    describe(`${name}.move`, () => {

        it("should move a directory and all its sub directories", async () => {
            const fs = createFs();
            await fs.writeFile("/dir/subdir/file.ts", "text");
            await fs.writeFile("/dir/subdir/nextSubDir/test.ts", "text2");
            await fs.move("/dir/subdir", "/newDir/newSubDir");

            expect(await fs.directoryExists("/dir")).to.be.true;
            expect(await fs.directoryExists("/dir/subdir")).to.be.false;
            expect(await fs.directoryExists("/newDir")).to.be.true;
            expect(await fs.directoryExists("/newDir/newSubDir")).to.be.true;
            expect(await fs.readFile("/newDir/newSubDir/file.ts")).to.equal("text");
            expect(await fs.directoryExists("/newDir/newSubDir/nextSubDir")).to.be.true;
            expect(await fs.readFile("/newDir/newSubDir/nextSubDir/test.ts")).to.equal("text2");
        });

        it("should merge two directories", async () => {
            const fs = createFs();
            await fs.writeFile("/from/file.ts", "text");
            await fs.writeFile("/from/sub/subFile.ts", "text");
            await fs.writeFile("/to/file.ts", "original");
            await fs.writeFile("/to/test.ts", "text2");
            await fs.writeFile("/to/sub/subFile2.ts", "text3");
            await fs.move("/from", "/to");

            expect(await fs.directoryExists("/from")).to.be.false;
            expect(await fs.directoryExists("/from/sub")).to.be.false;
            expect(await fs.directoryExists("/to/sub")).to.be.true;
            expect(await fs.readFile("/to/file.ts")).to.equal("text");
            expect(await fs.readFile("/to/test.ts")).to.equal("text2");
            expect(await fs.readFile("/to/sub/subFile2.ts")).to.equal("text3");
        });

        it("should move a file and create the directory it's being moved to", async () => {
            const fs = createFs();
            await fs.writeFile("/from/file.ts", "text");
            await fs.move("/from/file.ts", "/to/to.ts");

            expect(await fs.directoryExists("/from")).to.be.true;
            expect(await fs.directoryExists("/to")).to.be.true;
            expect(await fs.readFile("/to/to.ts")).to.equal("text");
        });

        it("should move a file and overwrite the file it's being moved to", async () => {
            const fs = createFs();
            await fs.writeFile("/from.ts", "text");
            await fs.writeFile("/to.ts", "text2");
            await fs.move("/from.ts", "/to.ts");

            expect(await fs.fileExists("/from.ts")).to.be.false;
            expect(await fs.readFile("/to.ts")).to.equal("text");
        });

        it("should throw when moving a path that doesn't exist", async () => {
            const fs = createFs();
            let thrownErr: any;
            try {
                await fs.move("/from.ts", "/to.ts");
            } catch (err) {
                thrownErr = err;
            }

            expect(thrownErr).to.be.instanceof(errors.PathNotFoundError);
        });
    });

    describe(`${name}.fileExists`, () => {
        const fs = createFs();

        it("should return true for a file that exists", async () => {
            await fs.writeFile("/file.ts", "");
            expect(await fs.fileExists("/file.ts")).to.be.true;
        });

        it("should return false for a file that doesn't exist", async () => {
            await fs.writeFile("/file.ts", "");
            expect(await fs.fileExists("/file2.ts")).to.be.false;
        });
    });

    describe(`${name}.directoryExists`, () => {
        const fs = createFs();

        it("should return true for a directory that exists", async () => {
            await fs.mkdir("/dir");
            expect(await fs.directoryExists("/dir")).to.be.true;
        });

        it("should return false for a directory that doesn't exist", async () => {
            await fs.mkdir("/dir");
            expect(await fs.directoryExists("/dir2")).to.be.false;
        });
    });

    describe(`${name}.glob`, () => {
        const getFs = async () => {
            const fs = createFs();
            await fs.writeFile("/dir/file1.ts", "");
            await fs.writeFile("/dir/file1.d.ts", "");
            await fs.writeFile("/dir/subDir/file2.ts", "");
            await fs.writeFile("/dir/file3.js", "");
            await fs.writeFile("/otherDir/file4.ts", "");
            await fs.writeFile("/dir2/file5.txt", "");
            await fs.writeFile("/dir2/file6.ts", "");
            return fs;
        };

        it("should match all the patterns provided", async () => {
            const fs = await getFs();
            expect(fs.glob(["/dir/**/*.ts", "/**/*.txt", "!/**/*.d.ts"])).to.deep.equal([
                "/dir/file1.ts",
                "/dir/subDir/file2.ts",
                "/dir2/file5.txt"
            ]);
        });

        it("should match all the patterns provided for a relative path", async () => {
            const fs = await getFs();
            expect(fs.glob(["dir/subDir/**/*.ts"])).to.deep.equal([
                "/dir/subDir/file2.ts"
            ]);
        });

        it("should match all the patterns provided for a relative path with a dot", async () => {
            const fs = await getFs();
            expect(fs.glob(["./dir/subDir/**/*.ts"])).to.deep.equal([
                "/dir/subDir/file2.ts"
            ]);
        });
    });
};
