import { Component } from '@angular/core';


//Class for list item objects.
export class ItemList {
    name: String;
    quantity: number;

    constructor(name: String, quantity: number) {
    this.name = name;
    this.quantity = quantity;
  }
}

//Array that contains the items on List page.
const LIST_ITEMS: ItemList[] = [
    new ItemList("Avocados", 5),
    new ItemList("Banana", 3),
    new ItemList("Aubergine", 76)
];

// Constants for interfacing with HammerJS's gestures
const SWIPE = {
    LEFT: 'swipeleft',
    RIGHT: 'swiperight',
    UP: 'swipeup',
    DOWN: 'swipedown'
}

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'gb-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css'],
})

export class ListComponent {
  //Instantiating the array object.
  myList: ItemList[] = LIST_ITEMS;
  nameInput: String = "";
  numberInput: number;

    addItem(): void {
        if(this.nameInput.length > 0, this.numberInput > 0) {
            this.myList.push(new ItemList(this.nameInput, this.numberInput));
            this.nameInput = '';
            this.numberInput = null;
        }
        console.log(this.myList[1]);
    }
}