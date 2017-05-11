import { Component }        from '@angular/core';
import { UserService }      from '../shared/user-service/user.service';
import { ShoppingList,
         ShoppingItem,
         FridgeItem }       from '../shared/user-service/user';
import { Router }           from '@angular/router';

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
    nameInput: string = '';
    numberInput: number;
    checkedInput: boolean;

    constructor(private userService: UserService,
                private router: Router) {
        this.myList = userService.getCurrentList().contents;
    }

    //Method for adding a new item by user input
    addItem(): void {
        if (this.nameInput.length > 0, this.numberInput > 0) {
            this.myList.push(new ShoppingItem(this.nameInput, this.numberInput, this.checkedInput));
            this.nameInput = '';
            this.numberInput = null;
        }
        // console.log(this.myList.contents[1]);
    }

    //Method for changing the checked state of an item
    checkItem(): void {
        if(this.checkedInput === false) {
            this.checkedInput = true;
        } else if (this.checkedInput === true) {
            this.checkedInput = false;
        }
    }

    //Method for resetting checked items to false
    resetList(): void {
        for(let i = 0; i < this.myList.length; i++) {
            this.myList[i].checked = false;
        }
    }

    //Method for transfering checked items to fridge array
    checkout(): void {
        for(let i = 0; i < this.myList.length; i++) {
            if (this.myList[i].checked === true) {
                UserService.user.fridgeList.
                push(new FridgeItem(this.myList[i].name, this.myList[i].quantity, 50));
            }
        }

        // MOVE TO FRIDGE HERE
        this.router.navigateByUrl('/fridge');
    }
}
