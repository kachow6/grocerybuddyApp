import { Component, OnInit }   from '@angular/core';
import { UserService }         from '../shared/user-service/user.service';
import { FridgeItem }        from '../shared/user-service/user';

// //Array that contains the items on List page.
// const FRIDGE_ITEMS: ItemList[] = [
//     new ItemList('Oranges', 6, 30),
//     new ItemList('Mango', 12, 85),
//     new ItemList('Durian', 3, 45)
// ];

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

    fridgeList:     FridgeItem[];

    nameInput:      string = '';
    numberInput:    number;
    expiration:     number;
    renameInput: string;

    //States for the progress bar
    stateDanger: string = 'progress-bar-danger';
    stateWarning: string = 'progress-bar-warning';
    stateSuccess: string = 'progress-bar-success';
    itemState: string = '';

    constructor(private userService: UserService) {
        this.fridgeList = userService.getFridge();
    }

    // Method for calculating the expiration bar colour
    calculateExp(max: number, expiration: number): string {
        if (expiration / max < 0.33){
            return this.stateDanger;
        } else if (expiration / max >= 0.66){
            return this.stateSuccess;
        } else {
            return this.stateWarning;
        }
    }

    // Method for adding a fridge item object to the array
    addItem(): void {
        if(this.nameInput.length > 0, this.numberInput > 0) {
            this.fridgeList.push(new FridgeItem(this.nameInput, this.numberInput, null));
            this.nameInput = '';
            this.numberInput = null;
        }
    }

    itemRename(item: FridgeItem):  void {
      item.name = this.renameInput;
      this.renameInput = ''; 
    }

}