import { Component, OnInit, Input, Output    } from '@angular/core';
import { UserService                         } from '../shared/user-service/user.service';
import { ShoppingList, ShoppingItem          } from '../shared/user-service/user';
import { Router                              } from '@angular/router';

import { AngularFireDatabase,
         FirebaseListObservable,
         FirebaseObjectObservable            } from 'angularfire2/database';
import { Observable                          } from 'rxjs/observable';
import { AngularFireAuth                     } from 'angularfire2/auth';
import * as firebase                           from 'firebase/app';

import { WindowRefService } from '../shared/user-service/window-ref.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'gb-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

    // Instantiating the array object.
    myList: ShoppingList[];
    nameInput: string = "";
    renameInput: string = "";

    // Database & Auth Variables.
    userId: string;
    userAuth$:    Observable<firebase.User>;
    homeList$:    FirebaseListObservable<any[]>;

    selectedList: string = this.userService.getCurrentList();

    homeList: ShoppingList[] = this.userService.getHome();

    private _window: Window;

    // CONSTRUCTOR & INITIALIZATION.
    // Constructor. Inject all necessary dependencies.
    constructor(public userService: UserService,
                public router: Router,
                public afAuth: AngularFireAuth,
                public db: AngularFireDatabase,
                public winRef: WindowRefService) {}


    // Init. Initialize anything more complicated than basic wiring.
    ngOnInit() {
        this._window = this.winRef.nativeWindow;
        
        // Firebase Objects Setup
        this.userAuth$ = this.afAuth.authState;
        this.userAuth$.take(1).subscribe(response => {
            this.userId = response.uid;
            this.homeList$ = this.db.list('/homeList/' + this.userId);
            this.myList = this.userService.getHome();
            this.userAuth$.take(1).subscribe(response => this.userId = response.uid);
        });

        /* ====== SUBSCRIPTIONS ====== */
        /* userAuth$ subscription */
        /* This callback function is invoked every time the userAuth$ observable
        // is updated. The new data snapshot that is returned is passed into the
        // callback via variable "userSnap."
        */
        // this.userAuth$.subscribe(userSnap => {
        //     if (!userSnap) {
        //         // If there is no user, clean out all the other local data.
        //         this.homeList$ = null;

        //     } else {
        //         // If there is a user...
        //         this.userId = userSnap.uid;

        //         // Set the homeList$ observer to track the right field in the db
        //         this.homeList$ = this.db.list('/homeList/' + this.userId);
        //     } 
        // });
    }

    // Method for adding a new Shopping list object on homepage.
    addList():void {
        // AngularFire DB Integration Code
        if (this.nameInput.length >= 1) {
            // Add new list to homeList$.
            let newListKey = this.homeList$.push(this.nameInput).key;
            this.nameInput = '';
        }
    }

    // Method for moving into the user selected list
    selectList(key: string): void {
        this.userService.setCurrentList(key);
        this.router.navigateByUrl('/main/list');
    }

    // Method for renaming a list
    renameList(key: string): void {
        let newName = this.renameInput;
        if (newName.length > 0) {
            this.db.object('/homeList/' + this.userId + '/' + key).set(newName);
        }
        this.renameInput = '';
    }

    // Method for resetting the checked states of the items in a selected list
    resetList(key: string): void {
        let mySub = this.db.list('/shoppingList/' + key).take(1).subscribe(datasnap => {
            for(let i of datasnap) {
                // Queries to each item in the datasnap, sets checked state to false
                let query = this.db.object('/shoppingList/' + this.userService.getCurrentList() + '/' + i.$key);
                query.update({'checkedOut': false});
            }
            mySub.unsubscribe();
        });
    }

    // Method for copying and creating a new instance of a user's shopping list
    copyList(key: string, name: string): void {
           let copyListKey = this.homeList$.push(name).key;
           let mySub = this.db.list('/shoppingList/' + key).subscribe(datasnap => {
           for(let i of datasnap){
                console.log(i);
                // Create a new item in fridge with the following attributes
                this.db.list('/shoppingList/' + copyListKey).push({
                        'name': i.name,
                        'qty': i.qty,
                        'checked': false,
                        'autofillId': ''
                    });
            }
            mySub.unsubscribe();
        });
    }

    // ====== ITEM DELETE ====== //
    // Starts timer to delete items.getCurrentList
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
            // Delete Shopping List
            this.db.object('/shoppingList/' + key).remove();
            // Delete Reference in Home List
            this.db.object('/homeList/'
                           + this.userId + '/' + key).remove();
            this.userService.setCurrentList(null);
        }, 500);
    }

    // Cancel timer that deletes items.
    clearItemDeleteTimer(timer: any): null {
        timer = clearTimeout(timer);
        return null;
    }

    // Enable drag to scroll
    doScroll(e: any): void {
        let scrollTolerance = 50;

        // Collect necessary variables
        let src: Window = e.srcEvent.currentTarget;
        let scrollDistance: number = -1 * e.srcEvent.movementY;

        if (Math.abs(scrollDistance) > scrollTolerance) {scrollDistance = 0}

        // Scroll
        this._window.scrollBy(0, scrollDistance);
    }
}
