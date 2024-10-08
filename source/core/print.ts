
import { STYLE, StyleKey, keyToAnsi, DEFINE_MESSAGE } from '../define';

import { StandardLonghandProperties } from 'csstype';

import { PrintTargetType, __SYMBLE_MESSAGE__, __SYMBLE_ARRAY__ } from './messageType';

/**
 * 清除 ANSI 带来的效果
 * @returns {string} 格式化清除字符串
 */
export const toPrintClear = (): string => keyToAnsi[STYLE.NORMAL];

/**
 * 识别目标的格式化信息，返回目标所对应的格式化字符串
 * @param {any} target 目标对象
 * @returns {PrintTargetType} 得到需要打印的格式化字符信息
 */
export function toPrintType(target: any): PrintTargetType {
  if (typeof target === 'number') return '%f';

  if (
    typeof target === 'undefined' || typeof target === 'symbol' ||
    typeof target === 'string' || typeof target === 'bigint' ||
    typeof target === 'boolean' || !target
  ) return '%s';

  return '%O';
}

/**
 * 通过获得打印的格式化 css / ANSI 创建格式化打印数组, 需要传递message参数, 以获得每一个对象的格式化类型
 * 该打印效果会影响之后的打印信息
 * @param {StyleKey | StyleKey[]} style 需要格式化打印的目标的格式化 ANSI
 * @param {...unknown[]} message 需要打印的信息
 * @returns {[string, ...unknown[]]} 返回格式化打印的数组，其中第一个参数是格式化打印信息, 紧缩其后的是需要打印的信息
 */
export function toPrintStyle(style: StyleKey | StyleKey[] | StandardLonghandProperties): __SYMBLE_MESSAGE__<string> {
  if (typeof style === 'string') return new __SYMBLE_MESSAGE__(keyToAnsi[style] ?? '', DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG);
  if (Array.isArray(style)) return new __SYMBLE_MESSAGE__(style.reduce((pre, cur) => pre + (keyToAnsi[cur] ?? ''), ''), DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG);

  if (typeof style === 'object') {
    let styleBuffer = '';

    for (const key in style) {
      if (key && (style as Record<string, string>)[key]) {

        styleBuffer += `${key.replace(/[A-Z]/g, (match) => {
          return '-' + match;
        })}:${(style as Record<string, string>)[key]};`;
      }
    }
    return new __SYMBLE_MESSAGE__(styleBuffer, DEFINE_MESSAGE.PRINTER_MESSAGE_CSS_STYLE_FLAG);
  }

  return new __SYMBLE_MESSAGE__('', DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG);
}

/**
 * 获得最终的格式化输出数组
 * @param {T[]} arr 需要格式化输出的信息
 * @returns {PrintMessageArray<T>} 返回格式化后的数组信息, 并给这个格式化数组加上唯一标识, 以供 print 函数的识别
 */
export const toPrintArr = <T>(arr: T[]): __SYMBLE_MESSAGE__<T[]> => new __SYMBLE_MESSAGE__(arr, DEFINE_MESSAGE.PRINTER_MESSAGE_ARR_FLAG);

/**
 * 创建一份格式化打印的样式信息, 通过建立这个样式信息, 可以让紧随其后的信息格式化打印.
 * 该函数需要你传递一个 CSS / ANSI 标识或者 CSS / ANSI 标识数组以标识格式化样式信息
 * @param {StyleKey | StyleKey[]} style ANSI 样式信息
 * @param {...T[]} message 需要格式化打印的信息
 * @returns {PrintMessageArray<string | T>} 返回格式化输出数组
 */
export function toColor<T>(style: StyleKey | StyleKey[] | StandardLonghandProperties, ...message: T[]): __SYMBLE_ARRAY__<[string, ...((string | T | __SYMBLE_MESSAGE__<string>)[])]> {
  const styleBufferArr = toPrintStyle(style);

  if (styleBufferArr.flag === DEFINE_MESSAGE.PRINTER_MESSAGE_CSS_STYLE_FLAG) {
    return new __SYMBLE_ARRAY__([toPrintClear(), styleBufferArr, ...message]);
  }
  if (styleBufferArr.flag === DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG) {
    return new __SYMBLE_ARRAY__([toPrintClear() + styleBufferArr.data, ...message]);
  }

  return new __SYMBLE_ARRAY__(['']);
}

