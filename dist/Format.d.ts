interface PhoneProperties {
    prefix?: string;
    blocks?: number[];
    delimiters?: string[];
}
interface DateProperties {
    delimiter?: string;
    datePattern?: string[];
}
interface TimeProperties {
    timePattern?: string[];
}
interface NumberProperties {
    delimiter?: string;
    numeralThousandsGroupStyle?: 'lakh' | 'thousand' | 'wan' | 'none';
}
interface PriceProperties {
    delimiter?: string;
}
interface BytesProperties {
    fraction?: number;
}
declare type Selector = string;
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
declare class Format {
    private static phoneProperties;
    private static dateProperties;
    private static timeProperties;
    private static numberProperties;
    /**
     * Formats the card into a human-readable format.
     *
     * @param selector
     */
    static card(selector: Selector): void;
    /**
     * Formats the phone into a human-readable format.
     *
     * @param selector
     * @param properties
     */
    static phone(selector: Selector, properties?: PhoneProperties): void;
    /**
     * Formats a date into a human-readable format.
     *
     * @param selector
     * @param properties
     */
    static date(selector: Selector, properties?: DateProperties): void;
    /**
     * Formats time into human-readable format.
     *
     * @param selector
     * @param properties
     */
    static time(selector: Selector, properties?: TimeProperties): void;
    /**
     * Formats a number into human-readable format.
     *
     * @param selector
     * @param properties
     */
    static number(selector: Selector, properties?: NumberProperties): void;
    /**
     * Formats the price into a human-readable format.
     *
     * @param string
     * @param properties
     */
    static price(string: string, properties?: PriceProperties): string;
    /**
     * Formats bytes into human-readable format.
     *
     * @param bytes
     * @param properties
     */
    static bytes(bytes?: number, properties?: BytesProperties): string;
}
export default Format;
