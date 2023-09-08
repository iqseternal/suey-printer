import { type __SYMBLE_ARRAY__ } from '../core';
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
export declare class Printer {
    printOptions: PrintOptions;
    printColors?: ColorInfo;
    private static printer;
    static init: (options: PrintOptions) => Printer;
    static print: (...message: unknown[]) => void;
    static printInfo: (...message: unknown[]) => void;
    static printWarn: (...message: unknown[]) => void;
    static printError: (...message: unknown[]) => void;
    constructor(printOptions?: PrintOptions, printColors?: ColorInfo);
    private printMessage;
    print(...message: unknown[]): void;
    printInfo(...message: unknown[]): void;
    printWarn(...message: unknown[]): void;
    printError(...message: unknown[]): void;
}
export {};
