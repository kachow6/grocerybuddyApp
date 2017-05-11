import { User, ShoppingList, FridgeItem, ShoppingItem } from './user';

let curList: ShoppingList = {
    name: 'Patrick\'s Party Supplies',
    contents: [
        {
            name: 'Cane Sugar',
            quantity: 3,
            checked: false
        },
        {
            name: 'Bubbles',
            quantity: 37,
            checked: false
        },
        {
            name: 'Secret Sauce',
            quantity: 3,
            checked: false
        }
    ]
};

let fridge: FridgeItem[] = [
    {
        name:          'Celery',
        quantity:      2,
        expiration:    37,
        maxAge:        100
    },
    {
        name:          'Peppers',
        quantity:      2,
        expiration:    70,
        maxAge:        100
    },
    {
        name:          'Chicken',
        quantity:      4,
        expiration:    25,
        maxAge:        100
    }
];

export const USER: User = {
    username:    'Raly',
    email:       'me@somewhere.com',

    homeList: [
        curList
    ],
    currentList: curList,
    fridgeList: fridge

};
