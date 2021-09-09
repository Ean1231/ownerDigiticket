import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-manage-riders',
  templateUrl: './manage-riders.page.html',
  styleUrls: ['./manage-riders.page.scss'],
})
export class ManageRidersPage implements OnInit {
  users = [];
  data: any;
  constructor(public service: ServiceService,
    public firestore: AngularFirestore,
    public afAuth: AngularFireAuth)
   {
    this.service.getUsers().then((items: any)=>{
      console.log(items);
       this.users = items;

    });
  }

  delete(email){
    this.firestore.collection('users').doc(email).delete().then(() => {
      console.log('success');
    }).catch((error) =>{
      console.log('not Deleted');
    });
}

  ngOnInit() {
  }

}
