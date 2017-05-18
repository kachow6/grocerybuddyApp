import { Component } from '@angular/core';
import { Router} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
    moduleId: module.id,
    selector: 'gb-connect',
    templateUrl: 'connect.component.html',
    styleUrls: ['connect.component.css'],
})
export class ConnectComponent { 
    user: Observable<firebase.User>;

    constructor(public router: Router,
                public afAuth: AngularFireAuth) {
        this.user = afAuth.authState;
    }

    loginWithEmail(email: string, password: string) {
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
                .then(response => {
                    console.log("Logged In");
                    this.router.navigateByUrl('/main');
                })
                .catch(e => { console.log(e.message) });
        this.router.navigateByUrl('main');
    }

    loginWithGoogle() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
                .then(response => {
                    console.log("Logged In");
                    this.router.navigateByUrl('/main');
                })
                .catch(e => { console.log(e.message) });
    }

    // Isn't needed here
    // logout() {
    //     this.afAuth.auth.signOut()
    //             .catch(e => { console.log(e.message) });
    // }
}
