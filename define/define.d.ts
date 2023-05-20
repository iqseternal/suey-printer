/** 定义的 ANSI 枚举 */
export declare class STYLE {
    /** 正常 */
    static readonly NORMAL = "normal";
    /** 粗体或增加强度 */
    static readonly BRIGHT = "bright";
    /** 灰色 */
    static readonly GREY = "grey";
    /** 斜体 */
    static readonly ITALIC = "italic";
    /** 下划线 */
    static readonly UNDERLINE = "underline";
    /** 缓慢闪烁 */
    static readonly FLICKER_FAST = "flicker:fast";
    /** 快速闪烁 */
    static readonly FLICKER_SLOW = "flicker:slow";
    /** 隐藏 */
    static readonly HIDDEN = "hidden";
    /** 黑色字体 */
    static readonly BLACK = "black";
    /** 红色字体 */
    static readonly RED = "red";
    /** 绿色字体 */
    static readonly GREEN = "green";
    /** 黄色字体 */
    static readonly YELLOW = "yellow";
    /** 蓝色字体 */
    static readonly BLUE = "blue";
    /** 品红字体 */
    static readonly MAGENTA = "magenta";
    /** 青色字体 */
    static readonly CYAN = "cyan";
    /** 白色字体 */
    static readonly WHITE = "white";
    /** 黑色背景 */
    static readonly BLACK_BG = "black:bg";
    /** 红色背景 */
    static readonly RED_BG = "red:bg";
    /** 绿色背景 */
    static readonly GREEN_BG = "green:bg";
    /** 黄色背景 */
    static readonly YELLOW_BG = "yellow:bg";
    /** 蓝色背景 */
    static readonly BLUE_BG = "blue:bg";
    /** 品红背景 */
    static readonly MAGENTA_BG = "magenta:bg";
    /** 青色背景 */
    static readonly CYAN_BG = "cyan:bg";
    /** 白色背景 */
    static readonly WHITE_BG = "white:bg";
    readonly NORMAL = "normal";
    readonly BRIGHT = "bright";
    readonly GREY = "grey";
    readonly ITALIC = "italic";
    readonly UNDERLINE = "underline";
    readonly FLICKER_FAST = "flicker:fast";
    readonly FLICKER_SLOW = "flicker:slow";
    readonly HIDDEN = "hidden";
    readonly BLACK = "black";
    readonly RED = "red";
    readonly GREEN = "green";
    readonly YELLOW = "yellow";
    readonly BLUE = "blue";
    readonly MAGENTA = "magenta";
    readonly CYAN = "cyan";
    readonly WHITE = "white";
    readonly BLACK_BG = "black:bg";
    readonly RED_BG = "red:bg";
    readonly GREEN_BG = "green:bg";
    readonly YELLOW_BG = "yellow:bg";
    readonly BLUE_BG = "blue:bg";
    readonly MAGENTA_BG = "magenta:bg";
    readonly CYAN_BG = "cyan:bg";
    readonly WHITE_BG = "white:bg";
}
/** 得到类型的所有键 */
export type Key<T> = keyof T;
/** 得到类型的键值对应的值 */
export type KeyVal<T> = T[Key<T>];
/** 创建 ANSI 的自定义 Key */
export type StyleKey = KeyVal<STYLE>;
/** ANSI 自定义 Key 转换 */
export type KeyToAnsi = {
    [key in StyleKey]: string;
};
/** ANSI 自定义 Key 转换对象 */
export declare const keyToAnsi: KeyToAnsi;
/** 自定义初始化信息 */
export declare const DEFINE_MESSAGE: {
    /** 定义的是打印格式化输出数组的唯一标识id, 用于区分正常打印和自定义打印 */
    PRINTER_MESSAGE_ARR_FALG: string;
};
