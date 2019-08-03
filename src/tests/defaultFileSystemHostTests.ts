import { expect } from "chai";
import * as errors from "../errors";
import { DefaultFileSystemHost } from "../fileSystem";
import { createFileSystemHostTest } from "./fileSystemHostTest";

describe("DefaultFileSystemHostGeneric", createFileSystemHostTest("DefaultFileSystemHostGeneric", () => new DefaultFileSystemHost()));

describe("DefaultFileSystemHost", () => {
    // describe("DefaultFileSystemHost.readDirSync", () => {
    //     it("should throw a directory not found exception when reading a directory that doesn't exist", () => {
    //         expect(() => new DefaultFileSystemHost().readDirSync("testing/this/random/dir/out")).to.throw(errors.DirectoryNotFoundError);
    //     });
    // });

    describe("DefaultFileSystemHost.readDir", () => {
        it("should throw a directory not found exception when reading a directory that doesn't exist", async () => {
            let caughtErr: any;
            try {
                await new DefaultFileSystemHost().readDir("testing/this/random/dir/out");
            } catch (err) {
                caughtErr = err;
            }

            expect(caughtErr).to.be.instanceOf(errors.DirectoryNotFoundError);
        });
    });

    describe("DefaultFileSystemHost.readFile", () => {
        it("should throw a file not found exception when reading a file that doesn't exist", async () => {
            let caughtErr: any;
            try {
                await new DefaultFileSystemHost().readFile("testing/this/random/dir/out.ts");
            } catch (err) {
                caughtErr = err;
            }

            expect(caughtErr).to.be.instanceOf(errors.FileNotFoundError);
        });
    });

    // describe("DefaultFileSystemHost.deleteSync", () => {
    //     it("should not throw a file not found exception when deleting a path that doesn't exist", () => {
    //         expect(() => new DefaultFileSystemHost().deleteSync("testing/this/random/dir/out.ts")).to.throw(errors.FileNotFoundError);
    //     });
    // });

    describe("DefaultFileSystemHost.delete", () => {
        it("should not throw a file not found exception when deleting a path that doesn't exist", async () => {
            let caughtErr: any;
            try {
                await new DefaultFileSystemHost().delete("testing/this/random/dir/out.ts");
            } catch (err) {
                caughtErr = err;
            }

            expect(caughtErr).to.be.instanceOf(errors.FileNotFoundError);
        });
    });
});
