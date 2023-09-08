import { DEFINE_MESSAGE } from '../define';
/** 格式化打印字符 */
export type PrintTargetType = '%s' | '%d' | '%i' | '%f' | '%o' | '%O';
export declare class __SYMBLE_MESSAGE__<T> {
    readonly data: T;
    readonly flag: typeof DEFINE_MESSAGE[keyof typeof DEFINE_MESSAGE];
    constructor(data: T, flag: typeof DEFINE_MESSAGE[keyof typeof DEFINE_MESSAGE]);
}
export declare class __SYMBLE_ARRAY__<T> {
    readonly data: T;
    constructor(data: T);
}
