"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Effect = void 0;
function Effect(fn) {
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
exports.Effect = Effect;
//# sourceMappingURL=decorator.js.map