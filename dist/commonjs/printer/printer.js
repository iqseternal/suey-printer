"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Printer = exports.printTrace = exports.printError = exports.printWarn = exports.printInfo = exports.printClear = void 0;
const core_1 = require("../core/core");
const decorator_1 = require("../decorator/decorator");
function printClear() {
    console.log((0, core_1.toPrintClear)());
    console.clear();
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
class Printer {
    static middleWare = () => (void 0);
    constructor(middleWare) {
        Printer.middleWare = middleWare;
    }
    print = core_1.print;
    printInfo = printInfo;
    printWarn = printWarn;
    printError = printError;
    printTrace = printTrace;
}
exports.Printer = Printer;
__decorate([
    (0, decorator_1.Effect)(Printer.middleWare),
    __metadata("design:type", Object)
], Printer.prototype, "print", void 0);
__decorate([
    (0, decorator_1.Effect)(Printer.middleWare),
    __metadata("design:type", Object)
], Printer.prototype, "printInfo", void 0);
__decorate([
    (0, decorator_1.Effect)(Printer.middleWare),
    __metadata("design:type", Object)
], Printer.prototype, "printWarn", void 0);
__decorate([
    (0, decorator_1.Effect)(Printer.middleWare),
    __metadata("design:type", Object)
], Printer.prototype, "printError", void 0);
__decorate([
    (0, decorator_1.Effect)(Printer.middleWare),
    __metadata("design:type", Object)
], Printer.prototype, "printTrace", void 0);
//# sourceMappingURL=printer.js.map