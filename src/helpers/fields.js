/* eslint-disable no-useless-escape */
export const fields = [
    {
        label: 'Wybierz walutę',
        tag: 'select',
        name: 'currency',
        placeholder: 'currency',
        required: true,
    },
    {
        label: 'Ilość',
        tag: 'input',
        type: 'number',
        name: 'amount',
        placeholder: 'amount',
        required: true,
        pattern: '^[0-9]*$',
        error: 'Incorrect amount value'
    },
    {
        label: 'Data zakupu',
        tag: 'input',
        type: 'date',
        name: 'purchaseDate',
        placeholder: 'purchaseDate',
        required: true,
        pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$',
        error: 'Incorrect date value'
    },
    {
        label: 'Cena zakupu',
        tag: 'input',
        name: 'price',
        placeholder: 'price',
        required: true,
        pattern: '^[0-9]+(?:[\.][0-9]{2})*$',
        error: 'Incorrect price value'
    },
]