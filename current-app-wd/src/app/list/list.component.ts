import { Component, OnInit }                   from '@angular/core';
import { UserService }                         from '../shared/user-service/user.service';
import { ShoppingList,
         ShoppingItem,
         FridgeItem }                          from '../shared/user-service/user';
import { Router }                              from '@angular/router';

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
    userId: string;

    userAuth$:    Observable<firebase.User>;
    currentList$: FirebaseListObservable<any[]>;

    constructor(public userService: UserService,
                public router: Router,
                public afAuth: AngularFireAuth,
                public db: AngularFireDatabase) {
    }

    ngOnInit() {

        console.log(this.userService.getCurrentList());

        // Make sure a list is selected
        if (!this.userService.getCurrentList()) {
            this.router.navigateByUrl('/main');
        }

        // Firebase Objects Setup
        this.userAuth$ = this.afAuth.authState;

        /* ====== SUBSCRIPTIONS ====== */
        /* userAuth$ subscription */
        /* This callback function is invoked every time the userAuth$ observable
        // is updated. The new data snapshot that is returned is passed into the
        // callback via variable "userSnap."
        */
        this.userAuth$.subscribe(userSnap => {
            if (!userSnap) {
                // If there is no user, clean out all the other local data.
                this.currentList$ = null;

            } else {
                // If there is a user...
                // this.userId = userSnap.uid;

                // Set the homeList observer to track the right field in the db
                this.currentList$ = this.db.list('/shoppingList/'
                                  + this.userService.getCurrentList());
            } 
        });
    }

    //Method for adding a new item by user input
    addItem(): void {
        if (this.nameInput.length > 0, this.numberInput > 0) {

            // Build the new item to put in the shopping list
            let newItem = {
                'name': this.nameInput,
                'qty': this.numberInput,
                'autofillId': ''
            };

            // Push the item to the currentList$.
            this.currentList$.push(newItem);
        }
    }

    //Method for changing the checked state of an item
    checkItem(): void {
        if(this.checkedInput === false) {
            this.checkedInput = true;
        } else if (this.checkedInput === true) {
            this.checkedInput = false;
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

        // Navigates to the fridge page.
        this.router.navigateByUrl('/main/fridge');
    }
}
