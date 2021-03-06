import { Component } from '@angular/core';

import { AngularFireDatabase,
        FirebaseObjectObservable,
         FirebaseListObservable
       }                          from 'angularfire2/database';

const expiryDb: any = {
'anchovy_paste': '365',
'almonds': '30',
'apple': '14',
'apple_juice': '7',
'asparagus': '5',
'avocado': '3',
'apricot': '5',
'bbq_sauce': '180',
'barbecue_sauce': '180',
'bacon': '7',
'banana': '7',
'beef': '1',
'bell_peppers': '7',
'blackberry': '2',
'black_bean_sauce': '',
'blueberry': '5',
'brown_rice': '180',
'bouillon': '',
'broccoli': '7',
'cabbage': '7',
'calamari': '2',
'cantaloupe': '3',
'canola_oil': '365',
'capers': '365',
'carrot': '28',
'cashews': '30',
'caulifower': '7',
'celery': '21',
'cheese': '14',
'cherry': '5',
'chicken': '1',
'chutney': '30',
'cilantro': '7',
'coconut': '7',
'cod': '2',
'cocktail_sauce': '180',
'collard_greens': '4',
'corn': '5',
'cottage_cheese': '10',
'cream': '7',
'cream_cheese': '14',
'cucumber': '7',
'eggs': '21',
'fresh_fish': '1',
'figs': '5',
'fish_sauce': '',
'fresh_salmon': '2',
'fresh_cod': '2',
'fresh_halibut': '2',
'garlic': '90',
'ginger': '14',
'grapefruit': '7',
'grapes': '5',
'green_beans': '5',
'halibut': '2',
'ham': '3',
'hoisin_sauce': '365',
'horseradish': '95',
'japaleno': '7',
'kale': '7',
'kefir': '7',
'ketchup': '180',
'kiwi': '5',
'lamb_chops': '5',
'lasagna': '5',
'lemon': '14',
'lettuce': '7',
'lime': '14',
'lobster': '2',
'lychee': '5',
'macaroni_and_cheese': '5',
'mango': '4',
'milk': '5',
'multigrain_bread': '6',
'mushroom': '7',
'mussels': '2',
'mustard': '365',
'octopus': '2',
'olive_oil': '547',
'olives': '365',
'onion': '28',
'orange': '7',
'orange_juice': '5',
'oyster_sauce': '',
'oyster': '2',
'parsley': '7',
'pasta_sauce': '3',
'pea': '3',
'peach': '3',
'pear': '4',
'pesto': '3',
'pickles': '365',
'pineapple': '5',
'plum': '3',
'plum_sauce': '365',
'pork_chop': '3',
'potato': '21',
'raspberry': '3',
'red_onion': '28',
'relish': '365',
'salsa': '31',
'spinach': '5',
'spring_mix': '7',
'squash': '30',
'ribs': '5',
'salami': '5',
'salmon': '2',
'sausage': '2',
"shepard's_pie": '5',
'sour_cream': '14',
'strawberry': '3',
'sushi': '1',
'sweet_potato': '21',
'sweet_&_sour_sauce': '365',
'tangerine': '7',
'teriyaki_sauce': '365',
'tomato': '7',
'trout': '2',
'turkey': '2',
'watermelon': '7',
'white_bread': '6',
'white_rice': '',
'veal': '5',
'yogurt': '7',
'vinaigrette': '180',
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
