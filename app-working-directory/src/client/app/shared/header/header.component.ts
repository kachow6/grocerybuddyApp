
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

    expiringItems: FridgeItem[];

    //States for the progress bar
    stateDanger: string = 'progress-bar-danger';
    stateWarning: string = 'progress-bar-warning';
    stateSuccess: string = 'progress-bar-success';
    itemState: string = '';

    buddyQuote: string = BUDDY_QUOTES[0];
    quoteIndex: number = 0;

    picIndex: number = Math.floor((Math.random() * BUDDY_PICS.length));
    buddyPic: string = BUDDY_PICS[this.picIndex];

    pullExpiring(list: FridgeItem[]): FridgeItem[] {
        let templist: FridgeItem[] = [];
        for (let fridgeItem of list) {
            let exp = fridgeItem.expiration / fridgeItem.maxAge;

            if (exp < 0.33) {
                templist.push(fridgeItem);
            }
        }
        return templist;
    }

    // CONSTRUCTOR.
    // Set up the HeaderComponent class and inject all the necessary services.
    constructor(private router: Router,
                private userService: UserService) {
            this.expiringItems = userService.getFridge();

        // Updates this.pageTitle based on the URL.
        router.events.subscribe((navEvent) => {
            if (navEvent instanceof NavigationEnd) {

                console.log("Nav: " + navEvent.url)

                // Hacky workaround. Bruce Link would hate me.
                // Will try to figure out how to move data through the router
                // later
                switch (navEvent.url) {
                case '/fridge':
                    this.pageTitle = 'Fridge';
                    break;
                case '/list':
                    this.pageTitle = 'List';
                    break;
                case '/settings':
                    this.pageTitle = 'Settings';
                    break;
                case '/affiliates':
                    this.pageTitle = 'Affiliates';
                    break;
                default:
                    this.pageTitle = 'Grocery Buddy'
                }

            } else if (navEvent instanceof NavigationStart ) {

                // Make sure currentList isn't null
                if ((userService.getCurrentList() === null)
                 && (navEvent.url === '/list')) {
                    this.router.navigateByUrl('');
                }
            }
        });
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

    changeQuote(): void {
        this.buddyQuote = BUDDY_QUOTES[this.quoteIndex];
        this.quoteIndex++;
        if (this.quoteIndex === BUDDY_QUOTES.length) {
            this.quoteIndex = 0;
        }
    }

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

}


