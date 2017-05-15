import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  checkComplexity(userpass: string): void {

    let hasUpperCase = /[A-Z]/.test(userpass);
    let hasLowerCase = /[a-z]/.test(userpass);
    let hasNumbers = /\d/.test(userpass);
    let hasNonalphas = /\W/.test(userpass);

    if (hasUpperCase && hasLowerCase && hasNumbers && hasNonalphas) {
      this.passwordmessage = "";
      this.passwordcomplex = true;
    } else {
      this.passwordmessage = "Must contain at least one uppercase and lower case letter as well as a number and a special character (ie. $, #, !, %)";
      this.userpassword = null;
    }
  }

  confirmPassword(pass1: string, pass2: string, ignoreblank: boolean): void {

    if(ignoreblank==true && pass2.length==0) {
      this.confirmpasswordmessage = "";
    }

    if(pass1 == pass2) {
      this.confirmpasswordmessage = "";
      this.passwordconfirmed = true;
    } else {
      this.confirmpasswordmessage = "This password must match the one above"
      this.userconfirmpassword = null;
    }
  }
}
