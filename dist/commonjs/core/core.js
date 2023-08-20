"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.print = exports.toColor = exports.toPrintArr = exports.toPrintStyle = exports.toPrintType = exports.toPrintClear = void 0;
const define_1 = require("../define/define");
function toPrintClear() {
    const clearMsg = define_1.keyToAnsi[define_1.STYLE.NORMAL];
    clearMsg.constructor.prototype.__process_id__ = define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_CLEAR_FLAG;
    return clearMsg;
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
function toPrintStyle(style) {
    if (typeof style === 'string')
        return define_1.keyToAnsi[style] ?? '';
    if (Array.isArray(style))
        return style.reduce((pre, cur) => pre + (define_1.keyToAnsi[cur] ?? ''), '');
    if (typeof style === 'object') {
        let styleBuffer = '';
        for (const key in style) {
            if (key && style[key]) {
                styleBuffer += `${key.replace(/[A-Z]/g, (match) => {
                    return '-' + match;
                })}:${style[key]};`;
            }
        }
        return styleBuffer;
    }
    return '';
}
exports.toPrintStyle = toPrintStyle;
function toPrintArr(arr) {
    arr.constructor.prototype.__process_id__ = define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_ARR_FLAG;
    return arr;
}
exports.toPrintArr = toPrintArr;
function toColor(style, ...message) {
    const styleBufferArr = toPrintStyle(style);
    return toPrintArr([toPrintClear() + styleBufferArr, ...message]);
}
exports.toColor = toColor;
function print(...message) {
    const typeArr = [];
    const msgArr = [];
    message.forEach(ms => {
        if (Array.isArray(ms) && ms.__process_id__ === define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_ARR_FLAG) {
            let type = ms.shift();
            for (let i = 0; i < ms.length; i++)
                type += toPrintType(ms[i]);
            typeArr.push(type);
            if (ms.length)
                msgArr.push(...ms);
            return;
        }
        if (Array.isArray(ms)) {
            ms.forEach(m => {
                typeArr.push(toPrintType(m));
                msgArr.push(m);
            });
        }
        if (typeof ms === 'string' && (ms.startsWith('\x1B[') || ms.includes('%c') || ms.includes('%s'))) {
            typeArr.push(ms);
            return;
        }
        typeArr.push(toPrintType(ms));
        msgArr.push(ms);
    });
    console.log(typeArr.reduce((pre, cur) => pre + cur, ''), ...msgArr);
}
exports.print = print;
//# sourceMappingURL=core.js.map