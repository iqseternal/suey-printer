
import { printInfo, printError, toColor, print, Printer } from '@suey/printer';

printInfo('hello');
printError('hello');

print(toColor(['magenta', 'magenta:bg']), 'Hello');

print(toColor({ color: 'olivedrab' }), '???');



print(toColor({
  fontSize: '16px',
  fontWeight: 'bold',
  color: 'red',
  backgroundColor: 'linen',
  fontStyle: 'italic',
  textDecorationLine: 'underline'
}), 'hello world!')


Printer.printInfo('info');
Printer.printWarn('warn');
Printer.printError('error');
Printer.printSuccess('success');

