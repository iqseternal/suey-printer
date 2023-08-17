"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFINE_MESSAGE = exports.keyToAnsi = exports.STYLE = void 0;
/** 定义的 ANSI 枚举 */
class STYLE {
    /** 正常 */
    static NORMAL = 'normal';
    /** 粗体或增加强度 */
    static BRIGHT = 'bright';
    /** 灰色 */
    static GREY = 'grey';
    /** 斜体 */
    static ITALIC = 'italic';
    /** 下划线 */
    static UNDERLINE = 'underline';
    /** 缓慢闪烁 */
    static FLICKER_FAST = 'flicker:fast';
    /** 快速闪烁 */
    static FLICKER_SLOW = 'flicker:slow';
    /** 隐藏 */
    static HIDDEN = 'hidden';
    /** 黑色字体 */
    static BLACK = 'black';
    /** 红色字体 */
    static RED = 'red';
    /** 绿色字体 */
    static GREEN = 'green';
    /** 黄色字体 */
    static YELLOW = 'yellow';
    /** 蓝色字体 */
    static BLUE = 'blue';
    /** 品红字体 */
    static MAGENTA = 'magenta';
    /** 青色字体 */
    static CYAN = 'cyan';
    /** 白色字体 */
    static WHITE = 'white';
    /** 黑色背景 */
    static BLACK_BG = 'black:bg';
    /** 红色背景 */
    static RED_BG = 'red:bg';
    /** 绿色背景 */
    static GREEN_BG = 'green:bg';
    /** 黄色背景 */
    static YELLOW_BG = 'yellow:bg';
    /** 蓝色背景 */
    static BLUE_BG = 'blue:bg';
    /** 品红背景 */
    static MAGENTA_BG = 'magenta:bg';
    /** 青色背景 */
    static CYAN_BG = 'cyan:bg';
    /** 白色背景 */
    static WHITE_BG = 'white:bg';
    NORMAL = STYLE.NORMAL;
    BRIGHT = STYLE.BRIGHT;
    GREY = STYLE.GREY;
    ITALIC = STYLE.ITALIC;
    UNDERLINE = STYLE.UNDERLINE;
    FLICKER_FAST = STYLE.FLICKER_FAST;
    FLICKER_SLOW = STYLE.FLICKER_SLOW;
    HIDDEN = STYLE.HIDDEN;
    BLACK = STYLE.BLACK;
    RED = STYLE.RED;
    GREEN = STYLE.GREEN;
    YELLOW = STYLE.YELLOW;
    BLUE = STYLE.BLUE;
    MAGENTA = STYLE.MAGENTA;
    CYAN = STYLE.CYAN;
    WHITE = STYLE.WHITE;
    BLACK_BG = STYLE.BLACK_BG;
    RED_BG = STYLE.RED_BG;
    GREEN_BG = STYLE.GREEN_BG;
    YELLOW_BG = STYLE.YELLOW_BG;
    BLUE_BG = STYLE.BLUE_BG;
    MAGENTA_BG = STYLE.MAGENTA_BG;
    CYAN_BG = STYLE.CYAN_BG;
    WHITE_BG = STYLE.WHITE_BG;
}
exports.STYLE = STYLE;
/** ANSI 自定义 Key 转换对象 */
exports.keyToAnsi = {
    [STYLE.NORMAL]: '\x1B[0m',
    [STYLE.BRIGHT]: '\x1B[1m',
    [STYLE.GREY]: '\x1B[2m',
    [STYLE.ITALIC]: '\x1B[3m',
    [STYLE.UNDERLINE]: '\x1B[4m',
    [STYLE.FLICKER_SLOW]: '\x1B[5m',
    [STYLE.FLICKER_FAST]: '\x1B[6m',
    [STYLE.HIDDEN]: '\x1B[8m',
    [STYLE.BLACK]: '\x1B[30m',
    [STYLE.RED]: '\x1B[31m',
    [STYLE.GREEN]: '\x1B[32m',
    [STYLE.YELLOW]: '\x1B[33m',
    [STYLE.BLUE]: '\x1B[34m',
    [STYLE.MAGENTA]: '\x1B[35m',
    [STYLE.CYAN]: '\x1B[36m',
    [STYLE.WHITE]: '\x1B[37m',
    [STYLE.BLACK_BG]: '\x1B[40m',
    [STYLE.RED_BG]: '\x1B[41m',
    [STYLE.GREEN_BG]: '\x1B[42m',
    [STYLE.YELLOW_BG]: '\x1B[43m',
    [STYLE.BLUE_BG]: '\x1B[44m',
    [STYLE.MAGENTA_BG]: '\x1B[45m',
    [STYLE.CYAN_BG]: '\x1B[46m',
    [STYLE.WHITE_BG]: '\x1B[47m'
};
/** 自定义初始化信息 */
exports.DEFINE_MESSAGE = {
    /** 定义的是打印格式化输出数组的唯一标识id, 用于区分正常打印和自定义打印 */
    PRINTER_MESSAGE_ARR_FALG: '__suey_printer_process_id__'
};
//# sourceMappingURL=define.js.map