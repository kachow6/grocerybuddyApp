import { Component, OnInit } from '@angular/core';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'gb-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class HeaderComponent {
	readonly extWidth: number = 225;

	push     : number;
	bodyBg   : string;
	extended : boolean;

	openNav(): void {
		this.push 	= this.extWidth;
		this.bodyBg  = "rgba(0, 0, 0, 0.8)";
	}

	closeNav(): void {
		this.push 	= 0;
		this.bodyBg  = "white";
	}

	ngOnInit() {
		this.closeNav();
	}
}