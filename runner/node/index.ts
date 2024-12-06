

import { printInfo, printError, toColor, print, Printer } from '@suey/printer';

printInfo('hello');
printError('hello');

print(toColor(['magenta', 'magenta:bg']), 'Hello');

print(toColor({ color: 'olivedrab' }), '???');

Printer.printInfo('info');
Printer.printWarn('warn');
Printer.printError('error');
Printer.printSuccess('success');
