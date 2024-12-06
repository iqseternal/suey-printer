

import { printInfo, printError, toColor, print } from '@suey/printer';

printInfo('hello');
printError('hello');

print(toColor(['magenta', 'magenta:bg']), 'Hello');

print(toColor({ color: 'olivedrab' }), '???');

