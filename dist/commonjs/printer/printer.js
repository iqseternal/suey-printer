"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printTrace = exports.printError = exports.printWarn = exports.printInfo = exports.printClear = void 0;
const core_1 = require("../core/core");
function printClear() {
    console.log((0, core_1.toPrintClear)());
}
exports.printClear = printClear;
function printInfo(...message) {
    (0, core_1.print)((0, core_1.toColor)('blue'), ...message);
}
exports.printInfo = printInfo;
function printWarn(...message) {
    (0, core_1.print)((0, core_1.toColor)('yellow'), ...message);
}
exports.printWarn = printWarn;
function printError(...message) {
    (0, core_1.print)((0, core_1.toColor)('red'), ...message);
}
exports.printError = printError;
function printTrace(...message) {
    (0, core_1.print)('还没写怎么打印调用栈');
}
exports.printTrace = printTrace;
//# sourceMappingURL=printer.js.map