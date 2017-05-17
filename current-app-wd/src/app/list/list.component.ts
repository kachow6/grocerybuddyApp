import { Component, OnInit }                   from '@angular/core';
import { UserService }                         from '../shared/user-service/user.service';
import { ShoppingList,
         ShoppingItem,
         FridgeItem }                          from '../shared/user-service/user';
import { Router }                              from '@angular/router';
import { FormsModule                         } from '@angular/forms';

import { AngularFireDatabase,
                 FirebaseListObservable,
                 FirebaseObjectObservable }    from 'angularfire2/database';
import { Observable }                          from 'rxjs/observable';
import { AngularFireAuth }                     from 'angularfire2/auth';
import * as firebase                           from 'firebase/app';

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
    myList: ShoppingItem[] = [];
    nameInput: string = '';
    numberInput: number;
    checkedInput: boolean;

    // Database & Auth Variables.
    userId: string = 'user-1';

    userAuth$:    Observable<firebase.User>;
    currentList$: FirebaseListObservable<any[]>;

    constructor(public userService: UserService,
                public router: Router,
                public afAuth: AngularFireAuth,
                public db: AngularFireDatabase) {
    }

    ngOnInit() {

        // Make sure a list is selected
        if (!this.userService.getCurrentList()) {
            this.router.navigateByUrl('/main');
        }


        // Firebase Objects Setup
        this.userAuth$ = this.afAuth.authState;
        this.currentList$ = this.db.list('/shoppingList/'
                          + this.userService.getCurrentList());

        /* ====== SUBSCRIPTIONS ====== */
        /* userAuth$ subscription */
        /* This callback function is invoked every time the userAuth$ observable
        // is updated. The new data snapshot that is returned is passed into the
        // callback via variable "userSnap."
        */
        // this.userAuth$.subscribe(userSnap => {
        //     if (!userSnap) {
        //         // If there is no user, clean out all the other local data.
        //         this.currentList$ = null;

        //     } else {
        //         // If there is a user...
        //         // this.userId = userSnap.uid;

        //         // Set the homeList observer to track the right field in the db
        //         this.currentList$ = this.db.list('/shoppingList/'
        //                           + this.userService.getCurrentList());
        //     } 
        // });
    }

    //Method for adding a new item by user input
    addItem(): void {
        if (this.nameInput.length > 0, this.numberInput > 0) {

            // Build the new item to put in the shopping list
            let newItem = {
                'name': this.nameInput,
                'qty': this.numberInput,
                'checked': false,
                'autofillId': ''
            };

            // Push the item to the currentList$.
            this.currentList$.push(newItem);
            this.nameInput = '';
            this.numberInput = null;
        }
    }

    // Method for a user to mark an item they have put in their basket
    checkItem(checked: boolean, key: string): void {
        let query = this.db.object('/shoppingList/' + this.userService.getCurrentList() + '/' + key);
        console.log(query.$ref);
        if (checked == true) {
            query.update({'checked': false});
        } else if (checked == false) {
            query.update({'checked': true});
        }
    }

    // ====== ITEM DELETE ====== //
    // Starts timer to delete items.
    startItemDeleteTimer(key: string): any {
        return setTimeout(
                () => {
                    // Perform Delete Query
                    this.db.object('/shoppingList/'
                       + this.userService.getCurrentList() + '/'
                       + key).remove();
                }, 3000
            );
    }

    // Cancel timer that deletes items.
    clearItemDeleteTimer(timer: any): null {
        timer = clearTimeout(timer);
        return null;
    }

    // Method for resetting the checked state of all items in a list *Unsubscribe error*
    resetAllItems(): void {
        let mySub = this.db.list('/shoppingList/' + this.userService.getCurrentList()).subscribe(datasnap => {
                for(let i of datasnap){
                    let query = this.db.object('/shoppingList/' + this.userService.getCurrentList() + '/' + i.$key);
                    query.update({'checked': false});
            }
            mySub.unsubscribe();
        });
    }

    //  Old Method for transfering checked items to fridge array
    // checkout(): void {
    //     for(let i = 0; i < this.myList.length; i++) {
    //         if (this.myList[i].checked === true) {
    //             UserService.user.fridgeList.
    //             push(new FridgeItem(this.myList[i].name, this.myList[i].quantity, 50));
    //         }
    //     }
    //     // Navigates to the fridge page.
    //     this.router.navigateByUrl('/main/fridge');
    // }

    // Method for checking out all items into the user's fridge
    getAllCheckoutItems(): void {
        let mySub = this.db.list('/shoppingList/' + this.userService.getCurrentList()).subscribe(datasnap => {
            for(let i of datasnap){
                console.log(i);
                if (i.checked) {
                    // filteredArray.push(i);
                    this.db.list('fridgeList/' + this.userId).push({
                        name: i.name,
                        qty: i.qty,
                        datePurch: '',
                        maxAge: ''
                    });
                    let query = this.db.object('/shoppingList/' + this.userService.getCurrentList() + '/' + i.$key);
                    query.update({'checked': false});
                }
            }
        });
         this.router.navigateByUrl('/main/fridge');
    }

    // Method to check if a item name is greater than 14 characters
    checkName(name: string): string {
        if (name.length > 15) {
            name = name.slice(0,15) + '...';
        }
        return name;
    }
}
