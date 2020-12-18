declare type Target = string;
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
/**
 * Formats the contents of fields, rows, and data volumes in a human-friendly format.
 */
declare class Format {
    /**
     * Formats the card number in a human-readable format.
     *
     * @param target
     */
    static card(target: Target): void;
    /**
     * Formats the phone number in a human-readable format.
     *
     * @param target
     * @param properties
     */
    static phone(target: Target, properties?: PhoneProperties): void;
    /**
     * Formats the date in a human-readable format.
     *
     * @param target
     * @param properties
     */
    static date(target: Target, properties?: DateProperties): void;
    /**
     * Formats the time in a human-readable format.
     *
     * @param target
     * @param properties
     */
    static time(target: Target, properties?: TimeProperties): void;
    /**
     * Formats a number in a human-readable format.
     *
     * @param target
     * @param properties
     */
    static number(target: Target, properties?: NumberProperties): void;
    /**
     * Formats the price in a human-readable format.
     *
     * @param string
     * @param properties
     */
    static price(string: string, properties?: PriceProperties): string;
    /**
     * Formats bytes to a human-readable format.
     *
     * @param bytes
     * @param properties
     */
    static bytes(bytes?: number, properties?: BytesProperties): string;
}
export default Format;
