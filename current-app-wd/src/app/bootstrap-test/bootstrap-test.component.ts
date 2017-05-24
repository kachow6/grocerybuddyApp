import { Component } from '@angular/core';

import { AngularFireDatabase,
        FirebaseObjectObservable,
         FirebaseListObservable
       }                          from 'angularfire2/database';

const expiryDb: any = {
'Apple': '14.00',
'Asparagus': '5',
'Avocado': '3',
'Bacon': '7',
'Banana': '7.00',
'Beef': '1',
'Bell Peppers': '7.00',
'Blackberry': '2.00',
'Blueberry': '5.00',
'Broccoli': '7.00',
'Cabbage': '7.00',
'Cantalope': '3.00',
'Carrot': '28.00',
'Caulifower': '7',
'Celery': '21',
'Cheese': '14.00',
'Cherry': '5.00',
'Chicken': '1',
'Cilantro': '7',
'Collard Greens': '4.00',
'Corn': '5.00',
'Cucumber': '7',
'Eggs': '21.00',
'Figs': '5',
'Fresh Fish': '1',
'Garlic': '90.00',
'Ginger': '14',
'Grapes': '5.00',
'Green Beans': '5',
'Ham': '3.00',
'Japaleno': '7',
'Kale': '7.00',
'Kefir': '7.00',
'Lemon': '14.00',
'Lettuce': '7.00',
'Lime': '14',
'Milk': '5.00',
'Mushroom': '7.00',
'Olive Oil': '547.00',
'Onion': '28.00',
'Orange': '7.00',
'Parsley': '7.00',
'Pea': '3.00',
'Peach': '3.00',
'Pear': '4.00',
'Pineapple': '5.00',
'Plum': '3.00',
'Pork Chop': '3.00',
'Potato': '21.00',
'Raspberry': '3.00',
'Spinach': '5.00',
'Squash': '30',
'Strawberry': '3.00',
'Sweet Potato': '21.00',
'Tangerine': '7.00',
'Tomato': '7.00',
'Watermelon': '7.00',
'Yogurt': '7.00',
'Zucchini': '3',
'Parsnips': '30',
'Pumpkin': '60',
'Boxed Cereal (Unopened)': '180',
'Boxed Cereal (Opened)': '120'
}

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'gb-bootstrap-test',
  templateUrl: 'bootstrap-test.component.html',
  styleUrls: ['bootstrap-test.component.css'],
})
export class BootstrapTestComponent {

  constructor(public db: AngularFireDatabase) {
    this.db.object('expiryEstimate').set(expiryDb);
  }
}
