import { StringValidator } from "./modulo1";

export const numberRegexp = /^[0-9]+$/;

class ZipCodeValidator implements StringValidator {
    isAcceptable(postalCode: string): boolean {
        return postalCode.length === 5 && numberRegexp.test(postalCode);
    }
}

export { ZipCodeValidator as zpValidate }