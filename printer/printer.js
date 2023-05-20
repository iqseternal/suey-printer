var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { print, toColor } from "../core/core";
import { Effect } from '../decorator/decorator';
/**
 * 打印一条日志
 * @param message
 */
export function printInfo(...message) {
    print(toColor('blue'), ...message);
}
/**
 * 打印一条警告信息
 * @param message
 */
export function printWarn(...message) {
    print(toColor('yellow'), ...message);
}
/**
 * 打印一条错误信息
 * @param message
 */
export function printError(...message) {
    print(toColor({ color: 'red' }), ...message);
}
/**
 * 打印调用栈信息
 * @param message
 */
export function printTrace(...message) {
    print('还没写怎么打印调用栈');
}
class Printer {
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
export { Printer };
//# sourceMappingURL=printer.js.map