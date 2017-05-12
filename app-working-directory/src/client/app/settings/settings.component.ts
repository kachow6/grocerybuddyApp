import { Component }    from '@angular/core';
import { UserService }  from '../shared/user-service/user.service';
import { User }         from '../shared/user-service/user';
import { Router }       from '@angular/router';

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
    passwordcomplex: boolean;
    passwordconfirmed: boolean = false;
    passwordmessage: string;
    confirmpasswordmessage: string ='';
    userpassword: string;
    userconfirmpassword: string ='';
    nameInput: string = "";
    emailInput: string = "";

    constructor(private router: Router){

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
        }
    }

    //Method for making sure both passwords are the same
    confirmPassword(pass1: string, pass2: string, ignoreblank: boolean): void {

        if(ignoreblank === true && pass2.length === 0) {
            this.confirmpasswordmessage = '';
        }

        if(pass1 === pass2) {
            this.confirmpasswordmessage = '';
            this.passwordconfirmed = true;
        } else {
            this.confirmpasswordmessage = 'This password must match the one above'
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

    //A method for submitting the new account information
    changeInfo(): void {
        if(this.nameInput.length > 0 && this.emailInput.length > 0
            && this.passwordcomplex == true && this.passwordconfirmed == true) {

                UserService.user.username = this.nameInput;
                UserService.user.email = this.emailInput;
                UserService.user.password = this.userpassword;

                this.clearFields();
                console.log('ACCOUNT OVERWRITE SUCCESS');
                this.router.navigateByUrl('/');
        } else {
            console.log('ACCOUNT OVERWRITE FAILED');
        }
        console.log(UserService.user);
    }
}
