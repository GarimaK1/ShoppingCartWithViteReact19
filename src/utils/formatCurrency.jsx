const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    // From MDN: The runtime's (browser's or something else) default locale is used when 'undefined' is passed
    currency: 'USD',
    style: 'currency'
})

export default function formatCurrency(number) {
    return CURRENCY_FORMATTER.format(number);
}