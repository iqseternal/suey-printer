
import { toColor, toPrintClear, print } from './print';

/**
 * 清除之前的打印带来的副作用
 */
export function printClear(): void {
  console.log(toPrintClear());
}

/**
 * 打印一条日志
 * @param message
 */
export function printInfo(...message: unknown[]): void {
  print(toColor('blue'), ...message);
}

/**
 * 打印一条警告信息
 * @param message
 */
export function printWarn(...message: unknown[]): void {
  print(toColor('yellow'), ...message);
}

/**
 * 打印一条错误信息
 * @param message
 */
export function printError(...message: unknown[]): void {
  print(toColor('red'), ...message);
}

/**
 * 打印调用栈信息
 * @param message
 */
export function printTrace(...message: unknown[]): void {
  print('还没写怎么打印调用栈');
}
