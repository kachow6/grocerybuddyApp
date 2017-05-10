import { Component }        from '@angular/core';
import { UserService }      from '../shared/user-service/user.service';
import { ShoppingList, ShoppingItem, FridgeItem }     from '../shared/user-service/user';


//Array that contains the items on List page.
// const LIST_ITEMS: ItemList[] = [
//     new ItemList("Avocados", 5, false),
//     new ItemList("Banana", 3, false),
//     new ItemList("Aubergine", 76, false)
// ];

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
    myList: ShoppingItem[];
    nameInput: string = "";
    numberInput: number;
    checkedInput: boolean;

    constructor(private userService: UserService) {
        this.myList = userService.getCurrentList().contents;
    }

    addItem(): void {
        if (this.nameInput.length > 0, this.numberInput > 0) {
            this.myList.push(new ShoppingItem(this.nameInput, this.numberInput, this.checkedInput));
            this.nameInput = '';
            this.numberInput = null;
        }
        // console.log(this.myList.contents[1]);
    }

    checkItem(): void {
        if(this.checkedInput == false) {
            this.checkedInput = true;
        } else if (this.checkedInput == true){
            this.checkedInput = false;
        }
    }

    //Method for testing item checked state
    // testStuff(): void {
    //     console.log(LIST_ITEMS[0]);
    //     console.log(LIST_ITEMS[1]);
    //     console.log(LIST_ITEMS[2]);
    // }
    checkout(): void {
        for(let i = 0; i < this.myList.length; i++) {
            if (this.myList[i].checked == true) {
                UserService.user.fridgeList.
                push(new FridgeItem(this.myList[i].name, this.myList[i].quantity, 50));
            }
        }
    }
}