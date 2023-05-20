/**
 *
 * 创建一个副作用函数的装饰器.
 * 目前是仅用于和 printer 类合作, 所以书写的一个属性装饰器
 *
 * @param {(target?: object, key?: string | symbol) => void} fn 副作用函数
 * @returns {PropertyDecorator} 返回一个属性装饰器
 */
export function Effect(fn) {
    return (target, key) => {
        const f = target[key];
        if (typeof f !== 'function')
            return;
        target[key] = (...args) => {
            fn(target, key);
            f.apply(target, ...args);
        };
    };
}
//# sourceMappingURL=decorator.js.map