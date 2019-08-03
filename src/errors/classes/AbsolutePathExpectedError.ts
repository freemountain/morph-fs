import { BaseError } from "./BaseError";

export class AbsolutePathExpectedError extends BaseError {
    /** @private */
    constructor(public readonly path: string) {
        super(`Expected absolute Path. (path: ${path}`, AbsolutePathExpectedError.prototype);
    }
}

