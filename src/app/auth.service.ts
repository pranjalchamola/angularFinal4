import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) { 
    this.user = firebaseAuth.authState;
   }

 signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }
  
  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
    
  }
  
  logout() {
    this.firebaseAuth.auth.signOut().then(value => {
      console.log('logout succesful');
    })
    .catch(err => {
      console.log('not succesful',err.message);
    });
  }
  
  
}
