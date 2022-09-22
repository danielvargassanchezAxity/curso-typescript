"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zpValidate = exports.numberRegexp = void 0;
exports.numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(postalCode) {
        return postalCode.length === 5 && exports.numberRegexp.test(postalCode);
    }
}
exports.zpValidate = ZipCodeValidator;
