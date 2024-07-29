import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
    statusCode = 400
    constructor() {
        super()
        Object.setPrototypeOf(this, NotFoundError.prototype)

    }

    serializeErrors(): { message: string; field?: string; }[] {
        return [{
            message: "Not Found"
        }]
    }
}