import { print } from "../core/core";
/**
 * 打印一条日志
 * @param message
 */
export declare function printInfo(...message: unknown[]): void;
/**
 * 打印一条警告信息
 * @param message
 */
export declare function printWarn(...message: unknown[]): void;
/**
 * 打印一条错误信息
 * @param message
 */
export declare function printError(...message: unknown[]): void;
/**
 * 打印调用栈信息
 * @param message
 */
export declare function printTrace(...message: unknown[]): void;
export declare class Printer {
    private static middleWare;
    constructor(middleWare: (target?: object, key?: string | symbol) => void);
    print: typeof print;
    printInfo: typeof printInfo;
    printWarn: typeof printWarn;
    printError: typeof printError;
    printTrace: typeof printTrace;
}
