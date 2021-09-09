import { Component, OnInit, NgZone } from '@angular/core';
import { ServiceService } from '../service.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Geolocation } from '@capacitor/geolocation';
declare const google: any;

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {
coords = [];
data: any;
latitude: number;
longitude: number;
lat1: number;
long1: number;
address;
date = [];
  constructor(public service: ServiceService,
    public firestore: AngularFirestore,
    public afAuth: AngularFireAuth,
    private ngZone: NgZone) {

    this.service.getCoords().then((items: any)=>{
      console.log(items);
       this.coords = items;

    });
  }

  ngOnInit() {
  }

  public locate() {
    this.service.getCoords().then((items: any)=>{
      this.coords = items;
          const geocoder = new google.maps.Geocoder();
          const latlng = new google.maps.LatLng(this.latitude, this.longitude);
          const request = {
            latLng: latlng
          };

          geocoder.geocode(request, (coords, status) => {
            if (status === google.maps.GeocoderStatus.OK ) {
              if (coords[0] != null) {
                this.ngZone.run(()=>{
                  this.latitude = coords[0].formatted_address;
                });
                console.log(this.latitude);
              } else {
                alert('No address available');
              }
            }
          });
        });



}

filterData(ev: any) {

  const val = ev.target.value;
  if (val && val.trim() !== '') {
    this.coords = this.coords.filter((item) => item.type.toLowerCase().indexOf(val.toLowerCase()) > -1);

  }
}
}
