System.register("modulo1", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("modulo2", [], function (exports_2, context_2) {
    "use strict";
    var numberRegexp, ZipCodeValidator;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            exports_2("numberRegexp", numberRegexp = /^[0-9]+$/);
            ZipCodeValidator = class ZipCodeValidator {
                isAcceptable(postalCode) {
                    return postalCode.length === 5 && numberRegexp.test(postalCode);
                }
            };
            exports_2("zpValidate", ZipCodeValidator);
        }
    };
});
System.register("module3", ["modulo2"], function (exports_3, context_3) {
    "use strict";
    var modulo2_1, data;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (modulo2_1_1) {
                modulo2_1 = modulo2_1_1;
            }
        ],
        execute: function () {
            data = new modulo2_1.zpValidate();
            data.isAcceptable("92029");
        }
    };
});
