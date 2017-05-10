import { Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from '../shared/user-service/user.service';
import { ShoppingList } from '../shared/user-service/user';


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
    // new listName: String;

    constructor(private userService: UserService) {
        this.myList = userService.getHome();
    }

    addList():void {
        if(this.nameInput.length >= 1) {}
            this.myList.push(new ShoppingList(this.nameInput));
            this.nameInput = '';
        }
    }
