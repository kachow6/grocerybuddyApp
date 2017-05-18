import { Component, OnInit           } from '@angular/core';
import { UserService                 } from '../shared/user-service/user.service';
import { ShoppingList,
         ShoppingItem,
         FridgeItem                  } from '../shared/user-service/user';
import { Router                      } from '@angular/router';
import { FormsModule                 } from '@angular/forms';
import                                      'rxjs/add/operator/take';
import { AngularFireDatabase,
         FirebaseListObservable,
         FirebaseObjectObservable    } from 'angularfire2/database';
import { Observable                  } from 'rxjs/observable';
import { AngularFireAuth             } from 'angularfire2/auth';
import * as firebase                   from 'firebase/app';

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
    readonly msPerDay: number = 86400000;

    // User input variables
    nameInput: string = '';
    renameInput: string = '';
    numberInput: number;
    checkedInput: boolean;
    currentItem: any;

    // Database & Auth Variables.
    userId: string = 'user-1';
    userAuth$:    Observable<firebase.User>;
    currentList$: FirebaseListObservable<any[]>;

    // CONSTRUCTOR & INITIALIZATION.
    // Used to inject all the necessary services and perform basic wiring.
    constructor(public userService: UserService,
                public router: Router,
                public afAuth: AngularFireAuth,
                public db: AngularFireDatabase) {}

    ngOnInit() {

        let myDate: Date = new Date();

        // console.log ( myDate.toJSON() );

        // console.log( Date.parse(myDate.toJSON()) / this.msPerDay );
        // console.log( Date.parse( '2017-05-18T00:36:47.337Z' ) / this.msPerDay);

        // Make sure a list is selected


        // Firebase Objects Setup
        this.userAuth$    = this.afAuth.authState;
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

    // Method for adding a new item to a list from user input
    addItem(): void {
        if (this.nameInput.length > 0 && this.numberInput > 0) {
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
        if (checked == true) {
            query.update({'checked': false});
        } else if (checked == false) {
            query.update({'checked': true});
        }
    }

    // Method for renaming an item in the user's fridge list.
    itemRename(key: string): void {
        let currentObj = this.db.object('/shoppingList/' + this.userService.getCurrentList() + '/' + key);
        let newName = this.renameInput;
        // The input cannot be nothing
        if (newName.length > 2) {
            currentObj.update({'name': newName});
        }
    }

    // Reset All Items method 
    resetAllItems(): void {
        let mySub = this.db.list('/shoppingList/' + this.userService.getCurrentList())
                           .take(1)
                           .subscribe(datasnap => {
            for(let i of datasnap){
                // Goes through all items in the datasnap and sets the checked states to false
                let query = this.db.object('/shoppingList/' + this.userService.getCurrentList() + '/' + i.$key);
                query.update({'checked': false});
            }
        });
    }

    // Method for checking out all items into the user's fridge
    getAllCheckoutItems(): void {
        let mySub = this.db.list('/shoppingList/' + this.userService.getCurrentList())
                           .take(1)
                           .subscribe(datasnap => {
            // Iterates through all items in the list via datasnap         
            for(let i of datasnap){
                if (i.checked) {
                    this.db.list('fridgeList/' + this.userId).push(
                            new FridgeItem(i.name, i.qty, 10));
                    // Changes checked state of the items as they are added to the fridge
                    let query = this.db.object('/shoppingList/' + this.userService.getCurrentList() + '/' + i.$key);
                    query.update({'checked': false});
                }
            }
            // Moves the user to the fridge page after checking out
            this.router.navigateByUrl('/main/fridge');
        });
    }

    // Method to check if a item name is greater than 14 characters
    checkName(name: string): string {
        if (name.length > 15) {
            name = name.slice(0,15) + '...';
        }
        return name;
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
}
