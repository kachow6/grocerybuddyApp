import { Injectable }          from '@angular/core';
import { CanActivate,
         Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot
                             } from '@angular/router';

import { Observable }          from 'rxjs/Observable';
import                              'rxjs/add/observable/of';
import                              'rxjs/add/operator/do';
import                              'rxjs/add/operator/delay';

import { AngularFireAuth }     from 'angularfire2/auth';
import * as firebase           from 'firebase/app';

@Injectable()
export class LoggedOutGuard implements CanActivate {
    private static _loggedIn: boolean = false;

    // Constructor
    constructor(public router: Router,
                public afAuth: AngularFireAuth) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        let nextUrl: string = route.url.toString();
        let curUrl: string = state.url.toString();

        console.log("next:    " + nextUrl);
        console.log("current: " + curUrl);

        return this.afAuth.authState                                    // Observable. Emits an event every time it receives a snapshot of data from the auth server.
                   .map(userSnap => {return !Boolean(userSnap) })        // Map all possible data snapshots to boolean.
                   // .do(userSnap => {console.log(!userSnap)})             // Print the result of that mapping.
                   .do(userSnap => {                                    // If the user is already logged in, redirect them to '/main'.
                       if (!userSnap) {this.router.navigateByUrl('main')};
                   });

    }
}
