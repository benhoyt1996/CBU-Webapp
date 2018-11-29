import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  dbQuery: any;
  ref: any;
  dataPulled = false;

  buildings: any = [];
  faculty: any = [];

  getData(): any {
    const config = {
      apiKey: "AIzaSyA52UpzQ_rktmwa8huwb_RVVMndMdUlZBE",
      authDomain: "cbusmartmap.firebaseapp.com",
      databaseURL: "https://cbusmartmap.firebaseio.com",
      projectId: "cbusmartmap",
      storageBucket: "cbusmartmap.appspot.com",
      messagingSenderId: "11156238866"
    };
    firebase.initializeApp(config);
    const database = firebase.database;

    this.ref = firebase.database().ref();

    console.log(firebase.app().name);
    console.log("TEST");

    const queryData = [];

    const _this = this;

    // this.ref.once("value", function(snap) {
    //   snap.forEach(function(item) {
    //     queryData.push(item.val());
    //   });
    //   _this.studentDataService.pushStudentData(queryData);
    //   _this.dataPulled = true;
    // });

  }


  constructor() {}

  ngOnInit() {
    this.getData();
  }
}
