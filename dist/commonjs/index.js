"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Printer = exports.printClear = exports.printError = exports.printWarn = exports.printInfo = exports.toPrintClear = exports.toColor = exports.print = void 0;
var print_1 = require("./core/print");
Object.defineProperty(exports, "print", { enumerable: true, get: function () { return print_1.print; } });
Object.defineProperty(exports, "toColor", { enumerable: true, get: function () { return print_1.toColor; } });
Object.defineProperty(exports, "toPrintClear", { enumerable: true, get: function () { return print_1.toPrintClear; } });
var base_1 = require("./core/base");
Object.defineProperty(exports, "printInfo", { enumerable: true, get: function () { return base_1.printInfo; } });
Object.defineProperty(exports, "printWarn", { enumerable: true, get: function () { return base_1.printWarn; } });
Object.defineProperty(exports, "printError", { enumerable: true, get: function () { return base_1.printError; } });
Object.defineProperty(exports, "printClear", { enumerable: true, get: function () { return base_1.printClear; } });
var printer_1 = require("./printer/printer");
Object.defineProperty(exports, "Printer", { enumerable: true, get: function () { return printer_1.Printer; } });
//# sourceMappingURL=index.js.map