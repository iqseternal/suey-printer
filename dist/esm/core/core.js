import { STYLE, keyToAnsi, DEFINE_MESSAGE } from '../define/define';
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
export function print(...message) {
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
//# sourceMappingURL=core.js.map