import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  constructor(
      public afAuth: AngularFireAuth,
      public router: Router,
      private firebase: AngularFireDatabase
  )
  {}

  peopleList:AngularFireList<any>;
  companyList:AngularFireList<any>;


  gettenders() {
    this.peopleList = this.firebase.list('people');
    return this.peopleList.snapshotChanges();
  }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
          .signInWithPopup(provider)
          .then(res => {
            resolve(res);
          });
    });
  }

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
          .then(res => {
            resolve(res);
          }, err => reject(err));
    });
  }

  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
          .then(res => {
            resolve(res);
          }, err => reject(err));
    });
  }


  getLoggedInUser() {
    return this.afAuth.authState;
  }

  doLogout() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        this.afAuth.auth.signOut();
        resolve();
      } else {
        reject();
      }
    });
  }

}
