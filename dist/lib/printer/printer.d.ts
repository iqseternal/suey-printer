import { __SYMBOL_ARRAY__ } from '../core';
/**
 * 打印配置
 */
export interface PrintOptions {
    /**
     * 是否自动打印名称
     */
    autoPrintName?: boolean;
    /**
     * 打印名称
     */
    printName?: string;
    /**
     * 是否自动打印时间
     */
    autoPrintTime?: boolean;
    /**
     * 打印时间
     */
    printTime?: () => string;
    /**
     * 是否自动打印类型
     */
    autoPrintType?: boolean;
    /**
     * 打印类型
     */
    printType?: string;
    /**
     * 是否自动打印线程
     */
    autoPrintThead?: boolean;
    /**
     * 打印线程
     */
    printThead?: string;
}
/**
 * 打印颜色配置
 */
export interface ColorInfo {
    /**
     * 打印名称时的样式信息
     */
    printName?: __SYMBOL_ARRAY__<[string, ...(unknown[])]>;
    /**
     * 打印时间时的样式信息
     */
    printTime?: __SYMBOL_ARRAY__<[string, ...(unknown[])]>;
    /**
     * 打印类型时的样式信息
     */
    printType?: __SYMBOL_ARRAY__<[string, ...(unknown[])]>;
    /**
     * 打印线程时的样式信息
     */
    printThead?: __SYMBOL_ARRAY__<[string, ...(unknown[])]>;
}
/**
 * 打印类
 */
export declare class Printer {
    /**
     * 打印配置
     */
    readonly printOptions: PrintOptions;
    /**
     * 打印颜色配置
     */
    readonly printColors: ColorInfo;
    /**
     * 打印类实例
     */
    private static printer;
    static init: (options: PrintOptions) => Printer;
    static print: (...message: unknown[]) => void;
    static printInfo: (...message: unknown[]) => void;
    static printWarn: (...message: unknown[]) => void;
    static printError: (...message: unknown[]) => void;
    static printSuccess: (...message: unknown[]) => void;
    constructor(
    /**
     * 打印配置
     */
    printOptions?: PrintOptions, 
    /**
     * 打印颜色配置
     */
    printColors?: ColorInfo);
    /**
     * 打印消息
     */
    private printMessage;
    /**
     * 打印消息
     */
    print(...message: unknown[]): void;
    /**
     * 打印信息
     */
    printInfo(...message: unknown[]): void;
    /**
     * 打印警告
     */
    printWarn(...message: unknown[]): void;
    /**
     * 打印错误
     */
    printError(...message: unknown[]): void;
    /**
     * 打印成功
     */
    printSuccess(...message: unknown[]): void;
}
