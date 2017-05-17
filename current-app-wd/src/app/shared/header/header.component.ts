
import { Component, OnInit }     from '@angular/core';
import { BUDDY_QUOTES }          from  './header.menu.buddyquotes';
import { BUDDY_PICS }            from  './header.menu.buddypics';
import { UserService }           from '../user-service/user.service';
import { FridgeItem }            from '../user-service/user';
import { Router,
    NavigationEnd,
    NavigationStart }            from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

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

    // Page Display Variables
    pageTitle: string;  // Tracks the title of the current page.
    push     : number;  // Used to push the extending nav bar out from the side.
    bodyBg   : string;  // Color of div that covers page when nav bar pops out.
    extended : boolean; // Whether or not the nav bar is extended.

    // List of soon-to-expire items. Data-bound to the notifications UI element.
    expiringItems: FridgeItem[];

    //buddy quote index
    quoteIndex: number = Math.floor((Math.random() * BUDDY_QUOTES.length));
    buddyQuote: string = BUDDY_QUOTES[this.quoteIndex];

    //index for buddy pics
    picIndex: number = Math.floor((Math.random() * BUDDY_PICS.length));
    buddyPic: string = BUDDY_PICS[this.picIndex];

    user: Observable<firebase.User>;

    // CONSTRUCTOR & INITIALIZATION.
    // Used to inject all the necessary services and perform basic wiring.
    constructor(private router: Router,
                private userService: UserService,
                public afAuth: AngularFireAuth) {}

    // OnInit method. Angular's recommended place to perform initialization.
    ngOnInit() {
        this.user = this.afAuth.authState;

        this.pageTitle = 'Grocery Buddy';
        this.closeNav();
        this.expiringItems = this.userService.getFridge();
    }

    // EXPIRY NOTIFICATION METHODS
    // Pulls expiring items out of user's fridge items.
    pullExpiring(list: FridgeItem[]): FridgeItem[] {
        let templist: FridgeItem[] = [];
        for (let fridgeItem of list) {
            let exp = fridgeItem.expiration / fridgeItem.maxAge;

            if (exp < 0.33 && exp > 0) {
                templist.push(fridgeItem);
            }
        }
        return templist;
    }

    // Pulls amount of expiring items in fridge.
    notificationAmount(list: FridgeItem[]): number {
        let amount = 0;
        amount = list.length;
        return amount;
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
    }
}
