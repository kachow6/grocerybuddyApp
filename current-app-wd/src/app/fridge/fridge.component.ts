import { Component, OnInit        } from '@angular/core';
import { UserService              } from '../shared/user-service/user.service';
import { FridgeItem, DateTools    } from '../shared/user-service/user';
import { AngularFireDatabase,
         FirebaseListObservable,
         FirebaseObjectObservable } from 'angularfire2/database';
import { Observable               } from 'rxjs/observable';
import { AngularFireAuth          } from 'angularfire2/auth';
import * as firebase                from 'firebase/app';

import {
         CompleterService,
         CompleterData
       }                            from 'ng2-completer';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'gb-fridge',
  templateUrl: 'fridge.component.html',
  styleUrls: ['fridge.component.css'],
})

export class FridgeComponent implements OnInit {

    readonly msPerDay: number = 86400000;
    readonly today        : number = new Date().getTime();

    // Local access variables to keep track of user name, etc.
    userId: string;
    currentItemName: string;

    // User Auth Object
    userAuth$: Observable<firebase.User>;

    // List observer Objects
    user$: FirebaseObjectObservable<any>;
    fridgeList$: FirebaseListObservable<any[]>;
    currentItem$: FirebaseListObservable<any[]>;
    fridgeList: any[] = [];

    // Input Variables
    nameInput         : string = '';
    numberInput       : number;
    expiration        : number;
    renameInput       : string = '';
    reQtyInput        : number;
    newShelfLifeInput : number;
    showEasterEgg     : boolean = false;
    daysLeft          : string;

    //States for the progress bar
    stateDanger:  string = 'progress-bar-danger';
    stateWarning: string = 'progress-bar-warning';
    stateSuccess: string = 'progress-bar-success';
    itemState:    string = '';

    // Autofill Data.
    autofillData: any[] = [];
    dataService: CompleterData;

    // CONSTRUCTOR AND INITIALIZATION.
    // Used to inject all the necessary services and performr basic wiring.
    constructor(private userService: UserService,
                public afAuth: AngularFireAuth,
                public db: AngularFireDatabase,
                public completerService: CompleterService) {}

    // OnInit method. Angular's recommended place to perform initialization.
    ngOnInit() {
        //Initializes User Settings
        this.userAuth$ = this.afAuth.authState;
        this.userAuth$.take(1).subscribe(response => {
            this.userId = response.uid;
            this.fridgeList$ = this.db.list('/fridgeList/' + this.userId);

            this.fridgeList$.subscribe(snap => {
                for (let item of snap) {
                    item.expiration = 1 - ((this.today - item.datePurchased) / item.shelfLife);
                }
            });
        });

        // Grab autofill data and store it locally.
        // Note: this is just grabbing the keys. The expiry data gets grabbed
        // later.
        this.db.list('expiryEstimate').take(1).subscribe(response => {

            for (let item of response) {
                // console.log(item.$key);
                this.autofillData.push({
                    autofillId: item.$key,
                    shelfLife: item.$value
                });
            }

            this.dataService = this.completerService.local(this.autofillData, 'autofillId', 'autofillId');
        });
    }

    // // Method for calculating the amount of days leftfor an item
    // itemDaysLeft(item): void {
    //     if(item.expiration) {
    //         let days: number;
    //         days = Math.round(item.expiration * 10);
    //         if (days <= 0) {
    //             this.daysLeft = " - 0 days left";
    //         } else {
    //             this.daysLeft = " - " + days + " days left";
    //         }
    //     } else {
    //         this.daysLeft = "";
    //     }
    // }

    // Method for displaying the item purchase date
    itemPurchDate(item): void {
        if (item.shelfLife > 0) {
            let days = Math.round(((this.today - item.datePurchased) / this.msPerDay) + item.shelfLife);
            let month: string;
            console.log(new Date(this.today).getMonth());
            switch(new Date(this.today).getMonth()) {
                case  0:  month = "January";    break;
                case  1:  month = "February";   break;
                case  2:  month = "March";      break;
                case  3:  month = "April";      break;
                case  4:  month = "May";        break;
                case  5:  month = "June";       break;
                case  6:  month = "July";       break;
                case  7:  month = "August";     break;
                case  8:  month = "September";  break;
                case  9:  month = "October";    break;
                case 10:  month = "November";   break;
                case 11:  month = "December";   break;
            }
            this.daysLeft =  " | " + month + " " 
                             + new Date(this.today).getDate()
                             + ", " + new Date(this.today).getFullYear();
        }
    }

