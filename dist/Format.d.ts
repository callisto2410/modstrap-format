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
 * Format:
 * [Github]{@link https://github.com/callisto2410/modstrap-format}
 *
 * Cleave.js:
 * [Github]{@link https://github.com/nosir/cleave.js}
 * [Homepage]{@link https://nosir.github.io/cleave.js/}
 */
export declare class Format {
    /**
     * Default properties for a phone number.
     *
     * @private
     */
    private static phoneProperties;
    /**
     * Default properties for date.
     * @private
     */
    private static dateProperties;
    /**
     * Default properties for time.
     *
     * @private
     */
    private static timeProperties;
    /**
     * Default properties for number.
     *
     * @private
     */
    private static numberProperties;
    /**
     * Formats the card number into a human-readable format.
     *
     * @param selector
     */
    static card(selector: string): void;
    /**
     * Formats a phone number into a human-readable format.
     *
     * @param selector
     * @param properties
     */
    static phone(selector: string, properties?: FormatPhoneProperties): void;
    /**
     * Formats the date into human-readable format.
     *
     * @param selector
     * @param properties
     */
    static date(selector: string, properties?: FormatDateProperties): void;
    /**
     * Formats the time into a human-readable format.
     *
     * @param selector
     * @param properties
     */
    static time(selector: string, properties?: FormatTimeProperties): void;
    /**
     * Formats a number into human-readable format.
     *
     * @param selector
     * @param properties
     */
    static number(selector: string, properties?: FormatNumberProperties): void;
    /**
     * Formats a string into a human-readable price format.
     *
     * @param string
     * @param properties
     */
    static price(string: string, properties?: FormatPriceProperties): string;
    /**
     * Formats the number of bytes into human readable format, KB, MB, etc.
     *
     * @param bytes
     * @param properties
     */
    static bytes(bytes: number, properties?: FormatBytesProperties): string;
}
export default Format;
