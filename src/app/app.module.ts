 import { NgModule } from '@angular/core';
 import { BrowserModule } from '@angular/platform-browser';
 import { RouteReuseStrategy } from '@angular/router';

 import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';

 import { AppComponent } from './app.component';
 import { AppRoutingModule } from './app-routing.module';
 import firebase from 'firebase/app';
 import { AngularFireModule } from '@angular/fire';
 import { AngularFirestoreModule } from '@angular/fire/firestore/';
 import { AngularFireStorageModule } from '@angular/fire/storage';
 import { AngularFireAuthModule } from '@angular/fire/auth';
 import {environment} from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
