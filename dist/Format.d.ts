interface PhoneProperties {
    prefix?: string;
    blocks?: number[];
    delimiters?: string[];
}
interface DateProperties {
    delimiter?: string;
    pattern?: string[];
}
interface TimeProperties {
    pattern?: string[];
}
interface NumberProperties {
    delimiter?: string;
    style?: 'lakh' | 'thousand' | 'wan' | 'none';
}
interface PriceProperties {
    delimiter?: string;
}
interface BytesProperties {
    base?: number;
}
declare type Target = string;
/**
 * Formats field content, price and data volume into human-readable format.
 */
declare class Format {
    /**
     * Formats the card into a human-readable format.
     *
     * @param target
     */
    static card(target: Target): void;
    /**
     * Formats the phone into a human-readable format.
     *
     * @param target
     * @param properties
     */
    static phone(target: Target, properties?: PhoneProperties): void;
    /**
     * Formats a date into a human-readable format.
     *
     * @param target
     * @param properties
     */
    static date(target: Target, properties?: DateProperties): void;
    /**
     * Formats time into human-readable format.
     *
     * @param target
     * @param properties
     */
    static time(target: Target, properties?: TimeProperties): void;
    /**
     * Formats a number into human-readable format.
     *
     * @param target
     * @param properties
     */
    static number(target: Target, properties?: NumberProperties): void;
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
