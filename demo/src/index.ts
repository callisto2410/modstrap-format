import './index.scss';

import Format from '../../src/Format';

const price = document.querySelector('.price');
if (!price) throw new Error('Element ".price" is "undefined".');

const bytes = document.querySelector('.bytes');
if (!bytes) throw new Error('Element ".bytes" is "undefined".');

/* Fields. */
Format.card('[data-format-card]');
Format.phone('[data-format-phone]');
Format.date('[data-format-date]');
Format.time('[data-format-time]');
Format.number('[data-format-number]');

/* Other. */
price.textContent = Format.price(price.textContent ?? '');
bytes.textContent = Format.bytes(Number(bytes.textContent) ?? '');
