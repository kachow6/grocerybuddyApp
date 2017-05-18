
import { Component, OnInit            } from '@angular/core';
import { BUDDY_QUOTES                 } from  './header.menu.buddyquotes';
import { BUDDY_PICS                   } from  './header.menu.buddypics';
import { UserService                  } from '../user-service/user.service';
import { FridgeItem, DateTools        } from '../user-service/user';
import { Router,
         NavigationEnd,
         NavigationStart              } from '@angular/router';
import { AngularFireDatabase,
         FirebaseListObservable,
         FirebaseObjectObservable,    } from 'angularfire2/database';
import { Observable                   } from 'rxjs/Observable';
import { AngularFireAuth              } from 'angularfire2/auth';
import * as firebase                    from 'firebase/app';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'gb-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class HeaderComponent implements OnInit {

    // States for the progress bar
    readonly stateDanger  : string = 'progress-bar-danger';
    readonly stateWarning : string = 'progress-bar-warning';
    readonly stateSuccess : string = 'progress-bar-success';

    readonly today        : number = DateTools.getDays(new Date());

    // Page Display Variables
    pageTitle: string;  // Tracks the title of the current page.
    push     : number;  // Used to push the extending nav bar out from the side.
    bodyBg   : string;  // Color of div that covers page when nav bar pops out.
    extended : boolean; // Whether or not the nav bar is extended.

    // List of soon-to-expire items. Data-bound to the notifications UI element.
    expiringItems: any[] = [];
    numExpiring  : number = 0;

    //buddy quote index
    quoteIndex: number = Math.floor((Math.random() * BUDDY_QUOTES.length));
    buddyQuote: string = BUDDY_QUOTES[this.quoteIndex];

    //index for buddy pics
    picIndex: number = Math.floor((Math.random() * BUDDY_PICS.length));
    buddyPic: string = BUDDY_PICS[this.picIndex];

    // User ID and Firebase variables
    userId      : string = 'user-1';
    user        : Observable<firebase.User>;
    userName    : string;
    fridgeList$ : FirebaseListObservable<any[]>; 

    // CONSTRUCTOR & INITIALIZATION.
    // Used to inject all the necessary services and perform basic wiring.
    constructor(private router: Router,
                private userService: UserService,
                public afAuth: AngularFireAuth,
                public db: AngularFireDatabase) {}

    // OnInit method. Angular's recommended place to perform initialization.
    ngOnInit() {
        this.closeNav();                     // Closes the nav bar

        // Grabs and saves the user's Name off database.
        this.user = this.afAuth.authState;
        this.user.subscribe(userSnap => {
            if(!userSnap) {
                this.userName = 'Buddy';
            } else {
                this.userName = userSnap.displayName;
            }
        });

        // Sets the current page title depending on the router.url location
        this.router.events.subscribe((snap: any) => {
            let currentPage = snap.urlAfterRedirects;
            // If User is on HOME PAGE
            if (currentPage ===  '/main') {
                this.pageTitle = 'Grocery Buddy';}
            // IF the user is on FRIDGE page
            else if (currentPage === '/main/fridge') {
                this.pageTitle = 'Fridge';}
            // If the user is on SETTINGS page
            else if (currentPage === '/main/settings') {
                this.pageTitle = 'Settings';}
            // If the user is on AFFILIATES page
            else if (currentPage === '/main/affiliates') {
                this.pageTitle = 'Affiliates';}
            // If the user is in a LIST
            else if (currentPage === '/main/list') {
                // Returns the user to HOME page if no list has been selected
                if (!this.userService.getCurrentList()) {
                    this.router.navigateByUrl('/main');}
                else {
                   // Sends User to selected LIST page
                   let listKey = this.userService.getCurrentList();
                                 this.db.object('/homeList/' + 
                                 this.userId + '/' +
                                 listKey).take(1).subscribe(snap => {
                                 this.pageTitle = snap.$value;
                                 });
                }
            }
        });

        // Set up Firebase variables
        this.user = this.afAuth.authState;
        this.fridgeList$ = this.db.list('/fridgeList/' + this.userId);

        this.fridgeList$.subscribe(snap => {
            this.expiringItems = this.pullExpiring(snap);  
            this.numExpiring   = this.notificationAmount(this.expiringItems);  
        }); 
    }

    // EXPIRY NOTIFICATION METHODS
    // Pulls expiring items out of user's fridge items.
    // pullExpiringDep(list: FridgeItem[]): FridgeItem[] {
    //     let templist: FridgeItem[] = [];
    //     for (let fridgeItem of list) {
    //         let exp = fridgeItem.expiration / fridgeItem.maxAge;

    //         if (exp < 0.33 && exp > 0) {
    //             templist.push(fridgeItem);
    //         }
    //     }
    //     return templist;
    // }

    pullExpiring(list: any[]): any[] {
        let tempList: any[] = [];

        for (let item of list) {
            let exp = 1 - ((this.today - item.datePurchased) / item.shelfLife);

            if (exp < 0.33 && exp > 0) {
                item.expiration = exp;
                tempList.push(item);
            }
        }
        return tempList;
    }

    // Pulls amount of expiring items in fridge. **DON'T DELETE!**
    notificationAmount(list: any[]): number {
        let amount = 0;
        amount = list.length;
        return amount;
    }
    
    // Displays the amount of items nearing expiration
    notificationNumber(): void {
        let fridge = this.db.list('/fridgeList/' + this.userId);
        let countItemExpiring: number = 0;
        fridge.take(1).subscribe(datasnap => {
            for(let i of datasnap){
                if ((this.today - i.datePurchased) / i.shelfLife < 0.33) {
                    countItemExpiring++;
                }
            }
        });
        this.numExpiring = countItemExpiring;
    }

    // Method for calculating the expiration bar colour
    calculateExp(expiration: number): string {
        if (expiration < 0.33){
            return this.stateDanger;
        } else if (expiration >= 0.66){
            return this.stateSuccess;
        } else {
            return this.stateWarning;
        }
    }

    // BUDDY QUOTES & PICTURES
    //changes buddy quotes based on incrementing index
    changeQuote(): void {
        let number1 = this.quoteIndex;
        this.buddyQuote = BUDDY_QUOTES[number1];
        this.quoteIndex = Math.floor((Math.random() * BUDDY_QUOTES.length));
        let number2 = this.quoteIndex;
        while (number1 === number2) {
            number2 = Math.floor((Math.random() * BUDDY_QUOTES.length));
        }
        this.quoteIndex = number2;
    }

    //changes buddy pictures randomly on click
    changeBuddy(): void {
        
        let number1 = this.picIndex;
        this.buddyPic = BUDDY_PICS[number1];
        this.picIndex = Math.floor((Math.random() * BUDDY_PICS.length));
        let number2 = this.picIndex;
        while (number1 === number2) {
            number2 = Math.floor((Math.random() * BUDDY_PICS.length));
        }
        this.picIndex = number2;
    }

    // NAVIGATION METHODS
    // Link to move to fridge for notification modal
    moveToFridge(){
        this.router.navigateByUrl('/main/fridge')
    }

    // Opens Side Nav Bar (please excuse the magic numbers)
    openNav(): void {
        this.push    = 255;
        this.bodyBg  = 'rgba(0, 0, 0, 0.8)';
    }

    // Closes Side Nav Bar (please excuse the magic numbers)
    closeNav(): void {
        this.push    = 0;
        this.bodyBg  = 'white';
    }

    logout() {
        this.afAuth.auth.signOut();
        this.router.navigateByUrl('login');
    }
}
