import { Component, OnInit } from '@angular/core';

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
    //States for the progress bar
    stateDanger: String = "progress-bar-danger";
    stateWarning: String = "progress-bar-warning";
    stateSuccess: String = "progress-bar-success";
    itemState: String = "";

    // Method for calculating the expiration bar colour
    calculateExp(max: number, expiration: number): String {
        if(expiration / max < 0.33)
          return this.stateDanger;
        if(expiration / max >= 0.66)
          return this.stateSuccess;
        if(expiration / max >= 0.33)
          return this.stateWarning;
    }

    // Method for adding a fridge item object to the array
    addItem(): void {
      if(this.nameInput.length > 0, this.numberInput > 0) {
        this.fridgeList.push(new ItemList(this.nameInput, this.numberInput, null));
        this.nameInput = '';
        this.numberInput = null;
      }
      console.log(this.fridgeList[1]);
    }
    

}