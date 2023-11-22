"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Printer = void 0;
const core_1 = require("../core");
class Printer {
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
            if (colorInfo.printType)
                messageArr.push(colorInfo.printType);
            messageArr.push(`[${options.printType}]`);
        }
        if (options.autoPrintThead && typeof options.printThead === 'string') {
            if (colorInfo.printThead)
                messageArr.push(colorInfo.printThead);
            messageArr.push(`[${options.printThead}]:`);
        }
        (0, core_1.print)(...messageArr, ...message);
    }
    print(...message) {
        this.printMessage({}, {}, ...message);
    }
    printInfo(...message) {
        this.printMessage({
            printType: 'INFO',
        }, {
            printName: (0, core_1.toColor)(['magenta', 'bright']),
            printTIme: (0, core_1.toColor)(['cyan', 'bright']),
            printType: (0, core_1.toColor)(['blue', 'underline']),
            printThead: (0, core_1.toColor)(['blue'])
        }, ...message);
    }
    printWarn(...message) {
        this.printMessage({
            printType: 'WARN',
        }, {
            printName: (0, core_1.toColor)(['magenta', 'bright']),
            printTIme: (0, core_1.toColor)(['cyan', 'bright']),
            printType: (0, core_1.toColor)(['yellow', 'underline']),
            printThead: (0, core_1.toColor)(['yellow'])
        }, ...message);
    }
    printError(...message) {
        this.printMessage({
            printType: 'ERROR',
        }, {
            printName: (0, core_1.toColor)(['magenta', 'bright']),
            printTIme: (0, core_1.toColor)(['cyan', 'bright']),
            printType: (0, core_1.toColor)(['red', 'underline']),
            printThead: (0, core_1.toColor)(['red'])
        }, ...message);
    }
}
exports.Printer = Printer;
//# sourceMappingURL=printer.js.map