"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cleave_js_1 = __importDefault(require("cleave.js"));
/**
 * Formats field content, price and data volume into human-readable format.
 */
class Format {
    /**
     * Formats the card into a human-readable format.
     *
     * @param target
     */
    static card(target) {
        const elements = document.querySelectorAll(target);
        for (const element of elements) {
            if (!(element instanceof HTMLInputElement))
                continue;
            new cleave_js_1.default(element, {
                creditCard: true,
            });
        }
    }
    /**
     * Formats the phone into a human-readable format.
     *
     * @param target
     * @param properties
     */
    static phone(target, properties = {}) {
        var _a, _b, _c;
        const elements = document.querySelectorAll(target);
        for (const element of elements) {
            if (!(element instanceof HTMLInputElement))
                continue;
            new cleave_js_1.default(element, {
                numericOnly: true,
                prefix: (_a = properties.prefix) !== null && _a !== void 0 ? _a : '+7',
                blocks: (_b = properties.blocks) !== null && _b !== void 0 ? _b : [2, 3, 3, 2, 2],
                delimiters: (_c = properties.delimiters) !== null && _c !== void 0 ? _c : [' (', ') ', '-', '-'],
            });
        }
    }
    /**
     * Formats a date into a human-readable format.
     *
     * @param target
     * @param properties
     */
    static date(target, properties = {}) {
        var _a, _b;
        const elements = document.querySelectorAll(target);
        for (const element of elements) {
            if (!(element instanceof HTMLInputElement))
                continue;
            new cleave_js_1.default(element, {
                date: true,
                delimiter: (_a = properties.delimiter) !== null && _a !== void 0 ? _a : '-',
                datePattern: (_b = properties.pattern) !== null && _b !== void 0 ? _b : ['d', 'm', 'Y'],
            });
        }
    }
    /**
     * Formats time into human-readable format.
     *
     * @param target
     * @param properties
     */
    static time(target, properties = {}) {
        var _a;
        const elements = document.querySelectorAll(target);
        for (const element of elements) {
            if (!(element instanceof HTMLInputElement))
                continue;
            new cleave_js_1.default(element, {
                time: true,
                timePattern: (_a = properties.pattern) !== null && _a !== void 0 ? _a : ['h', 'm'],
            });
        }
    }
    /**
     * Formats a number into human-readable format.
     *
     * @param target
     * @param properties
     */
    static number(target, properties = {}) {
        var _a, _b;
        const elements = document.querySelectorAll(target);
        for (const element of elements) {
            if (!(element instanceof HTMLInputElement))
                continue;
            new cleave_js_1.default(element, {
                numeral: true,
                delimiter: (_a = properties.delimiter) !== null && _a !== void 0 ? _a : ' ',
                numeralThousandsGroupStyle: (_b = properties.style) !== null && _b !== void 0 ? _b : 'thousand',
            });
        }
    }
    /**
     * Formats the price into a human-readable format.
     *
     * @param string
     * @param properties
     */
    static price(string, properties = {}) {
        var _a;
        return string.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1' + ((_a = properties.delimiter) !== null && _a !== void 0 ? _a : ' '));
    }
    /**
     * Formats bytes into human-readable format.
     *
     * @param bytes
     * @param properties
     */
    static bytes(bytes = 0, properties = {}) {
        var _a;
        if (bytes === 0)
            return '0 B';
        const factor = 1024;
        const suffix = [' B', ' KB', ' MB', ' GB', ' TB', ' PB', ' EB', ' ZB', ' YB'];
        const index = Math.floor(Math.log(bytes) / Math.log(factor));
        return (bytes / Math.pow(factor, index)).toFixed((_a = properties.base) !== null && _a !== void 0 ? _a : 2) + suffix[index];
    }
}
exports.default = Format;
