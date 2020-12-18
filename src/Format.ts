import Cleave from 'cleave.js';

type Target = string;

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
 * Formats field content, price and data volume into human-readable format.
 */
class Format {
    /**
     * Formats the card into a human-readable format.
     *
     * @param target
     */
    static card(target: Target): void {
        const elements = document.querySelectorAll(target);

        for (const element of elements) {
            if (!(element instanceof HTMLInputElement)) continue;

            new Cleave(element, {
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
    static phone(target: Target, properties: PhoneProperties = {}): void {
        const elements = document.querySelectorAll(target);

        for (const element of elements) {
            if (!(element instanceof HTMLInputElement)) continue;

            new Cleave(element, {
                numericOnly: true,
                prefix: properties.prefix ?? '+7',
                blocks: properties.blocks ?? [2, 3, 3, 2, 2],
                delimiters: properties.delimiters ?? [' (', ') ', '-', '-'],
            });
        }
    }

    /**
     * Formats a date into a human-readable format.
     *
     * @param target
     * @param properties
     */
    static date(target: Target, properties: DateProperties = {}): void {
        const elements = document.querySelectorAll(target);

        for (const element of elements) {
            if (!(element instanceof HTMLInputElement)) continue;

            new Cleave(element, {
                date: true,
                delimiter: properties.delimiter ?? '-',
                datePattern: properties.pattern ?? ['d', 'm', 'Y'],
            });
        }
    }

    /**
     * Formats time into human-readable format.
     *
     * @param target
     * @param properties
     */
    static time(target: Target, properties: TimeProperties = {}): void {
        const elements = document.querySelectorAll(target);

        for (const element of elements) {
            if (!(element instanceof HTMLInputElement)) continue;

            new Cleave(element, {
                time: true,
                timePattern: properties.pattern ?? ['h', 'm'],
            });
        }
    }

    /**
     * Formats a number into human-readable format.
     *
     * @param target
     * @param properties
     */
    static number(target: Target, properties: NumberProperties = {}): void {
        const elements = document.querySelectorAll(target);

        for (const element of elements) {
            if (!(element instanceof HTMLInputElement)) continue;

            new Cleave(element, {
                numeral: true,
                delimiter: properties.delimiter ?? ' ',
                numeralThousandsGroupStyle: properties.style ?? 'thousand',
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

        return (bytes / Math.pow(factor, index)).toFixed(properties.base ?? 2) + suffix[index];
    }
}

export default Format;
