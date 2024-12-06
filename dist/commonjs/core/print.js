"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.print = exports.toColor = exports.toPrintClear = exports.__SYMBOL_ARRAY__ = exports.__SYMBOL_MESSAGE__ = void 0;
const define_1 = require("../define");
class __SYMBOL_MESSAGE__ {
    data;
    flag;
    constructor(data, flag) {
        this.data = data;
        this.flag = flag;
    }
}
exports.__SYMBOL_MESSAGE__ = __SYMBOL_MESSAGE__;
class __SYMBOL_ARRAY__ {
    data;
    constructor(data) {
        this.data = data;
    }
}
exports.__SYMBOL_ARRAY__ = __SYMBOL_ARRAY__;
const toPrintClear = () => define_1.Ansi.AnsiTransformer[define_1.Ansi.AnsiEnum.NORMAL];
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
function toPrintStyle(style) {
    if (typeof style === 'string')
        return new __SYMBOL_MESSAGE__(define_1.Ansi.AnsiTransformer[style] ?? '', define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG);
    if (Array.isArray(style))
        return new __SYMBOL_MESSAGE__(style.reduce((pre, cur) => pre + (define_1.Ansi.AnsiTransformer[cur] ?? ''), ''), define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG);
    if (typeof style === 'object') {
        let styleBuffer = '';
        for (const key in style) {
            if (key && style[key]) {
                styleBuffer += `${key.replace(/[A-Z]/g, (match) => {
                    return '-' + match;
                })}:${style[key]};`;
            }
        }
        return new __SYMBOL_MESSAGE__(styleBuffer, define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_CSS_STYLE_FLAG);
    }
    return new __SYMBOL_MESSAGE__('', define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG);
}
function toColor(style, ...message) {
    const styleBufferArr = toPrintStyle(style);
    if (styleBufferArr.flag === define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_CSS_STYLE_FLAG) {
        return new __SYMBOL_ARRAY__([(0, exports.toPrintClear)(), styleBufferArr, ...message]);
    }
    if (styleBufferArr.flag === define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG) {
        return new __SYMBOL_ARRAY__([(0, exports.toPrintClear)() + styleBufferArr.data, ...message]);
    }
    return new __SYMBOL_ARRAY__(['']);
}
exports.toColor = toColor;
function toPrintMessage(...message) {
    message.unshift((0, exports.toPrintClear)());
    const typeArr = [];
    const msgArr = [];
    message.forEach(ms => {
        if (ms instanceof __SYMBOL_ARRAY__) {
            const data = ms.data;
            let type = data[0];
            for (let i = 1; i < data.length; i++) {
                if (data[i] instanceof __SYMBOL_MESSAGE__) {
                    if (data[i].flag === define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_CSS_STYLE_FLAG) {
                        type += '%c';
                        msgArr.push(data[i].data);
                    }
                    if (data[i].flag === define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG)
                        type += data[i].data;
                    continue;
                }
                type += toPrintType(data[i]);
                type += '%s';
                msgArr.push(data[i]);
                msgArr.push(' ');
            }
            if (type)
                typeArr.push(type);
            return;
        }
        if (typeof ms === 'string' && (ms.startsWith('\x1B[') || ms.includes('%c') || ms.includes('%s'))) {
            typeArr.push(ms);
            return;
        }
        typeArr.push(toPrintType(ms));
        msgArr.push(ms);
        if (msgArr.length !== 0) {
            typeArr.push(`%s`);
            msgArr.push(' ');
        }
    });
    typeArr.push((0, exports.toPrintClear)());
    msgArr.pop();
    msgArr.push('');
    return [typeArr.reduce((pre, cur) => pre + cur, ''), ...msgArr];
}
function print(...message) {
    console.log(...toPrintMessage(...message));
}
exports.print = print;
//# sourceMappingURL=print.js.map