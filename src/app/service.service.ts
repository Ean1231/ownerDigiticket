import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  data: any;
  driverPosition = [];
  coords = [];
  email;
  drivers = [];

  constructor(public auth: AngularFireAuth,
    public firestore: AngularFirestore,
    public afAuth: AngularFireAuth,) { }

  getdrivers(){
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('/driverPosition/').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
      });
    });
  }

  getCoords(){
    return new Promise((res, rej)=>{
      this.firestore.collection('userConfirmsRequest').valueChanges().subscribe((items: any) => {
        this.coords = items;
        console.log(items);
        res(this.coords) ;
        });
    });
  }

  promo(){
    return new Promise((res, rej)=>{
      this.firestore.collection('Promo codes').valueChanges().subscribe((items: any) => {
        this.coords = items;
        console.log(items);
        res(this.coords) ;
        });
    });
  }

  getUsers(){
    return new Promise((res, rej)=>{
      this.firestore.collection('users').valueChanges().subscribe((items: any) => {
        this.coords = items;
        console.log(items);
        res(this.coords) ;
        });
    });
  }

  getDrivers(){
    return new Promise((res, rej)=>{
      this.firestore.collection('driverPosition').valueChanges().subscribe((items: any) => {
        this.drivers = items;
        //console.log(items)
        res(this.drivers) ;
        });
    });
  }

  ggetCoords() {
    return new Promise((res, rej) => {
      this.afAuth.authState.subscribe((user) => {
        console.log('folder: user', user);
        if (user) {
          this.email = user.email;
          this.firestore
            .collection('userConfirmsRequest/')
            .doc(this.email)
            .valueChanges()
            .subscribe((items: any) => {
              res(items);
            });
        }
      });
    });
  }

}
