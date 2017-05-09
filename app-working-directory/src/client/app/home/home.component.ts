import { Component, OnInit, Input, Output } from '@angular/core';

//Class for setting the name for list objects.
export class CurrentList {
  name: String;

  constructor(name: String) {
    this.name = name;
  }
}

//Array that contains the lists on homepage.
const HOME_LISTS: CurrentList[] = [

  new CurrentList('Kevins Chow Cola'),
  new CurrentList('Birthday List')
];

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'gb-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent {

  //Instantiating the array object.
  myList: CurrentList[] = HOME_LISTS;
  nameInput: String = "";
  // new listName: String;

  addList():void {
    if(this.nameInput.length > 0) {}
      this.myList.push(new CurrentList(this.nameInput));
      this.nameInput = '';
    }
  }
