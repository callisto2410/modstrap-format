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
export declare class Format {
    private static phoneProperties;
    private static dateProperties;
    private static timeProperties;
    private static numberProperties;
    /**
     * Formats the card into a human-readable format.
     *
     * @param selector
     */
    static card(selector: string): void;
    /**
     * Formats the phone into a human-readable format.
     *
     * @param selector
     * @param properties
     */
    static phone(selector: string, properties?: FormatPhoneProperties): void;
    /**
     * Formats a date into a human-readable format.
     *
     * @param selector
     * @param properties
     */
    static date(selector: string, properties?: FormatDateProperties): void;
    /**
     * Formats time into human-readable format.
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
     * Formats the price into a human-readable format.
     *
     * @param string
     * @param properties
     */
    static price(string: string, properties?: FormatPriceProperties): string;
    /**
     * Formats bytes into human-readable format.
     *
     * @param bytes
     * @param properties
     */
    static bytes(bytes?: number, properties?: FormatBytesProperties): string;
}
export default Format;
