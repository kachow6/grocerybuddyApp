import { Component, OnInit } from '@angular/core';
import { BUDDY_QUOTES } from  './header.menu.buddyquotes';
import { BUDDY_PICS } from  './header.menu.buddypics';

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

    push     : number;
    bodyBg   : string;
    extended : boolean;

    buddyQuote: string;
    quoteIndex: number = 0;

    picIndex: number = Math.floor((Math.random() * BUDDY_PICS.length));
    buddyPic: string = BUDDY_PICS[this.picIndex];

    openNav(): void {
        this.push     = this.extWidth;
        this.bodyBg  = 'rgba(0, 0, 0, 0.8)';
    }

    closeNav(): void {
        this.push     = 0;
        this.bodyBg  = 'white';
    }

    ngOnInit() {
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
}