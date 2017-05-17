import { Component } from '@angular/core';

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

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  loginWithEmail(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .catch(e => { console.log(e.message) });
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .catch(e => { console.log(e.message) });
  }

  logout() {
    this.afAuth.auth.signOut()
        .catch(e => { console.log(e.message) });
  }
}
