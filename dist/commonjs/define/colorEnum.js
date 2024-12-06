"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ansi = void 0;
var Ansi;
(function (Ansi) {
    Ansi.AnsiEnum = {
        NORMAL: 'normal',
        BRIGHT: 'bright',
        GREY: 'grey',
        ITALIC: 'italic',
        UNDERLINE: 'underline',
        FLICKER_FAST: 'flicker:fast',
        FLICKER_SLOW: 'flicker:slow',
        HIDDEN: 'hidden',
        BLACK: 'black',
        RED: 'red',
        GREEN: 'green',
        YELLOW: 'yellow',
        BLUE: 'blue',
        MAGENTA: 'magenta',
        CYAN: 'cyan',
        WHITE: 'white',
        BLACK_BG: 'black:bg',
        RED_BG: 'red:bg',
        GREEN_BG: 'green:bg',
        YELLOW_BG: 'yellow:bg',
        BLUE_BG: 'blue:bg',
        MAGENTA_BG: 'magenta:bg',
        CYAN_BG: 'cyan:bg',
        WHITE_BG: 'white:bg'
    };
    Ansi.AnsiTransformer = {
        [Ansi.AnsiEnum.NORMAL]: '\x1B[0m',
        [Ansi.AnsiEnum.BRIGHT]: '\x1B[1m',
        [Ansi.AnsiEnum.GREY]: '\x1B[2m',
        [Ansi.AnsiEnum.ITALIC]: '\x1B[3m',
        [Ansi.AnsiEnum.UNDERLINE]: '\x1B[4m',
        [Ansi.AnsiEnum.FLICKER_SLOW]: '\x1B[5m',
        [Ansi.AnsiEnum.FLICKER_FAST]: '\x1B[6m',
        [Ansi.AnsiEnum.HIDDEN]: '\x1B[8m',
        [Ansi.AnsiEnum.BLACK]: '\x1B[30m',
        [Ansi.AnsiEnum.RED]: '\x1B[31m',
        [Ansi.AnsiEnum.GREEN]: '\x1B[32m',
        [Ansi.AnsiEnum.YELLOW]: '\x1B[33m',
        [Ansi.AnsiEnum.BLUE]: '\x1B[34m',
        [Ansi.AnsiEnum.MAGENTA]: '\x1B[35m',
        [Ansi.AnsiEnum.CYAN]: '\x1B[36m',
        [Ansi.AnsiEnum.WHITE]: '\x1B[37m',
        [Ansi.AnsiEnum.BLACK_BG]: '\x1B[40m',
        [Ansi.AnsiEnum.RED_BG]: '\x1B[41m',
        [Ansi.AnsiEnum.GREEN_BG]: '\x1B[42m',
        [Ansi.AnsiEnum.YELLOW_BG]: '\x1B[43m',
        [Ansi.AnsiEnum.BLUE_BG]: '\x1B[44m',
        [Ansi.AnsiEnum.MAGENTA_BG]: '\x1B[45m',
        [Ansi.AnsiEnum.CYAN_BG]: '\x1B[46m',
        [Ansi.AnsiEnum.WHITE_BG]: '\x1B[47m'
    };
})(Ansi || (exports.Ansi = Ansi = {}));
//# sourceMappingURL=colorEnum.js.map