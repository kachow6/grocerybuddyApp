import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

/**
 * This class represents the lazy loaded RegisterComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'gb-register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css'],
})
export class RegisterComponent {
    passwordcomplex: boolean;
    passwordconfirmed: boolean;
    passwordmessage: string;
    confirmpasswordmessage: string ='';
    userpassword: string;
    userconfirmpassword: string ='';

    user: Observable<firebase.User>;

    constructor(public router: Router,
                public afAuth: AngularFireAuth) {
        this.user = afAuth.authState;
    }

    checkComplexity(userpass: string): boolean {
        let hasUpperCase = /[A-Z]/g.test(userpass);
        let hasLowerCase = /[a-z]/g.test(userpass);
        let hasNumbers = /\d/g.test(userpass);
        let hasNonAlphas = /\W/g.test(userpass);

        if (hasUpperCase && hasLowerCase && hasNumbers && hasNonAlphas) {
            this.passwordmessage = "";
            this.passwordcomplex = true;
            return true;
        } else {
            this.passwordmessage = "Must contain at least one uppercase and lower case letter as well as a number and a special character (ie. $, #, !, %)";
            // this.userpassword = null;
            return false;
        }
    }

    confirmPassword(pass1: string, pass2: string, ignoreblank: boolean): boolean {

        if(ignoreblank == true && pass2.length == 0) {
            this.confirmpasswordmessage = "";
        }

        if(pass1 == pass2) {
            this.confirmpasswordmessage = "";
            this.passwordconfirmed = true;
            return true;
        } else {
            this.confirmpasswordmessage = "This password must match the one above"
            // this.userconfirmpassword = null;
            return false;
        }
    }

    signUpWithEmail(name: string,
                    email: string,
                    password: string,
                    confirmPassword: string) {

        // Double-check that the user has the right complexity requirements.
        if (this.checkComplexity(password)
         && this.confirmPassword(password, confirmPassword, true)) {

            // Run create user request.
            this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                /* If it's successful, update the user authentication record
                // to include their display name. */
                .then(user => {
                    user.updateProfile({ displayName: name });
                    this.router.navigateByUrl('/main');
                })
                // Catch any errors and log them to the console.
                .catch(e => console.log(e.message));
        }
    }
}
