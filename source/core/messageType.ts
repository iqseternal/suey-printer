
import { STYLE, StyleKey, keyToAnsi, DEFINE_MESSAGE } from '../define';

import { StandardLonghandProperties } from 'csstype';

/** 格式化打印字符 */
export type PrintTargetType = '%s' | '%d' | '%i' | '%f' | '%o' | '%O';



export class __SYMBLE_MESSAGE__<T> {
  constructor(public readonly data: T, public readonly flag: typeof DEFINE_MESSAGE[keyof typeof DEFINE_MESSAGE]) {}
}

export class __SYMBLE_ARRAY__<T> {
  constructor(public readonly data: T) {}
}
