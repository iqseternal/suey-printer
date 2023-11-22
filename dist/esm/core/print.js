import { STYLE, keyToAnsi, DEFINE_MESSAGE } from '../define';
import { __SYMBLE_MESSAGE__, __SYMBLE_ARRAY__ } from './messageType';
export const toPrintClear = () => keyToAnsi[STYLE.NORMAL];
export function toPrintType(target) {
    if (typeof target === 'number')
        return '%f';
    if (typeof target === 'undefined' || typeof target === 'symbol' ||
        typeof target === 'string' || typeof target === 'bigint' ||
        typeof target === 'boolean' || !target)
        return '%s';
    return '%O';
}
export function toPrintStyle(style) {
    if (typeof style === 'string')
        return new __SYMBLE_MESSAGE__(keyToAnsi[style] ?? '', DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG);
    if (Array.isArray(style))
        return new __SYMBLE_MESSAGE__(style.reduce((pre, cur) => pre + (keyToAnsi[cur] ?? ''), ''), DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG);
    if (typeof style === 'object') {
        let styleBuffer = '';
        for (const key in style) {
            if (key && style[key]) {
                styleBuffer += `${key.replace(/[A-Z]/g, (match) => {
                    return '-' + match;
                })}:${style[key]};`;
            }
        }
        return new __SYMBLE_MESSAGE__(styleBuffer, DEFINE_MESSAGE.PRINTER_MESSAGE_CSS_STYLE_FLAG);
    }
    return new __SYMBLE_MESSAGE__('', DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG);
}
export const toPrintArr = (arr) => new __SYMBLE_MESSAGE__(arr, DEFINE_MESSAGE.PRINTER_MESSAGE_ARR_FLAG);
export function toColor(style, ...message) {
    const styleBufferArr = toPrintStyle(style);
    if (styleBufferArr.flag === DEFINE_MESSAGE.PRINTER_MESSAGE_CSS_STYLE_FLAG) {
        return new __SYMBLE_ARRAY__([toPrintClear(), styleBufferArr, ...message]);
    }
    if (styleBufferArr.flag === DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG) {
        return new __SYMBLE_ARRAY__([toPrintClear() + styleBufferArr.data, ...message]);
    }
    return new __SYMBLE_ARRAY__(['']);
}
export function toPrintMessage(...message) {
    message.unshift(toPrintClear());
    message.push(toPrintClear());
    const typeArr = [];
    const msgArr = [];
    message.forEach(ms => {
        if (ms instanceof __SYMBLE_ARRAY__) {
            const data = ms.data;
            let type = data.shift();
            for (let i = 0; i < data.length; i++) {
                if (data[i] instanceof __SYMBLE_MESSAGE__) {
                    if (data[i].flag === DEFINE_MESSAGE.PRINTER_MESSAGE_CSS_STYLE_FLAG) {
                        type += '%c';
                        msgArr.push(data[i].data);
                    }
                    if (data[i].flag === DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG)
                        type += data[i].data;
                    continue;
                }
                type += toPrintType(data[i]);
                type += '%s';
                msgArr.push(data[i]);
                msgArr.push(' ');
            }
            typeArr.push(type);
            if (msgArr.length !== 0 && data.length !== 0) {
                typeArr.push('%s');
                msgArr.push(' ');
            }
            return;
        }
        if (typeof ms === 'string' && (ms.startsWith('\x1B[') || ms.includes('%c') || ms.includes('%s'))) {
            typeArr.push(ms);
            return;
        }
        typeArr.push(toPrintType(ms));
        msgArr.push(ms);
        if (msgArr.length !== 0) {
            typeArr.push(`${toPrintClear()}%s`);
            msgArr.push(' ');
        }
    });
    const d = typeArr.pop();
    typeArr.pop();
    typeArr.push(d);
    msgArr.pop();
    return [typeArr.reduce((pre, cur) => pre + cur, ''), ...msgArr];
}
export function print(...message) {
    console.log(...toPrintMessage(...message));
}
//# sourceMappingURL=print.js.map