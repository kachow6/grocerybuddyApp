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
    renameInput: String = "";
    id: number;

    constructor(
        private userService: UserService,
        private router: Router
        ) {
        this.myList = userService.getHome();
    }

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
    // myArray = myArray.slice(0, i).concat(myArray.slice(i+1));


    //Method for testing item checked state
    testStuff(): void {
        console.log(this.myList[0]);
    }
}
