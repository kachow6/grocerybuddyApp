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
];

export const USER: User = {
    username:    'Raly',
    email:       'me@somewhere.com',
    password:    'password123',

    homeList: [
        curList
    ],
    currentList: null,
    fridgeList: fridge

};
