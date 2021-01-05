import Cleave from "cleave.js";

export interface FormatPhoneProperties {
    prefix?: string;
    blocks?: number[];
    delimiters?: string[];
}

export interface FormatDateProperties {
    delimiter?: string;
    datePattern?: string[];
}

export interface FormatTimeProperties {
    timePattern?: string[];
}

export interface FormatNumberProperties {
    delimiter?: string;
    numeralThousandsGroupStyle?: "lakh" | "thousand" | "wan" | "none";
}

export interface FormatPriceProperties {
    delimiter?: string;
}

export interface FormatBytesProperties {
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
 */
export class Format {
    private static phoneProperties: FormatPhoneProperties = {
        prefix: "+7",
        blocks: [2, 3, 3, 2, 2],
        delimiters: [" (", ") ", "-", "-"],
    }

    private static dateProperties: FormatDateProperties = {
        delimiter: "-",
        datePattern: ["d", "m", "Y"],
    }

    private static timeProperties: FormatTimeProperties = {
        timePattern: ["h", "m"],
    }

    private static numberProperties: FormatNumberProperties = {
        delimiter: " ",
        numeralThousandsGroupStyle: "thousand",
    }

    /**
     * Formats the card into a human-readable format.
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
     * Formats the phone into a human-readable format.
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
     * Formats a date into a human-readable format.
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
     * Formats time into human-readable format.
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
     * Formats the price into a human-readable format.
     *
     * @param string
     * @param properties
     */
    public static price(string: string, properties: FormatPriceProperties = {}): string {
        return string.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1" + (properties.delimiter ?? " "));
    }

    /**
     * Formats bytes into human-readable format.
     *
     * @param bytes
     * @param properties
     */
    public static bytes(bytes: number = 0, properties: FormatBytesProperties = {}): string {
        if (bytes === 0) return "0 B";

        const factor = 1024;
        const suffix = [" B", " KB", " MB", " GB", " TB", " PB", " EB", " ZB", " YB"];
        const index = Math.floor(Math.log(bytes) / Math.log(factor));

        return (bytes / Math.pow(factor, index)).toFixed(properties.fraction ?? 2) + suffix[index];
    }
}

export default Format;
