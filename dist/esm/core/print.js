import { Ansi, DEFINE_MESSAGE } from '../define';
export class __SYMBOL_MESSAGE__ {
    data;
    flag;
    constructor(data, flag) {
        this.data = data;
        this.flag = flag;
    }
}
export class __SYMBOL_ARRAY__ {
    data;
    constructor(data) {
        this.data = data;
    }
}
export const toPrintClear = () => Ansi.AnsiTransformer[Ansi.AnsiEnum.NORMAL];
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
        return new __SYMBOL_MESSAGE__(Ansi.AnsiTransformer[style] ?? '', DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG);
    if (Array.isArray(style))
        return new __SYMBOL_MESSAGE__(style.reduce((pre, cur) => pre + (Ansi.AnsiTransformer[cur] ?? ''), ''), DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG);
    if (typeof style === 'object') {
        let styleBuffer = '';
        for (const key in style) {
            if (key && style[key]) {
                styleBuffer += `${key.replace(/[A-Z]/g, (match) => {
                    return '-' + match;
                })}:${style[key]};`;
            }
        }
        return new __SYMBOL_MESSAGE__(styleBuffer, DEFINE_MESSAGE.PRINTER_MESSAGE_CSS_STYLE_FLAG);
    }
    return new __SYMBOL_MESSAGE__('', DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG);
}
export function toColor(style, ...message) {
    const styleBufferArr = toPrintStyle(style);
    if (styleBufferArr.flag === DEFINE_MESSAGE.PRINTER_MESSAGE_CSS_STYLE_FLAG) {
        return new __SYMBOL_ARRAY__([toPrintClear(), styleBufferArr, ...message]);
    }
    if (styleBufferArr.flag === DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG) {
        return new __SYMBOL_ARRAY__([toPrintClear() + styleBufferArr.data, ...message]);
    }
    return new __SYMBOL_ARRAY__(['']);
}
function toPrintMessage(...message) {
    message.unshift(toPrintClear());
    const typeArr = [];
    const msgArr = [];
    message.forEach(ms => {
        if (ms instanceof __SYMBOL_ARRAY__) {
            const data = ms.data;
            let type = data[0];
            for (let i = 1; i < data.length; i++) {
                if (data[i] instanceof __SYMBOL_MESSAGE__) {
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
    typeArr.push(toPrintClear());
    msgArr.pop();
    msgArr.push('');
    return [typeArr.reduce((pre, cur) => pre + cur, ''), ...msgArr];
}
export function print(...message) {
    console.log(...toPrintMessage(...message));
}
//# sourceMappingURL=print.js.map