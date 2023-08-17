"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.print = exports.toColor = exports.toPrintArr = exports.toPrintStyle = exports.toPrintType = exports.toPrintClear = void 0;
const define_1 = require("../define/define");
function toPrintClear() {
    return define_1.keyToAnsi[define_1.STYLE.NORMAL];
}
exports.toPrintClear = toPrintClear;
function toPrintType(target) {
    if (typeof target === 'number')
        return '%f';
    if (typeof target === 'undefined' || typeof target === 'symbol' ||
        typeof target === 'string' || typeof target === 'bigint' ||
        typeof target === 'boolean' || !target)
        return '%s';
    return '%O';
}
exports.toPrintType = toPrintType;
function toPrintStyle(style, ...message) {
    const type = message.reduce((pre, cur) => {
        return pre + toPrintType(cur);
    }, '');
    if (typeof style === 'string')
        return [define_1.keyToAnsi[style] + type];
    if (Array.isArray(style))
        return [style.reduce((pre, cur) => pre + define_1.keyToAnsi[cur], '') + type];
    let styleBuffer = '';
    let typeBuffer = '%c' + type;
    for (const key in style)
        if (key && style[key])
            styleBuffer += `${key.replace(/[A-Z]/g, (match) => {
                return '-' + match;
            })}:${style[key]};`;
    return [typeBuffer, styleBuffer];
}
exports.toPrintStyle = toPrintStyle;
function toPrintArr(arr) {
    arr.constructor.prototype.__process_id__ = define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_ARR_FALG;
    return arr;
}
exports.toPrintArr = toPrintArr;
function toColor(style, ...message) {
    const styleBufferArr = toPrintStyle(style, ...message);
    return toPrintArr([...styleBufferArr, ...message]);
}
exports.toColor = toColor;
function print(...message) {
    let buffer = '';
    let idx = 0;
    const msArr = [];
    message.forEach(ms => {
        if (Array.isArray(ms)) {
            if (ms.__process_id__ === define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_ARR_FALG) {
                if (idx !== 0) {
                    console.warn(`你正在使用原生自定义打印, 但是与格式化打印参数个数不匹配.某些打印将会丢失.`);
                    return;
                }
                buffer += ms.shift();
                ms.forEach(m => {
                    msArr.push(m);
                });
                return;
            }
        }
        if (typeof ms === 'string' && /^\s*(?:[a-zA-Z-]+\s*:\s*[a-zA-Z0-9#().,\s]+;?)+\s*$/.test(ms)) {
            if (idx > 0)
                idx--;
            else
                buffer += '%c';
            msArr.push(ms);
            return;
        }
        else if (typeof ms === 'string' && (ms.startsWith('\x1B[') || ms.includes('%c') || ms.includes('%s'))) {
            const matches = (ms.match(/%./g) ?? []).length;
            if (idx !== 0) {
                console.warn(`你正在使用原生自定义打印, 但是与格式化打印参数个数不匹配.某些打印将会丢失.`);
                return;
            }
            if (matches !== 0) {
                buffer += ms;
                idx = matches;
            }
        }
        else {
            if (idx > 0)
                idx--;
            else
                buffer += toPrintType(ms);
            msArr.push(ms);
        }
    });
    const regex = /%./g;
    let match;
    let count = 0;
    while ((match = regex.exec(buffer)) !== null) {
        count++;
        if (count > msArr.length)
            buffer = buffer.substring(0, match.index);
    }
    if (buffer === '')
        console.log(...msArr);
    else
        console.log(buffer, ...msArr);
}
exports.print = print;
//# sourceMappingURL=core.js.map