/**
 * 转换打印 message, 可以直接 console.log(...toPrintMessage(xxxxxx)) 调用
 * @param message
 * @returns
 */
export function toPrintMessage(...message: unknown[]): unknown[] {
  message.unshift(toPrintClear());

  const typeArr: string[] = [];
  const msgArr: unknown[] = [];

  message.forEach(ms => {
    // 如果是格式化数组
    if (ms instanceof __SYMBLE_ARRAY__) {
      const data = ms.data;
      let type = data.shift();

      for (let i = 0;i < data.length;i ++) {
        if (data[i] instanceof __SYMBLE_MESSAGE__) {
          if (data[i].flag === DEFINE_MESSAGE.PRINTER_MESSAGE_CSS_STYLE_FLAG) {
            type += '%c';
            msgArr.push(data[i].data);
          }
          if (data[i].flag === DEFINE_MESSAGE.PRINTER_MESSAGE_ANSI_STYLE_FLAG) type += data[i].data;
          continue;
        }
        type += toPrintType(data[i]);
        type += '%s';
        msgArr.push(data[i]);
        msgArr.push(' ');
      }

      if (type) typeArr.push(type);
      return;
    }

    // 直接书写了 ANSI, 覆盖他的默认效果
    if (typeof ms === 'string' && (ms.startsWith('\x1B[') || ms.includes('%c') || ms.includes('%s'))) {
      // ms = ms.replaceAll('\x1B', '\\x1B').replaceAll('%', '\%');
      typeArr.push(ms);
      return;
    }

    typeArr.push(toPrintType(ms));
    msgArr.push(ms);

    if (msgArr.length !== 0) {
      typeArr.push(`%s`);
      msgArr.push(' ');
    }
  });

  typeArr.push(toPrintClear());

  msgArr.pop();
  msgArr.push('');

  return [typeArr.reduce((pre, cur) => pre + cur, ''), ...msgArr];
}

/**
 * 调用这个函数你可以格式化打印你想要的信息, 相比于 console.log, 此函数的调用更加符合函数化, 人性化
 * 请注意, 由于控制台所处于的平台不同, 可能出现打印失效的情况
 * 例如：CSS 样式, 可能在 Windows 控制台中可能就会出现不支持的情况
 * 目前 ANSI 模式表现良好
 *
 * @example print('HelloWorld'); // 无格式化信息
 * @example print(toColor('red', 'HelloWorld'), '你的打印信息的位置可以自己选择'); // 使用toColor配合,红色字体信息
 * @example print(toColor('red'), 'HelloWrold'); // 使用toColor配合,红色字体信息
 * @example print(toColor(['white', 'red:bg']), 'HelloWorld'); // 使用toColor创建多ANSI格式的样式
 * @example print(toColor({ color: 'red' }), 'HelloWrold'); // 使用toColor创建css格式的样式, 用这个方式相较于直接书写css更加友好,具有ts类型提示
 *
 * @param {...unknown[]} message 需要打印的信息
 * @returns {void}
 */
export function print(...message: unknown[]): void {
  console.log(...toPrintMessage(...message));
}


export const isPrintStyleMessage = <T>(target: T | __SYMBLE_ARRAY__<[string, ...((string | __SYMBLE_MESSAGE__<string>)[])]>): target is __SYMBLE_ARRAY__<[string, ...((string | __SYMBLE_MESSAGE__<string>)[])]> => {
  return target instanceof __SYMBLE_ARRAY__;
}

export const isPrintStyleMessageArr = <T>(target: T | __SYMBLE_MESSAGE__<string>): target is __SYMBLE_MESSAGE__<string> => {
  return target instanceof __SYMBLE_MESSAGE__;
}
