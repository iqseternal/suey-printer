
/** 定义的 ANSI 枚举 */
export class STYLE {
  /** 正常 */
  public static readonly NORMAL = 'normal';
  /** 粗体或增加强度 */
  public static readonly BRIGHT = 'bright';
  /** 灰色 */
  public static readonly GREY = 'grey';
  /** 斜体 */
  public static readonly ITALIC = 'italic';
  /** 下划线 */
  public static readonly UNDERLINE = 'underline';
  /** 缓慢闪烁 */
  public static readonly FLICKER_FAST = 'flicker:fast';
  /** 快速闪烁 */
  public static readonly FLICKER_SLOW = 'flicker:slow';
  /** 隐藏 */
  public static readonly HIDDEN = 'hidden';
  /** 黑色字体 */
  public static readonly BLACK = 'black';
  /** 红色字体 */
  public static readonly RED = 'red';
  /** 绿色字体 */
  public static readonly GREEN = 'green';
  /** 黄色字体 */
  public static readonly YELLOW = 'yellow';
  /** 蓝色字体 */
  public static readonly BLUE = 'blue';
  /** 品红字体 */
  public static readonly MAGENTA = 'magenta';
  /** 青色字体 */
  public static readonly CYAN = 'cyan';
  /** 白色字体 */
  public static readonly WHITE = 'white';
  /** 黑色背景 */
  public static readonly BLACK_BG = 'black:bg';
  /** 红色背景 */
  public static readonly RED_BG = 'red:bg';
  /** 绿色背景 */
  public static readonly GREEN_BG = 'green:bg';
  /** 黄色背景 */
  public static readonly YELLOW_BG = 'yellow:bg';
  /** 蓝色背景 */
  public static readonly BLUE_BG = 'blue:bg';
  /** 品红背景 */
  public static readonly MAGENTA_BG = 'magenta:bg';
  /** 青色背景 */
  public static readonly CYAN_BG = 'cyan:bg';
  /** 白色背景 */
  public static readonly WHITE_BG = 'white:bg';

  public readonly NORMAL = STYLE.NORMAL;
  public readonly BRIGHT = STYLE.BRIGHT;
  public readonly GREY = STYLE.GREY;
  public readonly ITALIC = STYLE.ITALIC;
  public readonly UNDERLINE = STYLE.UNDERLINE;
  public readonly FLICKER_FAST = STYLE.FLICKER_FAST;
  public readonly FLICKER_SLOW = STYLE.FLICKER_SLOW;
  public readonly HIDDEN = STYLE.HIDDEN;
  public readonly BLACK = STYLE.BLACK;
  public readonly RED = STYLE.RED;
  public readonly GREEN = STYLE.GREEN;
  public readonly YELLOW = STYLE.YELLOW;
  public readonly BLUE = STYLE.BLUE;
  public readonly MAGENTA = STYLE.MAGENTA;
  public readonly CYAN = STYLE.CYAN;
  public readonly WHITE = STYLE.WHITE;
  public readonly BLACK_BG = STYLE.BLACK_BG;
  public readonly RED_BG = STYLE.RED_BG;
  public readonly GREEN_BG = STYLE.GREEN_BG;
  public readonly YELLOW_BG = STYLE.YELLOW_BG;
  public readonly BLUE_BG = STYLE.BLUE_BG;
  public readonly MAGENTA_BG = STYLE.MAGENTA_BG;
  public readonly CYAN_BG = STYLE.CYAN_BG;
  public readonly WHITE_BG = STYLE.WHITE_BG;
}

/** 得到类型的所有键 */
export type Key<T> = keyof T;

/** 得到类型的键值对应的值 */
export type KeyVal<T> = T[Key<T>];

/** 创建 ANSI 的自定义 Key */
export type StyleKey = KeyVal<STYLE>;

/** ANSI 自定义 Key 转换 */
export type KeyToAnsi = { [key in StyleKey]: string; }

/** ANSI 自定义 Key 转换对象 */
export const keyToAnsi: KeyToAnsi = {
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
}
