"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.print = exports.toColor = exports.toPrintArr = exports.toPrintStyle = exports.toPrintType = exports.toPrintClear = void 0;
const define_1 = require("../define/define");
/**
 * 清除 ANSI 带来的效果
 * @returns {string} 格式化清除字符串
 */
function toPrintClear() {
    return define_1.keyToAnsi[define_1.STYLE.NORMAL];
}
exports.toPrintClear = toPrintClear;
/**
 * 识别目标的格式化信息，返回目标所对应的格式化字符串
 * @param {any} target 目标对象
 * @returns {PrintTargetType} 得到需要打印的格式化字符信息
 */
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
/**
 * 获得最终的格式化输出数组
 * @param {T[]} arr 需要格式化输出的信息
 * @returns {PrintMessageArray<T>} 返回格式化后的数组信息, 并给这个格式化数组加上唯一标识, 以供 print 函数的识别
 */
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
/**
 * 调用这个函数你可以格式化打印你想要的信息, 相比于 console.log, 此函数的调用更加符合函数化, 人性化
 * 请注意, 由于控制台所处于的平台不同, 可能出现打印失效的情况
 * 例如：CSS 样式, 可能在 Windows 控制台中可能就会出现不支持的情况
 * 目前 ANSI 模式表现良好
 *
 * @example print('HelloWorld'); // 无格式化信息
 * @example print('color: red;', 'HelloWorld'); // 红色HelloWorld字体信息
 * @example print(toColor('red', 'HelloWorld'), '你的打印信息的位置可以自己选择'); // 使用toColor配合,红色字体信息
 * @example print(toColor('red'), 'HelloWrold'); // 使用toColor配合,红色字体信息
 * @example print(toColor(['white', 'red:bg']), 'HelloWorld'); // 使用toColor创建多ANSI格式的样式
 * @example print(toColor({ color: 'red' }), 'HelloWrold'); // 使用toColor创建css格式的样式, 用这个方式相较于直接书写css更加友好,具有ts类型提示
 *
 * @param {...unknown[]} message 需要打印的信息
 * @returns {void}
 */
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
                buffer += ms; // 描述格式化字符
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