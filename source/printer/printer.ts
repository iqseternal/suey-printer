
import { print, toColor, printClear, type PrintTargetType, toPrintClear, type __SYMBLE_ARRAY__ } from '../core';

type PrintOptions = Partial<{
  autoPrintName: boolean;
  printName: string;

  autoPrintTime: boolean;
  printTime: () => string;

  autoPrintType: boolean;
  printType: string;

  autoPrintThead: boolean;
  printThead: string;
}>;

type ColorInfo = Partial<{
  printName: __SYMBLE_ARRAY__<[string, ...(unknown[])]>;
  printTIme: __SYMBLE_ARRAY__<[string, ...(unknown[])]>;
  printType: __SYMBLE_ARRAY__<[string, ...(unknown[])]>;
  printThead: __SYMBLE_ARRAY__<[string, ...(unknown[])]>;
}>;

export class Printer {
  private static printer: Printer = new Printer();

  public static init = (options: PrintOptions) => (Printer.printer = new Printer(options));
  public static print = (...message: unknown[]) => Printer.printer.print(...message);
  public static printInfo = (...message: unknown[]) => Printer.printer.printInfo(...message);
  public static printWarn = (...message: unknown[]) => Printer.printer.printWarn(...message);
  public static printError = (...message: unknown[]) => Printer.printer.printError(...message);

  constructor(
    public printOptions: PrintOptions = {
      autoPrintName: true,
      printName: 'PRINTER',
      autoPrintTime: true,
      printTime: () => new Date().getFullYear() + '',
      autoPrintThead: true,
      printThead: 'MAIN',
      autoPrintType: true,
      printType: 'NORMAL'
    },
    public printColors?: ColorInfo
  ) {}

  private printMessage(newOptions: PrintOptions, colors: ColorInfo, ...message: unknown[]) {
    const options = { ...this.printOptions, ...newOptions };
    const colorInfo = { ...this.printColors, ...colors };
    const messageArr: (unknown)[] = [];

    if (options.autoPrintName && typeof options.printName === 'string') {
      if (colorInfo.printName) messageArr.push(colorInfo.printName);
      messageArr.push(`[${options.printName}]`);
    }
    if (options.autoPrintTime && typeof options.printTime === 'function') {
      if (colorInfo.printTIme) messageArr.push(colorInfo.printTIme);
      messageArr.push(`[${options.printTime()}]`);
    }
    if (options.autoPrintType && typeof options.printType === 'string') {
      if (colorInfo.printType) messageArr.push(colorInfo.printType);
      messageArr.push(`[${options.printType}]`);
    }
    if (options.autoPrintThead && typeof options.printThead === 'string') {
      if (colorInfo.printThead) messageArr.push(colorInfo.printThead);
      messageArr.push(`[${options.printThead}]:`);
    }
    print(...messageArr, ...message);
  }

  print(...message: unknown[]) {
    this.printMessage({}, {}, ...message);
  }

  printInfo(...message: unknown[]) {
    this.printMessage({
      printType: 'INFO',
    }, {
      printName: toColor(['magenta', 'bright']),
      printTIme: toColor(['cyan', 'bright']),
      printType: toColor(['blue', 'underline']),
      printThead: toColor(['blue'])
    }, ...message);
  }

  printWarn(...message: unknown[]) {
    this.printMessage({
      printType: 'WARN',
    }, {
      printName: toColor(['magenta', 'bright']),
      printTIme: toColor(['cyan', 'bright']),
      printType: toColor(['yellow', 'underline']),
      printThead: toColor(['yellow'])
    }, ...message);
  }

  printError(...message: unknown[]) {
    this.printMessage({
      printType: 'ERROR',
    }, {
      printName: toColor(['magenta', 'bright']),
      printTIme: toColor(['cyan', 'bright']),
      printType: toColor(['red', 'underline']),
      printThead: toColor(['red'])
    }, ...message);
  }
}
