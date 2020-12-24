import './index.scss';

import Format from '../../src/Format';

const price = document.querySelector('.price')!;
const bytes = document.querySelector('.bytes')!;

/* Fields. */
Format.card('[data-format-card]');
Format.phone('[data-format-phone]');
Format.date('[data-format-date]');
Format.time('[data-format-time]');
Format.number('[data-format-number]');

/* Other. */
price.textContent = Format.price(price.textContent ?? '');
bytes.textContent = Format.bytes(Number(bytes.textContent) ?? '');
