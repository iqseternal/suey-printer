
export namespace Ansi {
  /**
   * 定义的 ANSI 枚举
   */
  export const AnsiEnum = {
    /** 正常 */
    NORMAL: 'normal',
    /** 粗体或增加强度 */
    BRIGHT: 'bright',
    /** 灰色 */
    GREY: 'grey',
    /** 斜体 */
    ITALIC: 'italic',
    /** 下划线 */
    UNDERLINE: 'underline',
    /** 缓慢闪烁 */
    FLICKER_FAST: 'flicker:fast',
    /** 快速闪烁 */
    FLICKER_SLOW: 'flicker:slow',
    /** 隐藏 */
    HIDDEN: 'hidden',
    /** 黑色字体 */
    BLACK: 'black',
    /** 红色字体 */
    RED: 'red',
    /** 绿色字体 */
    GREEN: 'green',
    /** 黄色字体 */
    YELLOW: 'yellow',
    /** 蓝色字体 */
    BLUE: 'blue',
    /** 品红字体 */
    MAGENTA: 'magenta',
    /** 青色字体 */
    CYAN: 'cyan',
    /** 白色字体 */
    WHITE: 'white',
    /** 黑色背景 */
    BLACK_BG: 'black:bg',
    /** 红色背景 */
    RED_BG: 'red:bg',
    /** 绿色背景 */
    GREEN_BG: 'green:bg',
    /** 黄色背景 */
    YELLOW_BG: 'yellow:bg',
    /** 蓝色背景 */
    BLUE_BG: 'blue:bg',
    /** 品红背景 */
    MAGENTA_BG: 'magenta:bg',
    /** 青色背景 */
    CYAN_BG: 'cyan:bg',
    /** 白色背景 */
    WHITE_BG: 'white:bg'
  } as const;

  /**
   * ANSI 枚举值
   */
  export type AnsiValue = typeof AnsiEnum[keyof typeof AnsiEnum];

  /** ANSI 自定义 Key 转换 */
  export type AnsiTransformerType = {
    [Key in AnsiValue]: string;
  }

  /**
   * ANSI 自定义 Key 转换对象
   */
  export const AnsiTransformer: AnsiTransformerType = {
    [AnsiEnum.NORMAL]: '\x1B[0m',
    [AnsiEnum.BRIGHT]: '\x1B[1m',
    [AnsiEnum.GREY]: '\x1B[2m',
    [AnsiEnum.ITALIC]: '\x1B[3m',
    [AnsiEnum.UNDERLINE]: '\x1B[4m',

    [AnsiEnum.FLICKER_SLOW]: '\x1B[5m',
    [AnsiEnum.FLICKER_FAST]: '\x1B[6m',
    [AnsiEnum.HIDDEN]: '\x1B[8m',

    [AnsiEnum.BLACK]: '\x1B[30m',
    [AnsiEnum.RED]: '\x1B[31m',
    [AnsiEnum.GREEN]: '\x1B[32m',
    [AnsiEnum.YELLOW]: '\x1B[33m',
    [AnsiEnum.BLUE]: '\x1B[34m',
    [AnsiEnum.MAGENTA]: '\x1B[35m',
    [AnsiEnum.CYAN]: '\x1B[36m',
    [AnsiEnum.WHITE]: '\x1B[37m',

    [AnsiEnum.BLACK_BG]: '\x1B[40m',
    [AnsiEnum.RED_BG]: '\x1B[41m',
    [AnsiEnum.GREEN_BG]: '\x1B[42m',
    [AnsiEnum.YELLOW_BG]: '\x1B[43m',
    [AnsiEnum.BLUE_BG]: '\x1B[44m',
    [AnsiEnum.MAGENTA_BG]: '\x1B[45m',
    [AnsiEnum.CYAN_BG]: '\x1B[46m',
    [AnsiEnum.WHITE_BG]: '\x1B[47m'
  } as const;
}
