import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

import { CbuDataService } from './cbu-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataPulled = false;

  getData(): any {

    firebase.initializeApp({
      apiKey: "AIzaSyA52UpzQ_rktmwa8huwb_RVVMndMdUlZBE",
      authDomain: "cbusmartmap.firebaseapp.com",
      databaseURL: "https://cbusmartmap.firebaseio.com",
      projectId: "cbusmartmap",
      storageBucket: "cbusmartmap.appspot.com",
      messagingSenderId: "11156238866"
    });

    //Initialize cloud firestore through firebase
    const db = firebase.firestore();

    //Disable depricated features
    db.settings({
      timestampsInSnapshots: true
    });

    const _this = this;
    const queryData = [];

   db.collection("buildings").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      //console.log(`${doc.id} => ${doc.data()}`);
      const tempDoc: any = doc.data();
      tempDoc.uniqueID = doc.id;
      queryData.push(tempDoc);
    });
    _this.cbuDataService.buildings = queryData;
    _this.dataPulled = true;
    console.log(queryData);
   });

  }


  constructor(private cbuDataService: CbuDataService) {}

  ngOnInit() {
    this.getData();
  }
}
