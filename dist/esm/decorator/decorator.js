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