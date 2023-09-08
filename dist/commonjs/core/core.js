"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.print = exports.toColor = exports.toPrintArr = exports.toPrintStyle = exports.toPrintType = exports.toPrintClear = void 0;
const define_1 = require("../define/define");
class __SYMBLE_MESSAGE__ {
    data;
    flag;
    constructor(data, flag) {
        this.data = data;
        this.flag = flag;
    }
}
class __SYMBLE_ARRAY__ {
    data;
    constructor(data) {
        this.data = data;
    }
}
const toPrintClear = () => define_1.keyToAnsi[define_1.STYLE.NORMAL];
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
        return new __SYMBLE_MESSAGE__(define_1.keyToAnsi[style] ?? '', define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG);
    if (Array.isArray(style))
        return new __SYMBLE_MESSAGE__(style.reduce((pre, cur) => pre + (define_1.keyToAnsi[cur] ?? ''), ''), define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG);
    if (typeof style === 'object') {
        let styleBuffer = '';
        for (const key in style) {
            if (key && style[key]) {
                styleBuffer += `${key.replace(/[A-Z]/g, (match) => {
                    return '-' + match;
                })}:${style[key]};`;
            }
        }
        return new __SYMBLE_MESSAGE__(styleBuffer, define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_CSS_STYLE_FLAG);
    }
    return new __SYMBLE_MESSAGE__('', define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG);
}
exports.toPrintStyle = toPrintStyle;
const toPrintArr = (arr) => new __SYMBLE_MESSAGE__(arr, define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_ARR_FLAG);
exports.toPrintArr = toPrintArr;
function toColor(style, ...message) {
    const styleBufferArr = toPrintStyle(style);
    if (styleBufferArr.flag === define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_CSS_STYLE_FLAG) {
        return new __SYMBLE_ARRAY__([(0, exports.toPrintClear)(), styleBufferArr, ...message]);
    }
    if (styleBufferArr.flag === define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG) {
        return new __SYMBLE_ARRAY__([(0, exports.toPrintClear)() + styleBufferArr.data, ...message]);
    }
    return new __SYMBLE_ARRAY__(['']);
}
exports.toColor = toColor;
function print(...message) {
    const typeArr = [];
    const msgArr = [];
    message.forEach(ms => {
        if (ms instanceof __SYMBLE_ARRAY__) {
            const data = ms.data;
            let type = data.shift();
            for (let i = 0; i < data.length; i++) {
                if (data[i] instanceof __SYMBLE_MESSAGE__) {
                    if (data[i].flag === define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_CSS_STYLE_FLAG) {
                        type += '%c';
                        msgArr.push(data[i].data);
                    }
                    if (data[i].flag === define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG)
                        type += data[i].data;
                    continue;
                }
                type += toPrintType(data[i]);
                msgArr.push(data[i]);
            }
            typeArr.push(type);
            return;
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