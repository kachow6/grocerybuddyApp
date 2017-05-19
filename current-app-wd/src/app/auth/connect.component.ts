import { Component         } from '@angular/core';
import { Router            } from '@angular/router';

import { Observable        } from 'rxjs/Observable';
import { AngularFireAuth   } from 'angularfire2/auth';
import * as firebase         from 'firebase/app';

@Component({
    moduleId: module.id,
    selector: 'gb-connect',
    templateUrl: 'connect.component.html',
    styleUrls: ['connect.component.css'],
})
export class ConnectComponent { 
    // Initializes user object
    user: Observable<firebase.User>;

    //Error Messages
    incorrectPassMsg: string = "";

    // CONSTRUCTOR & INITIALIZATION.
    // Used to inject all the necessary services and perform basic wiring.
    constructor(public router: Router,
                public afAuth: AngularFireAuth) {
        this.user = afAuth.authState;
    }

    // Method for logging in using an account's email and password
    loginWithEmail(email: string, password: string) {
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
                .then(response => {
                    console.log("Logged In");
                    this.router.navigateByUrl('/main');
                })
                .catch(e => { 
                    console.log(e.message) 
                    // this.eMessage = e.message;
                    // this.incorrectPassMsg = this.eMessage;
                    // console.log(this.incorrectPassMsg);
                    this.incorrectPassMsg = e.message;
                });
        this.router.navigateByUrl('main');
    }

    // Method for logging in with Google account
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
