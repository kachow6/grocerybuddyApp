import { Component, OnInit           } from '@angular/core';
import { HELPER_QUOTES               } from './list.helperquotes';
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

import { Output, EventEmitter }        from '@angular/core';

import {
         CompleterService,
         CompleterData
       }                               from 'ng2-completer';

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

    //helper quote index
    quoteIndex: number = 0;
    helperQuote: string = HELPER_QUOTES[this.quoteIndex];

    // User input variables
    nameInput:    string = '';
    renameInput:  string = '';
    numberInput:  number;
    checkedInput: boolean;
    currentItem:  any;

    // Database & Auth Variables.
    userId:       string;
    userAuth$:    Observable<firebase.User>;
    currentList$: FirebaseListObservable<any[]>;

    // Autofill Data.
    autofillData: any[] = [];
    dataService: CompleterData;

    // CONSTRUCTOR & INITIALIZATION.
    // Used to inject all the necessary services and perform basic wiring.
    constructor(public userService: UserService,
                public router: Router,
                public afAuth: AngularFireAuth,
                public db: AngularFireDatabase,
                public completerService: CompleterService) {}

    ngOnInit() {



        let myDate: Date = new Date();

        // console.log ( myDate.toJSON() );

        // console.log( Date.parse(myDate.toJSON()) / this.msPerDay );
        // console.log( Date.parse( '2017-05-18T00:36:47.337Z' ) / this.msPerDay);

        // Make sure a list is selected


        // Firebase Objects Setup.
        this.userAuth$    = this.afAuth.authState;
        this.userAuth$.take(1).subscribe(response => {
            this.userId = response.uid;
            this.currentList$ = this.db.list('/shoppingList/'
                          + this.userService.getCurrentList());
        });

        // Grab autofill data and store it locally.
        // Note: this is just grabbing the keys. The expiry data gets grabbed
        // later.
        this.db.list('expiryEstimate').take(1).subscribe(response => {

            for (let item of response) {
                // console.log(item.$key);
                this.autofillData.push({
                    autofillId: (UserService.makePresentable(item.$key)),
                    shelfLife: item.$value
                });
            }

            this.dataService = this.completerService.local(this.autofillData, 'autofillId', 'autofillId');
        });
    }

    // Method for adding a new item to a list from user input
    addItem(): void {
        if (this.nameInput.length > 0 && this.numberInput > 0) {
            // Build the new item to put in the shopping list
            let newItem = {
                'name': this.nameInput,
                'qty': this.numberInput,
                'checked': false,
                'checkedOut': false,
                'autofillId': this.nameInput
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

            for(let i of datasnap) {
                // Goes through all items in the datasnap and sets the checked states to false
                let query = this.db.object('/shoppingList/' + this.userService.getCurrentList() + '/' + i.$key);
                query.update({'checkedOut': false});
                query.update({'moved': false});
            }
        });
    }

    // CHECKOUT FUNCTION
    // Checks out all selected items and creates new FridgeItems in the fridge.
    getAllCheckoutItems(): void {

        // Query the current shopping list and retrieve all items as a list.
        this.db.list('/shoppingList/' + this.userService.getCurrentList())
               .take(1).subscribe(datasnap => {

            // Loop through all items in the list. For each one that is checked,
            // create a new appropriate item in the fridge.

            // TODO: Replace this with one of the Firebase query methods that filters
            // the original query by the value of the "checked" property.
            for(let i of datasnap){

                if (i.checked) {
                    // Push a new appropriate FridgeItem to the user's fridge.
                    let fridgeItemRef = this.db.list('fridgeList/' + this.userId)
                                        .push(new FridgeItem(i.name, i.qty, 0));

                    // Pull expiry info from the expiryEstimate reference in the
                    // DB, based on the "autofillId" property in the checked
                    // item.
                    console.log(UserService.makeSearchable(i.autofillId));
                    this.db.object('expiryEstimate/' + UserService.makeSearchable(i.autofillId))
                           .take(1).subscribe(expItem => {
                               if (expItem.$value) {
                                   fridgeItemRef.update({shelfLife: expItem.$value});
                               }
                           });

                    // Unchecks items as they are added to the fridge.
                    this.db.object('/shoppingList/' + this.userService.getCurrentList() + '/' + i.$key)
                           .update({'checked': false,
                                    'checkedOut': true});
                }
            }
            // Moves the user to the fridge page after checking out
            this.router.navigateByUrl('/main/fridge');
        });
    }

    getCheckedOut(key: string): boolean {
        let moved = false;
        this.db.object('/shoppingList/' + this.userService.getCurrentList() + '/' + key).take(1).subscribe(datasnap => {
            if (datasnap.checkedOut) {
                moved = true;
            }
        });
        return moved;
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
    startItemDeleteTimer(key: string, item: any): any {
        return setTimeout(
            () => {
                // Call Delete Function
                this.runDeleteAnimation(key, item);
            }, 3000
        );
    }

    // Triggers the fade-out animation for items
    runDeleteAnimation(key: string, item: any): any {
        item.deleteFinalized = true;
        setTimeout(() => {
            // Perform Delete Query
            this.db.object('/shoppingList/'
               + this.userService.getCurrentList() + '/'
               + key).remove();
        }, 500);
    }

    // Cancel timer that deletes items.
    clearItemDeleteTimer(timer: any): null {
        timer = clearTimeout(timer);
        return null;
    }

    // Enable drag to scroll
    doScroll(e: any): void {
        // Collect necessary variables
        let src: Window = e.srcEvent.currentTarget;
        let scrollDistance: number = -1 * e.srcEvent.movementY;

        // Scroll
        src.scrollBy(0, scrollDistance);
    }

    //changes helper quotes based on incrementing index
    changeQuote(): void {
        this.quoteIndex ++;
        if (this.quoteIndex >= HELPER_QUOTES.length) {
            this.quoteIndex = 0;
        }
        this.helperQuote = HELPER_QUOTES[this.quoteIndex];
        console.log(this.quoteIndex);
    }
}
