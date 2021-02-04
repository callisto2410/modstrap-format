"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Format = void 0;
const cleave_js_1 = __importDefault(require("cleave.js"));
/**
 * Formats field content, price and data volume into human-readable format.
 *
 * @see card
 * @see phone
 * @see date
 * @see time
 * @see number
 * @see price
 * @see bytes
 *
 * Format:
 * [Github]{@link https://github.com/callisto2410/modstrap-format}
 *
 * Cleave.js:
 * [Github]{@link https://github.com/nosir/cleave.js}
 * [Homepage]{@link https://nosir.github.io/cleave.js/}
 */
class Format {
    /**
     * Formats the card number into a human-readable format.
     *
     * @param selector
     */
    static card(selector) {
        const elements = document.querySelectorAll(selector);
        for (const element of elements) {
            new cleave_js_1.default(element, {
                creditCard: true,
            });
        }
    }
    /**
     * Formats a phone number into a human-readable format.
     *
     * @param selector
     * @param properties
     */
    static phone(selector, properties = {}) {
        const elements = document.querySelectorAll(selector);
        for (const element of elements) {
            new cleave_js_1.default(element, {
                numericOnly: true,
                ...this.phoneProperties,
                ...properties,
            });
        }
    }
    /**
     * Formats the date into human-readable format.
     *
     * @param selector
     * @param properties
     */
    static date(selector, properties = {}) {
        const elements = document.querySelectorAll(selector);
        for (const element of elements) {
            new cleave_js_1.default(element, {
                date: true,
                ...this.dateProperties,
                ...properties,
            });
        }
    }
    /**
     * Formats the time into a human-readable format.
     *
     * @param selector
     * @param properties
     */
    static time(selector, properties = {}) {
        const elements = document.querySelectorAll(selector);
        for (const element of elements) {
            new cleave_js_1.default(element, {
                time: true,
                ...this.timeProperties,
                ...properties,
            });
        }
    }
    /**
     * Formats a number into human-readable format.
     *
     * @param selector
     * @param properties
     */
    static number(selector, properties = {}) {
        const elements = document.querySelectorAll(selector);
        for (const element of elements) {
            new cleave_js_1.default(element, {
                numeral: true,
                ...this.numberProperties,
                ...properties,
            });
        }
    }
    /**
     * Formats a string into a human-readable price format.
     *
     * @param string
     * @param properties
     */
    static price(string, properties = {}) {
        var _a;
        return string.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1" + ((_a = properties.delimiter) !== null && _a !== void 0 ? _a : " "));
    }
    /**
     * Formats the number of bytes into human readable format, KB, MB, etc.
     *
     * @param bytes
     * @param properties
     */
    static bytes(bytes, properties = {}) {
        var _a;
        if (bytes === 0)
            return "0 B";
        const factor = 1024;
        const suffix = [" B", " KB", " MB", " GB", " TB", " PB", " EB", " ZB", " YB"];
        const index = Math.floor(Math.log(bytes) / Math.log(factor));
        return (bytes / Math.pow(factor, index)).toFixed((_a = properties.fraction) !== null && _a !== void 0 ? _a : 2) + suffix[index];
    }
}
exports.Format = Format;
/**
 * Default properties for a phone number.
 *
 * @private
 */
Format.phoneProperties = {
    prefix: "+7",
    blocks: [2, 3, 3, 2, 2],
    delimiters: [" (", ") ", "-", "-"],
};
/**
 * Default properties for date.
 * @private
 */
Format.dateProperties = {
    delimiter: "-",
    datePattern: ["d", "m", "Y"],
};
/**
 * Default properties for time.
 *
 * @private
 */
Format.timeProperties = {
    timePattern: ["h", "m"],
};
/**
 * Default properties for number.
 *
 * @private
 */
Format.numberProperties = {
    delimiter: " ",
    numeralThousandsGroupStyle: "thousand",
};
exports.default = Format;
