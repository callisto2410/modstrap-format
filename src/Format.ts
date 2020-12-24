import Cleave from 'cleave.js';

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

type Selector = string;

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
class Format {
    private static phoneProperties: PhoneProperties = {
        prefix: '+7',
        blocks: [2, 3, 3, 2, 2],
        delimiters: [' (', ') ', '-', '-'],
    }

    private static dateProperties: DateProperties = {
        delimiter: '-',
        datePattern: ['d', 'm', 'Y'],
    }

    private static timeProperties: TimeProperties = {
        timePattern: ['h', 'm'],
    }

    private static numberProperties: NumberProperties = {
        delimiter: ' ',
        numeralThousandsGroupStyle: 'thousand',
    }

    /**
     * Formats the card into a human-readable format.
     *
     * @param selector
     */
    static card(selector: Selector): void {
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
    static phone(selector: Selector, properties: PhoneProperties = {}): void {
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
    static date(selector: Selector, properties: DateProperties = {}): void {
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
    static time(selector: Selector, properties: TimeProperties = {}): void {
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
    static number(selector: Selector, properties: NumberProperties = {}): void {
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
    static price(string: string, properties: PriceProperties = {}): string {
        return string.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1' + (properties.delimiter ?? ' '));
    }

    /**
     * Formats bytes into human-readable format.
     *
     * @param bytes
     * @param properties
     */
    static bytes(bytes: number = 0, properties: BytesProperties = {}): string {
        if (bytes === 0) return '0 B';

        const factor = 1024;
        const suffix = [' B', ' KB', ' MB', ' GB', ' TB', ' PB', ' EB', ' ZB', ' YB'];
        const index = Math.floor(Math.log(bytes) / Math.log(factor));

        return (bytes / Math.pow(factor, index)).toFixed(properties.fraction ?? 2) + suffix[index];
    }
}

export default Format;
