import { Component }        from '@angular/core';
import { UserService }      from '../shared/user-service/user.service';
import { ShoppingList, ShoppingItem }     from '../shared/user-service/user';


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
    myList: ShoppingList;
    nameInput: string = "";
    numberInput: number;
    checkedInput: boolean;

    constructor(private userService: UserService) {
        this.myList = userService.getCurrentList();
    }

    addItem(): void {
        if (this.nameInput.length > 0, this.numberInput > 0) {
            this.myList.contents.push(new ShoppingItem(this.nameInput, this.numberInput, this.checkedInput));
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
        // console.log("______________");
        // console.log(LIST_ITEMS[0]);
        // console.log(LIST_ITEMS[1]);
        // console.log(LIST_ITEMS[2]);
    }

    //Method for testing item checked state
    // testStuff(): void {
    //     console.log(LIST_ITEMS[0]);
    //     console.log(LIST_ITEMS[1]);
    //     console.log(LIST_ITEMS[2]);
    // }
}