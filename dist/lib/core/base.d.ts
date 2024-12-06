/**
 * 清除之前的打印带来的副作用
 */
export declare function printClear(): void;
/**
 * 打印一条日志
 */
export declare function printInfo(...message: unknown[]): void;
/**
 * 打印一条警告信息
 */
export declare function printWarn(...message: unknown[]): void;
/**
 * 打印一条错误信息
 */
export declare function printError(...message: unknown[]): void;
/**
 * 打印调用栈信息
 */
export declare function printTrace(...message: unknown[]): void;
