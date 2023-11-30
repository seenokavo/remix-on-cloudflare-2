import numeral from 'numeral';

export function formatQuantity(quantity: number): { quantity: string, postfix: string } {
    let formattedQuantity: string;
    let postfix;

    if (quantity >= 1_000_000_000) {
        formattedQuantity = numeral(quantity / 1_000_000_000).format('0.00');
        postfix = 'B';
    } else {
        formattedQuantity = numeral(quantity / 1_000_000).format('0.00');
        postfix = 'M';
    }

    return {
        quantity: formattedQuantity,
        postfix
    };
}