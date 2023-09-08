import { toColor, toPrintClear, print } from './print';
export function printClear() {
    console.log(toPrintClear());
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
//# sourceMappingURL=base.js.map