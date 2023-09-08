"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyToAnsi = exports.STYLE = void 0;
class STYLE {
    static NORMAL = 'normal';
    static BRIGHT = 'bright';
    static GREY = 'grey';
    static ITALIC = 'italic';
    static UNDERLINE = 'underline';
    static FLICKER_FAST = 'flicker:fast';
    static FLICKER_SLOW = 'flicker:slow';
    static HIDDEN = 'hidden';
    static BLACK = 'black';
    static RED = 'red';
    static GREEN = 'green';
    static YELLOW = 'yellow';
    static BLUE = 'blue';
    static MAGENTA = 'magenta';
    static CYAN = 'cyan';
    static WHITE = 'white';
    static BLACK_BG = 'black:bg';
    static RED_BG = 'red:bg';
    static GREEN_BG = 'green:bg';
    static YELLOW_BG = 'yellow:bg';
    static BLUE_BG = 'blue:bg';
    static MAGENTA_BG = 'magenta:bg';
    static CYAN_BG = 'cyan:bg';
    static WHITE_BG = 'white:bg';
    NORMAL = STYLE.NORMAL;
    BRIGHT = STYLE.BRIGHT;
    GREY = STYLE.GREY;
    ITALIC = STYLE.ITALIC;
    UNDERLINE = STYLE.UNDERLINE;
    FLICKER_FAST = STYLE.FLICKER_FAST;
    FLICKER_SLOW = STYLE.FLICKER_SLOW;
    HIDDEN = STYLE.HIDDEN;
    BLACK = STYLE.BLACK;
    RED = STYLE.RED;
    GREEN = STYLE.GREEN;
    YELLOW = STYLE.YELLOW;
    BLUE = STYLE.BLUE;
    MAGENTA = STYLE.MAGENTA;
    CYAN = STYLE.CYAN;
    WHITE = STYLE.WHITE;
    BLACK_BG = STYLE.BLACK_BG;
    RED_BG = STYLE.RED_BG;
    GREEN_BG = STYLE.GREEN_BG;
    YELLOW_BG = STYLE.YELLOW_BG;
    BLUE_BG = STYLE.BLUE_BG;
    MAGENTA_BG = STYLE.MAGENTA_BG;
    CYAN_BG = STYLE.CYAN_BG;
    WHITE_BG = STYLE.WHITE_BG;
}
exports.STYLE = STYLE;
exports.keyToAnsi = {
    [STYLE.NORMAL]: '\x1B[0m',
    [STYLE.BRIGHT]: '\x1B[1m',
    [STYLE.GREY]: '\x1B[2m',
    [STYLE.ITALIC]: '\x1B[3m',
    [STYLE.UNDERLINE]: '\x1B[4m',
    [STYLE.FLICKER_SLOW]: '\x1B[5m',
    [STYLE.FLICKER_FAST]: '\x1B[6m',
    [STYLE.HIDDEN]: '\x1B[8m',
    [STYLE.BLACK]: '\x1B[30m',
    [STYLE.RED]: '\x1B[31m',
    [STYLE.GREEN]: '\x1B[32m',
    [STYLE.YELLOW]: '\x1B[33m',
    [STYLE.BLUE]: '\x1B[34m',
    [STYLE.MAGENTA]: '\x1B[35m',
    [STYLE.CYAN]: '\x1B[36m',
    [STYLE.WHITE]: '\x1B[37m',
    [STYLE.BLACK_BG]: '\x1B[40m',
    [STYLE.RED_BG]: '\x1B[41m',
    [STYLE.GREEN_BG]: '\x1B[42m',
    [STYLE.YELLOW_BG]: '\x1B[43m',
    [STYLE.BLUE_BG]: '\x1B[44m',
    [STYLE.MAGENTA_BG]: '\x1B[45m',
    [STYLE.CYAN_BG]: '\x1B[46m',
    [STYLE.WHITE_BG]: '\x1B[47m'
};
//# sourceMappingURL=colorEnum.js.map