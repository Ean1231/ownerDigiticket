import { Component, ElementRef, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ServiceService } from '../service.service';
import { Geolocation } from '@capacitor/geolocation';
declare const google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('map', { read: ElementRef, static: false }) mapElement: ElementRef;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();

  data: any;
  driverPosition = [];
  coords =[];
  marker: any;
  infoWindows: any = [];
  latitude: number;
  longitude: number;
  lat1: number;
  long1: number;
  zoom: any;
  map: any;

  constructor(public afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    public service: ServiceService)
  {

      this.service.getCoords().then((items: any)=>{
        console.log(items , 'coords');
        this.coords = items;
        this.latitude = items[0].latitude; //pick up
        this.longitude = items[0].longitude; //pick up

        console.log(this.latitude);
        console.log(this.longitude);


          this.directionsService.route({
          origin: ''+this.latitude+','+this.longitude,
          destination: ''+items[0].lat1+','+items[0].long1,
          travelMode: 'DRIVING'
        }, (response, status) => {
          if (status === 'OK') {
            this.directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
   });




     setTimeout(() => {
      this.myMap();
    }, 5000);

    this.service.getdrivers().then((items: any)=>{

      console.log(items);
      this.driverPosition = items;
    });

    // this.service.getCoords().then((items: any) => {
    //   console.log(items);
    // this.coords = items;
    // });

  }

  myMap() {
    const coords = new google.maps.LatLng(this.latitude,this.longitude);
    const mapOption={
      center:coords,
      zoom:11,
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement,mapOption);
    this.directionsDisplay.setMap(this.map);

    // this.marker = new google.maps.Marker({
    //   position: new google.maps.LatLng(-34.0458, 18.6194),
    //   coords,
    //   // icon: '',
    // });

  }
  }
