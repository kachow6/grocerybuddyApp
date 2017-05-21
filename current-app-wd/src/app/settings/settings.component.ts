import { Component, OnInit            } from '@angular/core';
import { UserService                  } from '../shared/user-service/user.service';
import { User                         } from '../shared/user-service/user';
import { Router                       } from '@angular/router';
import { AngularFireDatabase,
         FirebaseListObservable,
         FirebaseObjectObservable,    } from 'angularfire2/database';
import { Observable                   } from 'rxjs/Observable';
import { AngularFireAuth              } from 'angularfire2/auth';
import * as firebase                    from 'firebase/app';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'gb-settings',
    templateUrl: 'settings.component.html',
    styleUrls: ['settings.component.css'],
})

export class SettingsComponent {
    
    // Variables for the Accounts form
    passwordcomplex        : boolean;
    passwordconfirmed      : boolean = false;
    passwordmessage        : string;
    confirmpasswordmessage : string ='';
    userpassword           : string;
    userconfirmpassword    : string ='';

    // variables for user inputs
    nameInput          : string = "";
    emailInput         : string = "";
    emailValid         : boolean;
    invalidEmailMsg    : string = "";
    nameChangeSuccess  : string = "";
    nameChangeError    : string = "";
    accountOverwrite   : string = "";
    googleMessage      : string = "";

    // User ID and Firebase variables
    userId      : string = 'user-1';
    user        : Observable<firebase.User>;
    userName    : string;

    // CONSTRUCTOR & INITIALIZATION.
    // Used to inject all the necessary services and perform basic wiring.
    constructor(private router: Router,
                private userService: UserService,
                public afAuth: AngularFireAuth,
                public db: AngularFireDatabase) {}

    // // Method for debugging user account information
    // debug():void {
    //     this.user = this.afAuth.authState; 
    //     this.user.take(1).subscribe(userSnap => {
    //         console.log(userSnap);
    //     }) 

    // }

    ngOnInit() {
        // Testing to check for a user's sign in method.
        console.log(this.afAuth.auth.currentUser.providerId);
        console.log(this.afAuth.auth.currentUser.providerData["0"].providerId);
    }  

    // Detects if user is signd in with a google account and disableds account changes
    googleAccount(): boolean{
        let googleAcc = false;
        if (this.afAuth.auth.currentUser.providerData["0"].providerId == "google.com") {
            googleAcc = true;
            this.googleMessage = "Account changes are disabled for Google accounts";
        }
        return googleAcc;
    }

    // Method for changing a user's name
    changeUserName(): void {
        if (this.nameInput.length > 0) {
            this.afAuth.auth.currentUser.updateProfile(
                {displayName: this.nameInput,
                 photoURL: ''});
            this.nameChangeSuccess = "Name Change successful!";
            setTimeout(() => {
                    this.nameChangeSuccess = "";}, 2000);
        } else {
            this.nameChangeError = "Name field must be filled!";
        }
    }

    //Method for checking if the password is complex
    checkComplexity(userpass: string): void {

        let hasUpperCase = /[A-Z]/.test(userpass);
        let hasLowerCase = /[a-z]/.test(userpass);
        let hasNumbers = /\d/.test(userpass);
        let hasNonalphas = /\W/.test(userpass);

        if (hasUpperCase && hasLowerCase && hasNumbers && hasNonalphas) {
            this.passwordcomplex = true;
        } else {
            this.userpassword = null;
            this.userconfirmpassword = null;
        }
    }

    //Method for making sure both passwords are the same
    confirmPassword(pass1: string, pass2: string, ignoreblank: boolean): void {

        if(ignoreblank === true && pass2.length === 0) {
            this.confirmpasswordmessage = '';
        }

        if(pass1 === pass2 && pass1.length > 0) {
            this.confirmpasswordmessage = '';
            this.passwordconfirmed = true;
        } else {
            this.confirmpasswordmessage = 'This password must match the one above'
            this.userpassword = null;
            this.userconfirmpassword = null;
        }
    }

    //Method for clearing the account fields.
    clearFields(): void {
        this.nameInput = "";
        this.emailInput = "";
        this.userpassword = "";
        this.userconfirmpassword = "";
    }

    // Method for changing user account name and password if conditions are met
    changePassword():void {
         // Validating the new name and password
         if (this.checkComplexity && this.confirmPassword) {
                this.afAuth.auth.currentUser.updatePassword(this.userpassword);

                // Signs the user out and returns them to the Sign-in page
                this.accountOverwrite = "ACCOUNT OVERWRITE SUCCESSFUL"
                this.afAuth.auth.signOut();
                setTimeout(() => {
                    this.router.navigateByUrl('login');}, 2000);
                }
        
    }

    // // A function for debugging account information
    // debug() {
    //     this.afAuth.authState.subscribe(userSnap => {
    //         console.log(userSnap);
    //     });
    // }
}