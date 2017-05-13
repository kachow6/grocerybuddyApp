
import { Component, OnInit } from '@angular/core';
import { BUDDY_QUOTES } from  './header.menu.buddyquotes';
import { BUDDY_PICS } from  './header.menu.buddypics';
import { UserService }      from '../user-service/user.service';
import { FridgeItem }     from '../user-service/user';
import { Router,
    NavigationEnd,
    NavigationStart }       from '@angular/router';

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
    readonly extWidth: number = 225;

    pageTitle: string;

    push     : number;
    bodyBg   : string;
    extended : boolean;
    //placeholder for items that will be expiring soon
    expiringItems: FridgeItem[];

    //States for the progress bar
    stateDanger: string = 'progress-bar-danger';
    stateWarning: string = 'progress-bar-warning';
    stateSuccess: string = 'progress-bar-success';
    itemState: string = '';
    //buddy quote index
    quoteIndex: number = Math.floor((Math.random() * BUDDY_QUOTES.length));
    buddyQuote: string = BUDDY_QUOTES[this.quoteIndex];
    //index for buddy pics
    picIndex: number = Math.floor((Math.random() * BUDDY_PICS.length));
    buddyPic: string = BUDDY_PICS[this.picIndex];

    //pulls expiring items out of user's fridge items
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
    //Pulls amount of expiring items in fridge
    notificationAmount(list: FridgeItem[]): number {
        let amount = 0;
        amount = list.length;
        return amount;
    }

    // CONSTRUCTOR.
    // Set up the HeaderComponent class and inject all the necessary services.
    constructor(private router: Router,
                private userService: UserService) {
            this.expiringItems = userService.getFridge();
    }

    openNav(): void {
        this.push     = this.extWidth;
        this.bodyBg  = 'rgba(0, 0, 0, 0.8)';
    }

    closeNav(): void {
        this.push     = 0;
        this.bodyBg  = 'white';
    }

    ngOnInit() {
        this.pageTitle = 'Grocery Buddy';
        this.closeNav();
    }
    //changes buddy quotes based on incrementing index
    changeQuote(): void {
        let number1 = this.quoteIndex;
        this.buddyQuote = BUDDY_QUOTES[number1];
        this.quoteIndex = Math.floor((Math.random() * BUDDY_QUOTES.length));
        let number2= this.quoteIndex;
        while (number1 === number2) {
            number2=Math.floor((Math.random() * BUDDY_QUOTES.length));
        }
        this.quoteIndex = number2;
    }
    //changes buddy pictures randomly on click
    changeBuddy(): void {
        let number1 = this.picIndex;
        this.buddyPic = BUDDY_PICS[number1];
        this.picIndex = Math.floor((Math.random() * BUDDY_PICS.length));
        let number2= this.picIndex;
        while (number1 === number2) {
            number2=Math.floor((Math.random() * BUDDY_PICS.length));
        }
        this.picIndex = number2;
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

    //Link to move to fridge for notification modal
    moveToFridge(){
        this.router.navigateByUrl('/fridge')
    }
}