    // Adds a new item to the user's fridge list
    addItemToFridgeList(itemName: string, itemQty: number) {
        let added = false;
        let fridgeItem = {name: itemName,
                         qty: itemQty,
                         autofillId: itemName};
        if (itemName.length >= 1) {
            if(itemQty > 0) {

                let fridgeItemRef = this.fridgeList$.push(new FridgeItem(itemName, itemQty, 0));

                // Pull expiry info from the expiryEstimate reference in the
                // DB, based on the "autofillId" property in the checked
                // item.
                this.db.object('expiryEstimate/' + fridgeItem.autofillId)
                       .take(1).subscribe(expItem => {
                           if (expItem.$value) {
                               fridgeItemRef.update({shelfLife: expItem.$value});
                           }
                       });

                added = true;
            } else {
               this.numberInput = null;
            }
        } else {
            this.nameInput = '';
        }
        // Reset the form fields
        if (added) {
            this.nameInput = '';
            this.numberInput = null;
        }
    }

    // Method for calculating the expiration bar's colour
    freshnessBarColour(item: any): string {
        let exp = Math.round(item.shelfLife - ((this.today - item.datePurchased) / this.msPerDay));

        if (exp > 5) {
            return this.stateSuccess;
        } else if (exp > 2) {
            return this.stateWarning;
        } else {
            return this.stateDanger;
        }
    }

    // Debugging method Ignore
    debug(item: any): void {
        // console.log("item exp - " + item.expiration);
        // console.log("today - datepur / shelf" + (this.today - item.datePurchased) / item.shelfLife);
        // console.log(item.expiration);
        // console.log(new Date(this.today).getDate());
        // console.log(new Date(this.today).getMonth());
        // console.log(new Date(this.today).getFullYear());
        // console.log(item.datePurchased);
    }

    // Method for checking if an item's freshness bar has run out
    pastFresh(item: any): boolean {
        let key = item.$key;
        let pastFreshness = false;
        // Checks to see if item originally had a shelf life
        if (item.shelfLife > 0) {
            item.expiration = 1 - ((this.today - item.datePurchased) / (item.shelfLife * this.msPerDay));
            // Checks to see if the bar is empty
            // console.log(item.expiration);
            if (item.expiration <= 0) {
            pastFreshness = true;
            }
        }
        return pastFreshness;
    }

    // Method for renaming an item in the user's fridge list.
    itemRename(key: string) {
        this.currentItem$ = this.db.list('/fridgeList/' + key);
        let newName = this.renameInput;
        if (this.renameInput.length > 2) {
            this.db.object('/fridgeList/' + this.userId + '/' + key ).update({'name': newName});
        }
    }

    // Method for editing the quantity of an item in the user's fridge list
    editQty(key: string) {
        let newQty = this.reQtyInput;
        if (newQty > 0) {
            this.db.object('/fridgeList/' + this.userId + '/' + key).update({'qty': newQty});
        }
    }

    // Method for getting the number of days remaining for an item.
    getDaysLeft(item: any) {
        let key = item.$key;
        let daysLeft = Math.round(item.shelfLife - ((this.today - item.datePurchased) / this.msPerDay));
        
        let days: number;
        if (daysLeft <= 0) {
            this.newShelfLifeInput = 0;
        } else {
            this.newShelfLifeInput = daysLeft;
        }
        
    }

    // Method for editing the max shelf-life of an item in the user's fridge
    editShelfLife(item: any) {

        let key = item.$key;
        // let newShelfLife = this.newShelfLifeInput + item.shelfLife;
        // console.log(newShelfLife);
        let change = Math.round(((this.today - item.datePurchased) / this.msPerDay) + this.newShelfLifeInput);
            this.db.object('/fridgeList/' + this.userId + '/' + key).update({'shelfLife': change});
        // console.log(item.shelfLife);
        // console.log(item.expiration);
        }

        // let newShelfLife = this.newShelfLifeInput;
        // if (newShelfLife > 0) {
        //     this.db.object('/fridgeList/' + this.userId + '/' + key).update({'shelfLife': newShelfLife});
        //     item.expiration = 1 - ((this.today - item.datePurchased) / item.shelfLife);
        // }

    // Displays easteregg img if expiration is set to over 9000.
    activateEasterEgg(expiration: number): void {
        if (expiration > 9000) {
            this.showEasterEgg = true;

            setTimeout(() => {
                this.showEasterEgg = false;
            }, 2000);
        }
    }

    // ====== ITEM DELETE ====== //
    // Starts timer to delete items.
    startItemDeleteTimer(key: string, item: any): any {
        return setTimeout(() => {
            // Call Delete Function
            this.runDeleteAnimation(key, item);
        }, 3000);
    }

    // Triggers the fade-out animation for items
    runDeleteAnimation(key: string, item: any): any {
        item.deleteFinalized = true;
        setTimeout(() => {
            // Perform Delete Query
            this.db.object('/fridgeList/' + this.userId + '/' + key).remove();
        }, 500);
    }

    // Cancel timer that deletes items.
    clearItemDeleteTimer(timer: any): null {
        timer = clearTimeout(timer);
        return null;
    }

    // Drag
    doScroll(e: any): void {
        // Collect necessary variables
        let src: Window = e.srcEvent.currentTarget;
        let scrollDistance: number = -1 * e.srcEvent.movementY;

        // Scroll
        src.scrollBy(0, scrollDistance);
        
    }
}
