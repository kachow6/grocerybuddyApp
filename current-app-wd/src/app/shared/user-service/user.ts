export class DateService {
    static readonly msPerDay: number = 86400000;

    // Return the number of days
    static getDays(date: Date): number {
        return Date.parse( date.toJSON() ) / this.msPerDay;
    }
}


// LISTS
// This section contains classes for all the different types of lists.
export class FridgeItem  {
    name:           string;
    qty:            number;
    datePurchased:  number;
    shelfLife:      number;

    constructor(name: string, qty: number, shelfLife: number) {
      this.name = name;
      this.qty = qty;
      this.datePurchased = DateService.getDays( new Date() );
      this.shelfLife = shelfLife;
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
    password:    string;
    
    currentList: string;
    homeList:    ShoppingList[];
    fridgeList:  FridgeItem[];
}
