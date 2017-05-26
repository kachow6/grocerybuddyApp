import { Injectable, OnInit } from '@angular/core';

import {
         AngularFireDatabase,
         FirebaseListObservable
       }                                 from 'angularfire2/database';

@Injectable()
export class AutofillService implements OnInit {

    // Observer. This is used to 
    public autofillObserver: FirebaseListObservable<any[]>;

    constructor(private db: AngularFireDatabase) {}

    ngOnInit(): void {

    }

}
