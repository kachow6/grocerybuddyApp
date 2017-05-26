import { Component } from '@angular/core';

import { AngularFireDatabase,
        FirebaseObjectObservable,
         FirebaseListObservable
       }                          from 'angularfire2/database';

const expiryDb: any = {
'apple': '14.00',
'asparagus': '5',
'avocado': '3',
'bacon': '7',
'banana': '7.00',
'beef': '1',
'bell_peppers': '7.00',
'blackberry': '2.00',
'blueberry': '5.00',
'broccoli': '7.00',
'cabbage': '7.00',
'cantalope': '3.00',
'carrot': '28.00',
'caulifower': '7',
'celery': '21',
'cheese': '14.00',
'cherry': '5.00',
'chicken': '1',
'cilantro': '7',
'collard_greens': '4.00',
'corn': '5.00',
'cucumber': '7',
'eggs': '21.00',
'figs': '5',
'fresh_salmon': '2',
'fresh_cod': '2',
'fresh_halibut': '2',
'garlic': '90.00',
'ginger': '14',
'grapes': '5.00',
'green_beans': '5',
'ham': '3.00',
'japaleno': '7',
'kale': '7.00',
'kefir': '7.00',
'lemon': '14.00',
'lettuce': '7.00',
'lime': '14',
'mango': '4',
'milk': '5.00',
'multigrain bread': '6',
'mushroom': '7.00',
'olive_oil': '547.00',
'onion': '28.00',
'orange': '7.00',
'parsley': '7.00',
'pea': '3.00',
'peach': '3.00',
'pear': '4.00',
'pineapple': '5.00',
'plum': '3.00',
'pork_chop': '3.00',
'potato': '21.00',
'raspberry': '3.00',
'red_onion': '28',
'spinach': '5.00',
'spring_mix': '7',
'squash': '30',
'strawberry': '3.00',
'sweet_potato': '21.00',
'tangerine': '7.00',
'tomato': '7.00',
'watermelon': '7.00',
'white_bread': '6',
'yogurt': '7.00',
'zucchini': '3',
'parsnips': '30',
'pumpkin': '60',
'boxed_cereal_(unopened)': '180',
'boxed_cereal_(opened)': '120'}

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
