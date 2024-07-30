import { scrypt, randomBytes } from 'crypto';
import { promisify } from "util";

const scrypyAsync = promisify(scrypt)


export class Password {
    static async toHash(password: string) {
        const salt = randomBytes(8).toString("hex")
        const buf = (await scrypyAsync(password, salt, 64)) as Buffer

        return `${buf.toString("hex")}.${salt}`
    }

    static async compare(storedPassword: string, suppliedPassword: string) {
        const [hashPassword, salt] = storedPassword.split(".")
        const buf = (await scrypyAsync(suppliedPassword, salt, 64)) as Buffer
        return buf.toString("hex") === hashPassword
    }
}