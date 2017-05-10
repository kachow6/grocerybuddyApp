// LISTS
// This section contains classes for all the different types of lists.
export class FridgeItem  {
    name:       string;
    quantity:   number;
    expiration: number;
    maxAge:     number
    
    constructor(name: string, quantity: number, expiration: number) {
      this.name = name;
      this.quantity = quantity;
      this.expiration = expiration;
      this.maxAge = 100;
    }

}

export class ShoppingItem {
    name:        string;
    quantity:    number;
    checked:     boolean;

    constructor(name: string, quantity: number, checked: boolean) {
        this.name = name;
        this.quantity = quantity;
        this.checked = checked;
    }
}

// SHOPPING LIST CLASS
export class ShoppingList {
    name:        string;
    contents:    ShoppingItem[] = [];

    constructor(name: string) {
        this.name = name;
    }
}

// USER CLASS
export class User {
    username:    string;
    email:       string;

    currentList: ShoppingList;
    homeList:    ShoppingList[];
    fridgeList:  FridgeItem[];
}