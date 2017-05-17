import { Component, OnInit, Input, Output }    from '@angular/core';
import { UserService }                         from '../shared/user-service/user.service';
import { ShoppingList, ShoppingItem }          from '../shared/user-service/user';
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
    userId: string = 'user-1';

    userAuth$:    Observable<firebase.User>;
    homeList$:    FirebaseListObservable<any[]>;

    // Constructor. Inject all necessary dependencies.
    constructor(
        public userService: UserService,
        public router: Router,
        public afAuth: AngularFireAuth,
        public db: AngularFireDatabase
        ) {}

    // Init. Initialize anything more complicated than basic wiring.
    ngOnInit() {
        this.userAuth$ = this.afAuth.authState;
        this.homeList$ = this.db.list('/homeList/' + this.userId);
        // console.log(this.fridgeList$.$ref.toJSON());

        this.myList = this.userService.getHome();

        // Firebase Objects Setup
        this.userAuth$ = this.afAuth.authState;

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

    //Method for moving into the user selected list
    selectList(key: string): void {
        this.userService.setCurrentList(key);
        this.router.navigateByUrl('/main/list');
    }

    
    // Rename List
    renameList(key: string): void {
        let newName = this.renameInput;

        if (newName.length > 0) {
            this.db.object('/homeList/' + this.userId + '/' + key).set(newName);
        }

        this.renameInput = '';
    }
    
    // Method for resetting items checked in the list.
    // resetList(list: ShoppingList): void {
      //   for(let i = 0; i < this.userService.getCurrentList().contents.length; i++) {
      //       this.userService.getCurrentList().contents[i].checked = false;
      // }
    // }

    resetList(key: string): void {
        let mySub = this.db.list('/shoppingList/' + key).subscribe(datasnap => {
            for(let i of datasnap) {
                let query = this.db.object('/shoppingList/' + this.userService.getCurrentList() + '/' + i.$key);
                query.update({'checked': false});
            }
            mySub.unsubscribe();
        });
    }

    // Method for copying a new instance of a user's shopping list
    copyList(key: string, name: string): void {
        //    console.log(key);
        //    console.log(name);
           let copyListKey = this.homeList$.push(name).key;
        //    console.log(copyListKey);
           let mySub = this.db.list('/shoppingList/' + key).subscribe(datasnap => {
           for(let i of datasnap){
                console.log(i);
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
    startItemDeleteTimer(key: string): any {
        return setTimeout(
                () => {
                    // Delete Shopping List
                    this.db.object('/shoppingList/' + key).remove();
                    // Delete Reference in Home List
                    this.db.object('/homeList/'
                                   + this.userId + '/' + key).remove();
                }, 3000
            );
    }

    // Cancel timer that deletes items.
    clearItemDeleteTimer(timer: any): null {
        timer = clearTimeout(timer);
        return null;
    }
}