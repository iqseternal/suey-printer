var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { print, toColor, toPrintClear } from "../core/core";
import { Effect } from '../decorator/decorator';
export function printClear() {
    console.log(toPrintClear());
    console.clear();
}
export function printInfo(...message) {
    print(toColor('blue'), ...message);
}
export function printWarn(...message) {
    print(toColor('yellow'), ...message);
}
export function printError(...message) {
    print(toColor('red'), ...message);
}
export function printTrace(...message) {
    print('还没写怎么打印调用栈');
}
export class Printer {
    static middleWare = () => (void 0);
    constructor(middleWare) {
        Printer.middleWare = middleWare;
    }
    print = print;
    printInfo = printInfo;
    printWarn = printWarn;
    printError = printError;
    printTrace = printTrace;
}
__decorate([
    Effect(Printer.middleWare),
    __metadata("design:type", Object)
], Printer.prototype, "print", void 0);
__decorate([
    Effect(Printer.middleWare),
    __metadata("design:type", Object)
], Printer.prototype, "printInfo", void 0);
__decorate([
    Effect(Printer.middleWare),
    __metadata("design:type", Object)
], Printer.prototype, "printWarn", void 0);
__decorate([
    Effect(Printer.middleWare),
    __metadata("design:type", Object)
], Printer.prototype, "printError", void 0);
__decorate([
    Effect(Printer.middleWare),
    __metadata("design:type", Object)
], Printer.prototype, "printTrace", void 0);
//# sourceMappingURL=printer.js.map