import { Component } from '@angular/core';

import { AngularFireDatabase,
        FirebaseObjectObservable,
         FirebaseListObservable
       }                          from 'angularfire2/database';

const expiryDb: any = {
'almonds': '30.00',
'apple': '14.00',
'asparagus': '5.00',
'avocado': '3.00',
'bacon': '7.00',
'banana': '7.00',
'beef': '1.00',
'bell_peppers': '7.00',
'blackberry': '2.00',
'blueberry': '5.00',
'broccoli': '7.00',
'brown_rice': '180.00',
'cabbage': '7.00',
'calamari': '2.00',
'cantalope': '3.00',
'carrot': '28.00',
'cashews': '30.00',
'caulifower': '7.00',
'celery': '21.00',
'cheese': '14.00',
'cherry': '5.00',
'chicken': '1.00',
'cilantro': '7.00',
'coconut': '7.00',
'cod': '2.00',
'collard_greens': '4.00',
'corn': '5.00',
'cottage_cheese': '10.00',
'cream': '7.00',
'cream_cheese': '14.00',
'cucumber': '7.00',
'eggs': '21.00',
'fresh_fish': '1.00',
'figs': '5.00',
'garlic': '90.00',
'ginger': '14.00',
'grapes': '5.00',
'green_beans': '5.00',
'halibut': '2.00',
'ham': '3.00',
'japaleno': '7.00',
'kale': '7.00',
'kefir': '7.00',
'lamb_chops': '5.00',
'lasagna': '5.00',
'lemon': '14.00',
'lettuce': '7.00',
'milk': '5.00',
'lime': '14.00',
'lobster': '2.00',
'macaroni_and_cheese': '5.00',
'mango': '4.00',
'multigrain_bread': '6.00',
'mushroom': '7.00',
'mussels': '2.00',
'octopus': '2.00',
'olive_oil': '547.00',
'onion': '28.00',
'orange': '7.00',
'oyster': '2.00',
'parsley': '7.00',
'pea': '3.00',
'peach': '3.00',
'pear': '4.00',
'pineapple': '5.00',
'plum': '3.00',
'pork_chops': '3.00',
'potato': '21.00',
'raspberry': '3.00',
'spinach': '5.00',
'squash': '30.00',
'red_onion': '28.00',
'ribs': '5.00',
'salami': '5.00',
'salmon': '2.00',
'sausage': '2.00',
"shepard's_pie": '5.00',
'spring_mix': '7.00',
'sour_cream': '14.00',
'strawberry': '3.00',
'sushi': '1.00',
'sweet_potato': '21.00',
'tangerine': '7.00',
'tomato': '7.00',
'trout': '2.00',
'turkey': '2.00',
'watermelon': '7.00',
'white_bread': '6.00',
'white_rice': '',
'veal': '5.00',
'yogurt': '7.00',
'zucchini': '3.00',
'parsnips': '30.00',
'pumpkin': '60.00',
'boxed_cereal_(unopened)': '180.00',
'boxed_cereal_(opened)': '120.00'}

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
