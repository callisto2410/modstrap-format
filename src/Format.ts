import Cleave from "cleave.js";

export interface FormatPhoneProperties {
    /**
     * Phone number prefix, such as country code.
     */
    prefix?: string;

    /**
     * Blocks of characters.
     */
    blocks?: number[];

    /**
     * The delimiters for blocks.
     */
    delimiters?: string[];
}

export interface FormatDateProperties {
    /**
     * The delimiter for blocks.
     */
    delimiter?: string;

    /**
     * Pattern for the date.
     */
    datePattern?: string[];
}

export interface FormatTimeProperties {
    /**
     * Pattern for the time.
     */
    timePattern?: string[];
}

export interface FormatNumberProperties {
    /**
     * The delimiter for blocks.
     */
    delimiter?: string;

    /**
     * Grouping style for thousands.
     */
    numeralThousandsGroupStyle?: "lakh" | "thousand" | "wan" | "none";
}

export interface FormatPriceProperties {
    /**
     * The delimiter for blocks.
     */
    delimiter?: string;
}

export interface FormatBytesProperties {
    /**
     * The number of digits after the dot.
     */
    fraction?: number;
}

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
 * Github: {@link https://github.com/nosir/cleave.js}
 * Homepage: {@link https://nosir.github.io/cleave.js/}
 */
export class Format {
    /**
     * Default properties for a phone number.
     *
     * @private
     */
    private static phoneProperties: FormatPhoneProperties = {
        prefix: "+7",
        blocks: [2, 3, 3, 2, 2],
        delimiters: [" (", ") ", "-", "-"],
    }

    /**
     * Default properties for date.
     * @private
     */
    private static dateProperties: FormatDateProperties = {
        delimiter: "-",
        datePattern: ["d", "m", "Y"],
    }

    /**
     * Default properties for time.
     *
     * @private
     */
    private static timeProperties: FormatTimeProperties = {
        timePattern: ["h", "m"],
    }

    /**
     * Default properties for number.
     *
     * @private
     */
    private static numberProperties: FormatNumberProperties = {
        delimiter: " ",
        numeralThousandsGroupStyle: "thousand",
    }

    /**
     * Formats the card number into a human-readable format.
     *
     * @param selector
     */
    public static card(selector: string): void {
        const elements = document.querySelectorAll(selector) as NodeListOf<HTMLElement>;

        for (const element of elements) {
            new Cleave(element, {
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
    public static phone(selector: string, properties: FormatPhoneProperties = {}): void {
        const elements = document.querySelectorAll(selector) as NodeListOf<HTMLElement>;

        for (const element of elements) {
            new Cleave(element, {
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
    public static date(selector: string, properties: FormatDateProperties = {}): void {
        const elements = document.querySelectorAll(selector) as NodeListOf<HTMLElement>;

        for (const element of elements) {
            new Cleave(element, {
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
    public static time(selector: string, properties: FormatTimeProperties = {}): void {
        const elements = document.querySelectorAll(selector) as NodeListOf<HTMLElement>;

        for (const element of elements) {
            new Cleave(element, {
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
    public static number(selector: string, properties: FormatNumberProperties = {}): void {
        const elements = document.querySelectorAll(selector) as NodeListOf<HTMLElement>;

        for (const element of elements) {
            new Cleave(element, {
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
    public static price(string: string, properties: FormatPriceProperties = {}): string {
        return string.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1" + (properties.delimiter ?? " "));
    }

    /**
     * Formats the number of bytes into human readable format, KB, MB, etc.
     *
     * @param bytes
     * @param properties
     */
    public static bytes(bytes: number, properties: FormatBytesProperties = {}): string {
        if (bytes === 0) return "0 B";

        const factor = 1024;
        const suffix = [" B", " KB", " MB", " GB", " TB", " PB", " EB", " ZB", " YB"];
        const index = Math.floor(Math.log(bytes) / Math.log(factor));

        return (bytes / Math.pow(factor, index)).toFixed(properties.fraction ?? 2) + suffix[index];
    }
}

export default Format;
