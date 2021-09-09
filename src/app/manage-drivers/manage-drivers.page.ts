import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-manage-drivers',
  templateUrl: './manage-drivers.page.html',
  styleUrls: ['./manage-drivers.page.scss'],
})
export class ManageDriversPage implements OnInit {
  drivers = [];
  displayName;
  carModel;
  carNumber;
  color;
  email;
  status;
  phoneNumber;
  showUpdatebtn = false;
  editId;
  driver: any;
  data: any;
  approved: boolean;
  constructor(public service: ServiceService,
    public firestore: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public alertcontroller: AlertController
    ) {
    this.service.getDrivers().then((items: any)=>{
       console.log(items);
        this.drivers = items;

     });
  }

  ngOnInit() {

  }



  approveDriver(email) {
    const id = this.firestore.createId();
    this.firestore.collection('DriverAproval')
      .doc(email)
      .set({
        approved: true,
      })

      .catch((error) => {
        console.log(error);
      });
  }

  edit(email){
  this.firestore.collection('regDrivers').doc(this.email).update(email).then(()=>{
    console.log('update works');
  });
    }


    delete(email){
      this.firestore.collection('driverPosition').doc(email).delete().then(() => {
        console.log('success');
      }).catch((error) =>{
        console.log('not Deleted');
      });
  }

  details(data){
    console.log(data);
    this.router.navigateByUrl('/driver-profile', {state:data});
  }

  async presentAlert(email) {
    const alert = await this.alertcontroller.create({
      cssClass: 'my-custom-class',
      header: 'Attention User',
      subHeader: 'Confirm Logout',
      message: 'delete this Driver?',
      buttons: [ {
        text: 'ok',
        handler: () => {
          this.delete(email);
        }
      },
      {
        text: 'Cancel',
        handler: () => {
          this.router.navigateByUrl('/manage-drivers');
        }
      }]

    });

    await alert.present();
  }

}
