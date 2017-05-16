import { Component, OnInit        } from '@angular/core';
import { UserService              } from '../shared/user-service/user.service';
import { FridgeItem               } from '../shared/user-service/user';
import { AngularFireDatabase,
         FirebaseListObservable,
         FirebaseObjectObservable } from 'angularfire2/database';
import { Observable               } from 'rxjs/observable';
import { AngularFireAuth          } from 'angularfire2/auth';
import * as firebase                from 'firebase/app';

// //Array that contains the items on List page.
// const FRIDGE_ITEMS: ItemList[] = [
//     new ItemList('Oranges', 6, 30),
//     new ItemList('Mango', 12, 85),
//     new ItemList('Durian', 3, 45)
// ];

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

    // Local access variables to keep track of user name, etc.
    userId: string = 'user-1';
    currentItemName: string;

    // User Auth Object
    userAuth$: Observable<firebase.User>;

    // List observer Objects
    user$: FirebaseObjectObservable<any>;
    fridgeList$: FirebaseListObservable<any[]>;
    currentItem$: FirebaseListObservable<any[]>;

    fridgeList:     FridgeItem[];

    nameInput:      string = '';
    numberInput:    number;
    expiration:     number;
    renameInput: string = '';
    showEasterEgg = false;

    //States for the progress bar
    stateDanger: string = 'progress-bar-danger';
    stateWarning: string = 'progress-bar-warning';
    stateSuccess: string = 'progress-bar-success';
    itemState: string = '';

    constructor(private userService: UserService,
                public afAuth: AngularFireAuth,
                public db: AngularFireDatabase) {
        this.fridgeList = userService.getFridge();
    }

    ngOnInit() {
        //Initializes User Settings
        this.userAuth$ = this.afAuth.authState;
        this.fridgeList$ = this.db.list('/fridgeList/' + this.userId);
        console.log(this.fridgeList$.$ref.toJSON());
    }

    // Adds a new item to the user's fridge list
    addItemToFridgeList(itemName: string, itemQty: number) {
        let fridgeItem = {name: itemName,
                         qty: itemQty,
                         autofillId: ''};
                         console.log(fridgeItem);
        this.fridgeList$.push({
            name: itemName,
            qty: itemQty,
            datePurch: '',
            autofillId: ''
        }); 
    }

    // Method for calculating the expiration bar colour
    calculateExp(max: number, expiration: number): string {
        if (expiration / max < 0.33){
            return this.stateDanger;
        } else if (expiration / max >= 0.66){
            return this.stateSuccess;
        } else {
            return this.stateWarning;
        }
    }

    // Method for renaming an item in the user's fridge list.
    itemRename(key: string) {
        this.currentItem$ = this.db.list('/fridgeList/' + key);
        console.log(key);

        let newName = this.renameInput;
        console.log(this.renameInput);
        if (this.renameInput.length > 2) {
        let itemNameGetter = this.db.object('/fridgeList/' + this.userId + '/' + key ).update({'name': newName});
        }
    }

    // Method for editing the quantity of an item in the user's fridge list
    editQty(key: string) {
        this.currentItem$ = this.db.list('/fridgeList' + key);
        console.log(key);

        let newQty = this.numberInput;
        let itemQtyGetter = this.db.object('/fridgeList/' + this.userId + '/' + key).update({'qty': newQty});
    }

    
    // ====== ITEM DELETE ====== //
    // Starts timer to delete items.
    startItemDeleteTimer(item: FridgeItem): any {
        return setTimeout(
                () => {this.deleteItem(item); }, 3000
            );
    }

    // Cancel timer that deletes items.
    clearItemDeleteTimer(timer: any): null {
        timer = clearTimeout(timer);
        return null;
    }

    // Method for deleting a shopping list off home page.
    deleteItem(item: FridgeItem): void {
        this.fridgeList.splice(this.fridgeList.indexOf(item),1);
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

}
