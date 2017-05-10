// LISTS
// This section contains classes for all the different types of lists.
export class FridgeItem  {}

export class ShoppingItem {}

// SHOPPING LIST CLASS
export class ShoppingList {
	name:		string;
	contents: 	string[] = [];
}

// FRIDGE CLASS
export class FridgeList {
	contents:	string[] = [];
}

// USER CLASS
export class User {
	username:	string;
	email:		string;

	currentList: 	ShoppingList;
	homeList: 		ShoppingList[];
	fridgeList:		FridgeItem[];
}