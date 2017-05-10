import { Component } from '@angular/core';

//Class for Fridge item objects.
export class ItemList {
    name: String;
    quantity: number;
    expiration: number;
    
    constructor(name: String, quantity: number, expiration: number) {
      this.name = name;
      this.quantity = quantity;
      this.expiration = expiration;
    }
}

//Array that contains the items on List page.
const FRIDGE_ITEMS: ItemList[] = [
    new ItemList("Oranges", 6, 30),
    new ItemList("Mango", 12, 85),
    new ItemList("Durian", 3, 45)
];

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'gb-fridge',
  templateUrl: 'fridge.component.html',
  styleUrls: ['fridge.component.css'],
})

export class FridgeComponent {

    fridgeList: ItemList[] = FRIDGE_ITEMS;
    nameInput: String = "";
    numberInput: number;
    expiration: number;

    addItem(): void {
      if(this.nameInput.length > 0, this.numberInput > 0) {
        this.fridgeList.push(new ItemList(this.nameInput, this.numberInput, null));
        this.nameInput = '';
        this.numberInput = null;
      }
      console.log(this.fridgeList[1]);
    }
}