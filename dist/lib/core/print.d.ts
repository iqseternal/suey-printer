import { Ansi, DEFINE_MESSAGE } from '../define';
import { StandardLonghandProperties } from 'csstype';
/**
 * 创建一个格式化打印的标识
 */
export declare class __SYMBOL_MESSAGE__<T> {
    /**
     * 格式化打印的数据
     */
    readonly data: T;
    /**
     * 格式化打印的标识
     */
    readonly flag: typeof DEFINE_MESSAGE[keyof typeof DEFINE_MESSAGE];
    constructor(
    /**
     * 格式化打印的数据
     */
    data: T, 
    /**
     * 格式化打印的标识
     */
    flag: typeof DEFINE_MESSAGE[keyof typeof DEFINE_MESSAGE]);
}
/**
 * 创建一个格式化打印的数组标识
 */
export declare class __SYMBOL_ARRAY__<T> {
    /**
     * 格式化打印的数据
     */
    readonly data: T;
    constructor(
    /**
     * 格式化打印的数据
     */
    data: T);
}
/**
 * 清除 ANSI 带来的效果
 * @returns {string} 格式化清除字符串
 */
export declare const toPrintClear: () => string;
/**
 * 创建一份格式化打印的样式信息, 通过建立这个样式信息, 可以让紧随其后的信息格式化打印.
 * 该函数需要你传递一个 CSS / ANSI 标识或者 CSS / ANSI 标识数组以标识格式化样式信息
 * @param style ANSI 样式信息
 * @param message 需要格式化打印的信息
 * @returns 返回格式化输出数组
 */
export declare function toColor<T>(style: Ansi.AnsiValue | Ansi.AnsiValue[] | StandardLonghandProperties, ...message: T[]): __SYMBOL_ARRAY__<[string, ...((string | T | __SYMBOL_MESSAGE__<string>)[])]>;
/**
 * 调用这个函数你可以格式化打印你想要的信息, 相比于 console.log, 此函数的调用更加符合函数化, 人性化
 * 请注意, 由于控制台所处于的平台不同, 可能出现打印失效的情况
 * 例如：CSS 样式, 可能在 Windows 控制台中可能就会出现不支持的情况
 * 目前 ANSI 模式表现良好
 *
 * @example print('HelloWorld'); // 无格式化信息
 * @example print(toColor('red', 'HelloWorld'), '你的打印信息的位置可以自己选择'); // 使用toColor配合,红色字体信息
 * @example print(toColor('red'), 'HelloWorld'); // 使用toColor配合,红色字体信息
 * @example print(toColor(['white', 'red:bg']), 'HelloWorld'); // 使用toColor创建多ANSI格式的样式
 * @example print(toColor({ color: 'red' }), 'HelloWorld'); // 使用toColor创建css格式的样式, 用这个方式相较于直接书写css更加友好,具有ts类型提示
 */
export declare function print(...message: unknown[]): void;
