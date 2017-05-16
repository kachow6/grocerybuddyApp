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
    showEasterEgg = false;

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
      if(this.renameInput.length > 2) {
      item.name = this.renameInput; 
      this.renameInput = "";
      }
    }

    // ====== ITEM DELETE ====== //
    // Starts timer to delete items.
    startItemDeleteTimer(item: FridgeItem): any {
        return setTimeout(
                () => {this.deleteItem(item); }, 3000
            );
    }

    // Cancel timer that deletes items.
    clearItemDeleteTimer(timer: any): null {
        timer = clearTimeout(timer);
        return null;
    }

    // Method for deleting a shopping list off home page.
    deleteItem(item: FridgeItem): void {
        this.fridgeList.splice(this.fridgeList.indexOf(item),1);
    }
    // Displays easteregg img if expiration is set to over 9000.
    activateEasterEgg(expiration: number): void {
        if (expiration > 9000) {
            this.showEasterEgg = true;

            setTimeout(() => {
                this.showEasterEgg = false;
            }, 2000);
        }
    }

}
