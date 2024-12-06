export declare namespace Ansi {
    /**
     * 定义的 ANSI 枚举
     */
    const AnsiEnum: {
        /** 正常 */
        readonly NORMAL: "normal";
        /** 粗体或增加强度 */
        readonly BRIGHT: "bright";
        /** 灰色 */
        readonly GREY: "grey";
        /** 斜体 */
        readonly ITALIC: "italic";
        /** 下划线 */
        readonly UNDERLINE: "underline";
        /** 缓慢闪烁 */
        readonly FLICKER_FAST: "flicker:fast";
        /** 快速闪烁 */
        readonly FLICKER_SLOW: "flicker:slow";
        /** 隐藏 */
        readonly HIDDEN: "hidden";
        /** 黑色字体 */
        readonly BLACK: "black";
        /** 红色字体 */
        readonly RED: "red";
        /** 绿色字体 */
        readonly GREEN: "green";
        /** 黄色字体 */
        readonly YELLOW: "yellow";
        /** 蓝色字体 */
        readonly BLUE: "blue";
        /** 品红字体 */
        readonly MAGENTA: "magenta";
        /** 青色字体 */
        readonly CYAN: "cyan";
        /** 白色字体 */
        readonly WHITE: "white";
        /** 黑色背景 */
        readonly BLACK_BG: "black:bg";
        /** 红色背景 */
        readonly RED_BG: "red:bg";
        /** 绿色背景 */
        readonly GREEN_BG: "green:bg";
        /** 黄色背景 */
        readonly YELLOW_BG: "yellow:bg";
        /** 蓝色背景 */
        readonly BLUE_BG: "blue:bg";
        /** 品红背景 */
        readonly MAGENTA_BG: "magenta:bg";
        /** 青色背景 */
        readonly CYAN_BG: "cyan:bg";
        /** 白色背景 */
        readonly WHITE_BG: "white:bg";
    };
    /**
     * ANSI 枚举值
     */
    type AnsiValue = typeof AnsiEnum[keyof typeof AnsiEnum];
    /** ANSI 自定义 Key 转换 */
    type AnsiTransformerType = {
        [Key in AnsiValue]: string;
    };
    /**
     * ANSI 自定义 Key 转换对象
     */
    const AnsiTransformer: AnsiTransformerType;
}
