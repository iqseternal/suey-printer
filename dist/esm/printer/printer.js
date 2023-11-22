import { print, toColor, toPrintClear } from '../core';
export class Printer {
    printOptions;
    printColors;
    static printer = new Printer();
    static init = (options) => (Printer.printer = new Printer(options));
    static print = (...message) => Printer.printer.print(...message);
    static printInfo = (...message) => Printer.printer.printInfo(...message);
    static printWarn = (...message) => Printer.printer.printWarn(...message);
    static printError = (...message) => Printer.printer.printError(...message);
    constructor(printOptions = {
        autoPrintName: true,
        printName: 'PRINTER',
        autoPrintTime: true,
        printTime: () => new Date().getFullYear() + '',
        autoPrintThead: true,
        printThead: 'MAIN',
        autoPrintType: true,
        printType: 'NORMAL'
    }, printColors) {
        this.printOptions = printOptions;
        this.printColors = printColors;
    }
    printMessage(newOptions, colors, ...message) {
        const options = { ...this.printOptions, ...newOptions };
        const colorInfo = { ...this.printColors, ...colors };
        const messageArr = [];
        if (options.autoPrintName && typeof options.printName === 'string') {
            if (colorInfo.printName)
                messageArr.push(colorInfo.printName);
            messageArr.push(`[${options.printName}]`);
        }
        if (options.autoPrintTime && typeof options.printTime === 'function') {
            if (colorInfo.printTIme)
                messageArr.push(colorInfo.printTIme);
            messageArr.push(`[${options.printTime()}]`);
        }
        if (options.autoPrintType && typeof options.printType === 'string') {
            messageArr.push(toPrintClear());
            if (colorInfo.printType)
                messageArr.push(colorInfo.printType);
            messageArr.push(`[${options.printType}]${toPrintClear()}`);
        }
        if (options.autoPrintThead && typeof options.printThead === 'string') {
            if (colorInfo.printThead)
                messageArr.push(colorInfo.printThead);
            messageArr.push(`[${options.printThead}]:`);
        }
        print(...messageArr, ...message);
    }
    print(...message) {
        this.printMessage({}, {}, ...message);
    }
    printInfo(...message) {
        this.printMessage({
            printType: 'INFO',
        }, {
            printName: toColor(['magenta', 'bright']),
            printTIme: toColor(['cyan', 'bright']),
            printType: toColor(['blue', 'underline']),
            printThead: toColor(['blue'])
        }, ...message);
    }
    printWarn(...message) {
        this.printMessage({
            printType: 'WARN',
        }, {
            printName: toColor(['magenta', 'bright']),
            printTIme: toColor(['cyan', 'bright']),
            printType: toColor(['yellow', 'underline']),
            printThead: toColor(['yellow'])
        }, ...message);
    }
    printError(...message) {
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
//# sourceMappingURL=printer.js.map