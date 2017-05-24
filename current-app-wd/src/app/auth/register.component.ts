import { Component          } from '@angular/core';
import { FormsModule        } from '@angular/forms';
import { Router             } from '@angular/router';

import { Observable         } from 'rxjs/Observable';
import { AngularFireAuth    } from 'angularfire2/auth';
import * as firebase          from 'firebase/app';

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

    // Variables for validation
    nameState           : boolean = false;
    emailState          : boolean = false;
    passwordcomplex     : boolean;
    passwordconfirmed   : boolean;
    passwordmessage     : string;

    // Error validation messages
    confirmNameMessage     : string ="";
    confirmEmailMessage    : string ="";
    confirmpasswordmessage : string ="";

    // User Inputs
    userName             : string = "";
    userEmail            : string = "";
    userpassword         : string = "";
    userconfirmpassword  : string ="";

    // Initializing user firebase object
    user: Observable<firebase.User>;

    // CONSTRUCTOR & INITIALIZATION.
    // Used to inject all the necessary services and perform basic wiring.
    constructor(public router: Router,
                public afAuth: AngularFireAuth) {
        this.user = afAuth.authState;
    }

    // Method for checking if a name has been entered
    checkName(): void {
        if (this.userName.length > 0) {
            this.nameState = true;
            this.confirmNameMessage = "";
        } else {
            this.nameState = false;
            this.confirmNameMessage = "Must enter a name";
        }
    }

    // Method for checking if a valid email has been entered
    checkEmail(): void {
        let regex = /[a-zA-Z\d]+@.+\..+$/;

        if (regex.test(this.userEmail)) {
            this.emailState = true;
            this.confirmEmailMessage = "";
        } else {
            this.emailState = false;
            this.confirmEmailMessage = "Must be a valid email";
        }
    }

    // Method for checking if the user's password is complex
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
            this.passwordmessage = "";
            // this.userpassword = null;
            return false;
        }
    }

    // Method for checking if the two passwords entered are the same
    confirmPassword(pass1: string, pass2: string, ignoreblank: boolean): boolean {

        if(ignoreblank == true && pass2.length == 0) {
        }

        if(pass1 == pass2) {
            this.passwordconfirmed = true;
            this.confirmpasswordmessage = "";
            return true;
        } else {
            this.confirmpasswordmessage = "This password must match the one above"
            // this.userconfirmpassword = null;
            return false;
        }
    }

    // Method for creating a user with the input information
    signUpWithEmail(name: string,
                    email: string,
                    password: string,
                    confirmPassword: string) {

        // Double-check that the user has the right complexity requirements.
        if (this.nameState 
         && this.emailState
         && this.checkComplexity(password)
         && this.confirmPassword(password, confirmPassword, true)) {

            // Run create user request.
            this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                /* If it's successful, update the user authentication record
                // to include their display name. */
                .then(user => {
                    // console.log(user);
                    // console.log("updating username");
                    user.updateProfile({ displayName: name })
                        .then(user => {
                        // console.log("routing...");
                        this.router.navigateByUrl('/main');
                });
                })
                // Catch any errors and log them to the console.
                .catch(e => console.log(e.message));
        }
    }
}
