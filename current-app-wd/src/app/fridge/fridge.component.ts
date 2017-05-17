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

    nameInput:   string = '';
    numberInput: number;
    expiration:  number;
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
    }

    ngOnInit() {
        //Initializes User Settings
        this.userAuth$ = this.afAuth.authState;
        this.fridgeList$ = this.db.list('/fridgeList/' + this.userId);
        // console.log(this.fridgeList$.$ref.toJSON());

        this.fridgeList$.subscribe(snap => {
            for (let item of snap) {
                item.expiration = 1 - ((this.today - item.datePurchased) / item.shelfLife);
                // console.log(item);
            }
        });
    }

    // Adds a new item to the user's fridge list
    addItemToFridgeList(itemName: string, itemQty: number) {
        let fridgeItem = {name: itemName,
                         qty: itemQty,
                         autofillId: ''};
                         // console.log(fridgeItem);
        if (itemName.length > 2 && itemQty > 0) {
        this.fridgeList$.push({
            name: itemName,
            qty: itemQty,
            datePurch: '',
            autofillId: ''
        }); 
        }
        this.nameInput = '';
        this.numberInput = null;
    }

    // Method for calculating the expiration bar colour
    calculateExp(expiration: number): string {
        // console.log(expiration);

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
        // console.log(key);

        let newName = this.renameInput;
        // console.log(this.renameInput);
        if (this.renameInput.length > 2) {
        let itemNameGetter = this.db.object('/fridgeList/' + this.userId + '/' + key ).update({'name': newName});
        }
    }

    // Method for editing the quantity of an item in the user's fridge list
    editQty(key: string) {
        this.currentItem$ = this.db.list('/fridgeList' + key);
        // console.log(key);

        let newQty = this.numberInput;
        if (newQty > 0) {
        let itemQtyGetter = this.db.object('/fridgeList/' + this.userId + '/' + key).update({'qty': newQty});
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
