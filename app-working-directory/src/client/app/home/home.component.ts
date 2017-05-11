import { Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from '../shared/user-service/user.service';
import { ShoppingList } from '../shared/user-service/user';
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
    listRename(item: ShoppingList):  void {
        if(this.renameInput.length > 2 && this.renameInput.length < 15) {
        item.name = this.renameInput;
        this.renameInput = ""; 
        }
    }
    
    //Method for resetting items checked in the list.
    resetList(list: ShoppingList): void {
        for(let i = 0; i < this.userService.getCurrentList().contents.length; i++) {
            this.userService.getCurrentList().contents[i].checked = false;
      }
    }
    
    //Method for copying and adding a new shopping list on home page.
    copyList(list: ShoppingList): void {
        let tempList: ShoppingList;
        this.myList.push(tempList = new ShoppingList(list.name));
        tempList.contents = list.contents;
        // let tempList: ShoppingList;
        // let tempName: string = this.userService.getCurrentList().name;
        // let tempArray: ShoppingList;
        // tempArray.contents = this.userService.getCurrentList().contents
        // this.myList.push(tempList = new ShoppingList(tempName));
        // tempList.contents = tempArray.contents;
    }

    //Method for deleting a shopping list off home page.
    deleteList(list: ShoppingList): void {
        this.myList.splice(this.myList.indexOf(list),1);
        this.myList = null;
    }

    //Method for testing item checked state
    // testStuff(): void {
    //     console.log(this.myList[0]);
    // }
}
