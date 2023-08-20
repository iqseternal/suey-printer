import { STYLE, keyToAnsi, DEFINE_MESSAGE } from '../define/define';
export function toPrintClear() {
    const clearMsg = keyToAnsi[STYLE.NORMAL];
    clearMsg.constructor.prototype.__process_id__ = DEFINE_MESSAGE.PRINTER_MESSAGE_CLEAR_FLAG;
    return clearMsg;
}
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
        return keyToAnsi[style] ?? '';
    if (Array.isArray(style))
        return style.reduce((pre, cur) => pre + (keyToAnsi[cur] ?? ''), '');
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
export function toPrintArr(arr) {
    arr.constructor.prototype.__process_id__ = DEFINE_MESSAGE.PRINTER_MESSAGE_ARR_FLAG;
    return arr;
}
export function toColor(style, ...message) {
    const styleBufferArr = toPrintStyle(style);
    return toPrintArr([styleBufferArr, ...message]);
}
export function print(...message) {
    const typeArr = [];
    const msgArr = [];
    message.forEach(ms => {
        if (Array.isArray(ms) && ms.__process_id__ === DEFINE_MESSAGE.PRINTER_MESSAGE_ARR_FLAG) {
            const type = ms.shift();
            if (type !== '')
                typeArr.push(type);
            msgArr.push(...ms);
            return;
        }
        if (Array.isArray(ms)) {
            msgArr.push(...ms);
        }
        if (typeof ms === 'string' && (ms.startsWith('\x1B[') || ms.includes('%c') || ms.includes('%s'))) {
            msgArr.push(ms);
            return;
        }
        msgArr.push(ms);
    });
    let typeBuffer = toPrintClear();
    let msgIndex = 0;
    typeArr.forEach(types => {
        typeBuffer += types;
        if (msgIndex < msgArr.length) {
            typeBuffer += toPrintType(msgArr[msgIndex]);
            msgIndex++;
        }
    });
    console.log(typeBuffer, ...msgArr);
}
//# sourceMappingURL=core.js.map