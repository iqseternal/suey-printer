
import { print, toColor, printClear, toPrintClear, __SYMBOL_MESSAGE__, __SYMBOL_ARRAY__ } from '../core';

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
export class Printer {
  /**
   * 打印类实例
   */
  private static printer: Printer = new Printer();

  public static init = (options: PrintOptions) => (Printer.printer = new Printer(options));
  public static print = (...message: unknown[]) => Printer.printer.print(...message);
  public static printInfo = (...message: unknown[]) => Printer.printer.printInfo(...message);
  public static printWarn = (...message: unknown[]) => Printer.printer.printWarn(...message);
  public static printError = (...message: unknown[]) => Printer.printer.printError(...message);
  public static printSuccess = (...message: unknown[]) => Printer.printer.printSuccess(...message);

  public constructor(
    /**
     * 打印配置
     */
    public readonly printOptions: PrintOptions = {
      autoPrintName: true,
      printName: 'PRINTER',
      autoPrintTime: true,
      printTime: () => new Date().getFullYear() + '',
      autoPrintThead: true,
      printThead: 'MAIN',
      autoPrintType: true,
      printType: 'NORMAL'
    },
    /**
     * 打印颜色配置
     */
    public readonly printColors: ColorInfo = {}
  ) {}

  /**
   * 打印消息
   */
  private printMessage(newOptions: PrintOptions, colors: ColorInfo, ...message: unknown[]) {
    const options = { ...this.printOptions, ...newOptions };
    const colorInfo = { ...this.printColors, ...colors };
    const messageArr: (unknown)[] = [];

    if (options.autoPrintName && typeof options.printName === 'string') {
      if (colorInfo.printName) messageArr.push(colorInfo.printName);
      messageArr.push(`[${options.printName}]`);
    }
    if (options.autoPrintTime && typeof options.printTime === 'function') {
      if (colorInfo.printTime) messageArr.push(colorInfo.printTime);
      messageArr.push(`[${options.printTime()}]`);
    }
    if (options.autoPrintType && typeof options.printType === 'string') {
      messageArr.push(toPrintClear());
      if (colorInfo.printType) messageArr.push(colorInfo.printType);
      messageArr.push(`[${options.printType}]${toPrintClear()}`);
    }
    if (options.autoPrintThead && typeof options.printThead === 'string') {
      if (colorInfo.printThead) messageArr.push(colorInfo.printThead);
      messageArr.push(`[${options.printThead}]:`);
    }
    print(...messageArr, ...message);
  }

  /**
   * 打印消息
   */
  public print(...message: unknown[]) {
    this.printMessage({}, {}, ...message);
  }

  /**
   * 打印信息
   */
  public printInfo(...message: unknown[]) {
    this.printMessage({
      printType: 'INFO',
    }, {
      printName: toColor(['magenta', 'bright']),
      printTime: toColor(['cyan', 'bright']),
      printType: toColor(['blue', 'underline']),
      printThead: toColor(['blue'])
    }, ...message);
  }

  /**
   * 打印警告
   */
  public printWarn(...message: unknown[]) {
    this.printMessage({
      printType: 'WARN',
    }, {
      printName: toColor(['magenta', 'bright']),
      printTime: toColor(['cyan', 'bright']),
      printType: toColor(['yellow', 'underline']),
      printThead: toColor(['yellow'])
    }, ...message);
  }

  /**
   * 打印错误
   */
  public printError(...message: unknown[]) {
    this.printMessage({
      printType: 'ERROR',
    }, {
      printName: toColor(['magenta', 'bright']),
      printTime: toColor(['cyan', 'bright']),
      printType: toColor(['red', 'underline']),
      printThead: toColor(['red'])
    }, ...message);
  }

  /**
   * 打印成功
   */
  public printSuccess(...message: unknown[]) {
    this.printMessage({
      printType: 'SUCCESS',
    }, {
      printName: toColor(['magenta', 'bright']),
      printTime: toColor(['cyan', 'bright']),
      printType: toColor(['green', 'underline']),
      printThead: toColor(['green'])
    }, ...message);
  }
}
