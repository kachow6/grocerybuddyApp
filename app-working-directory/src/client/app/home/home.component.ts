import { Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from '../shared/user-service/user.service';
import { ShoppingList, ShoppingItem } from '../shared/user-service/user';
import { Router } from '@angular/router';


/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'gb-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
})
export class HomeComponent {

    //Instantiating the array object.
    myList: ShoppingList[];
    nameInput: string = null;
    renameInput: string;

    constructor(
        private userService: UserService,
        private router: Router
        ) {
        this.myList = userService.getHome();
    }

    //Method for adding a new Shopping list object on homepage.
    addList():void {
        if(this.nameInput.length >= 1) {
            this.myList.push(new ShoppingList(this.nameInput));
            this.nameInput = '';
        }
    }

    selectList(list: ShoppingList): void {
        this.userService.setCurrentList(list);
        this.router.navigateByUrl('/list');
    }

    //Method for renaming the shopping list.
    listRename(list: ShoppingList):  void {
        if(this.renameInput.length > 2) {
        list.name = this.renameInput;
        this.renameInput = ""; 
        }
    }
    
    //Method for resetting items checked in the list.
    resetList(list: ShoppingList): void {
        for(let i = 0; i < this.userService.getCurrentList().contents.length; i++) {
            this.userService.getCurrentList().contents[i].checked = false;
      }
    }

    copyList(list: ShoppingList): void {
        let tempList: ShoppingList = new ShoppingList(list.name);
        let tempIndex: ShoppingItem[];
        for(let i = 0; i < list.contents.length; i++) {
            tempList.contents.push(new ShoppingItem(list.contents[i].name,
                                                    list.contents[i].quantity,
                                                    list.contents[i].checked))
        }
        this.myList.push(tempList);
    }

    //Method for deleting a shopping list off home page.
    deleteList(list: ShoppingList): void {
        this.myList.splice(this.myList.indexOf(list),1);

        if (this.userService.getCurrentList() === list) {
            this.userService.setCurrentList(null);
        }
    }
}
