import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {environment} from "../environments/environment";
import { RouterModule } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      AngularFireAuthModule,
      AngularFireDatabaseModule,
      AngularFirestoreModule,
      AngularFireModule.initializeApp(environment.Firebaseconfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
