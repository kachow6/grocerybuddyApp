import { Component, OnInit        } from '@angular/core';
import { UserService              } from '../shared/user-service/user.service';
import { FridgeItem, DateTools    } from '../shared/user-service/user';
import { AngularFireDatabase,
         FirebaseListObservable,
         FirebaseObjectObservable } from 'angularfire2/database';
import { Observable               } from 'rxjs/observable';
import { AngularFireAuth          } from 'angularfire2/auth';
import * as firebase                from 'firebase/app';

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

    readonly today        : number = DateTools.getDays(new Date());

    // Local access variables to keep track of user name, etc.
    userId: string = 'user-1';
    currentItemName: string;

    // User Auth Object
    userAuth$: Observable<firebase.User>;

    // List observer Objects
    user$: FirebaseObjectObservable<any>;
    fridgeList$: FirebaseListObservable<any[]>;
    currentItem$: FirebaseListObservable<any[]>;
    fridgeList: any[] = [];

    // Input Variables
    nameInput:         string = '';
    numberInput:       number;
    expiration:        number;
    renameInput:       string = '';
    newQtyInput:       number;
    newShelfLifeInput: number;
    showEasterEgg      = false;

    //States for the progress bar
    stateDanger:  string = 'progress-bar-danger';
    stateWarning: string = 'progress-bar-warning';
    stateSuccess: string = 'progress-bar-success';
    itemState:    string = '';

    // CONSTRUCTOR AND INITIALIZATION.
    // Used to inject all the necessary services and performr basic wiring.
    constructor(private userService: UserService,
                public afAuth: AngularFireAuth,
                public db: AngularFireDatabase) {}

    // OnInit method. Angular's recommended place to perform initialization.
    ngOnInit() {
        //Initializes User Settings
        this.userAuth$ = this.afAuth.authState;
        this.fridgeList$ = this.db.list('/fridgeList/' + this.userId);

        this.fridgeList$.subscribe(snap => {
            for (let item of snap) {
                item.expiration = 1 - ((this.today - item.datePurchased) / item.shelfLife);
            }
        });
    }

    // Adds a new item to the user's fridge list
    addItemToFridgeList(itemName: string, itemQty: number) {
        let added = false;
        let fridgeItem = {name: itemName,
                         qty: itemQty,
                         autofillId: ''};
        if (itemName.length >= 1) {
            if(itemQty > 0) {
                this.fridgeList$.push(new FridgeItem(itemName, itemQty, 10));
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
    freshnessBarColour(expiration: number): string {
        if (expiration < 0.33){
            return this.stateDanger;
        } else if (expiration >= 0.66){
            return this.stateSuccess;
        } else {
            return this.stateWarning;
        }
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
        let newQty = this.newQtyInput;
        if (newQty > 0) {
            this.db.object('/fridgeList/' + this.userId + '/' + key).update({'qty': newQty});
        }
    }

    // Method for editing the max shelf-life of an item in the user's fridge
    editShelfLife(item: any) {
        let key = item.$key;
        let newShelfLife = this.newShelfLifeInput;
        if (newShelfLife > 0) {
            this.db.object('/fridgeList/' + this.userId + '/' + key).update({'shelfLife': newShelfLife});
            item.expiration = 1 - ((this.today - item.datePurchased) / item.shelfLife);
        }
    }

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
    startItemDeleteTimer(key: string): any {
        return setTimeout(
                () => {this.db.object('/fridgeList/' + this.userId + '/' + key).remove(); }, 3000
            );
    }

    // Cancel timer that deletes items.
    clearItemDeleteTimer(timer: any): null {
        timer = clearTimeout(timer);
        return null;
    }
}
