"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrintStyleMessage = exports.isPrintStyleMessageArr = exports.print = exports.toPrintMessage = exports.toColor = exports.toPrintArr = exports.toPrintStyle = exports.toPrintType = exports.toPrintClear = void 0;
const define_1 = require("../define");
const messageType_1 = require("./messageType");
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
        return new messageType_1.__SYMBLE_MESSAGE__(define_1.keyToAnsi[style] ?? '', define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG);
    if (Array.isArray(style))
        return new messageType_1.__SYMBLE_MESSAGE__(style.reduce((pre, cur) => pre + (define_1.keyToAnsi[cur] ?? ''), ''), define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG);
    if (typeof style === 'object') {
        let styleBuffer = '';
        for (const key in style) {
            if (key && style[key]) {
                styleBuffer += `${key.replace(/[A-Z]/g, (match) => {
                    return '-' + match;
                })}:${style[key]};`;
            }
        }
        return new messageType_1.__SYMBLE_MESSAGE__(styleBuffer, define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_CSS_STYLE_FLAG);
    }
    return new messageType_1.__SYMBLE_MESSAGE__('', define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG);
}
exports.toPrintStyle = toPrintStyle;
const toPrintArr = (arr) => new messageType_1.__SYMBLE_MESSAGE__(arr, define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_ARR_FLAG);
exports.toPrintArr = toPrintArr;
function toColor(style, ...message) {
    const styleBufferArr = toPrintStyle(style);
    if (styleBufferArr.flag === define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_CSS_STYLE_FLAG) {
        return new messageType_1.__SYMBLE_ARRAY__([(0, exports.toPrintClear)(), styleBufferArr, ...message]);
    }
    if (styleBufferArr.flag === define_1.DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG) {
        return new messageType_1.__SYMBLE_ARRAY__([(0, exports.toPrintClear)() + styleBufferArr.data, ...message]);
    }
    return new messageType_1.__SYMBLE_ARRAY__(['']);
}
exports.toColor = toColor;
function toPrintMessage(...message) {
    message.unshift((0, exports.toPrintClear)());
    const typeArr = [];
    const msgArr = [];
    message.forEach(ms => {
        if (ms instanceof messageType_1.__SYMBLE_ARRAY__) {
            const data = ms.data;
            let type = data[0];
            for (let i = 1; i < data.length; i++) {
                if (data[i] instanceof messageType_1.__SYMBLE_MESSAGE__) {
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
exports.toPrintMessage = toPrintMessage;
function print(...message) {
    console.log(...toPrintMessage(...message));
}
exports.print = print;
const isPrintStyleMessageArr = (target) => {
    return target instanceof messageType_1.__SYMBLE_ARRAY__;
};
exports.isPrintStyleMessageArr = isPrintStyleMessageArr;
const isPrintStyleMessage = (target) => {
    return target instanceof messageType_1.__SYMBLE_MESSAGE__;
};
exports.isPrintStyleMessage = isPrintStyleMessage;
//# sourceMappingURL=print.js.map