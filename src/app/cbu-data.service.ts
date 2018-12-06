import { Injectable } from "@angular/core";

import * as firebase from "firebase/app";
import "firebase/firestore";

@Injectable({
  providedIn: "root"
})
export class CbuDataService {
  buildings = [];
  faculty = [];

  tempBuilding: any;
  tempFaculty: any;

  currentHours;

  //Disable depricated features

  constructor() {}

  getMon(uid) {
    const db = firebase.firestore();
    const queryData = [];
    db.settings({
      timestampsInSnapshots: true
    });

    db.collection("officeHours")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          //console.log(`${doc.id} => ${doc.data()}`);
          const tempDoc: any = doc.data();
          tempDoc.uniqueID = doc.id;
          queryData.push(tempDoc);
          console.log("mon" + doc.data().monday);
        });
        //console.log(queryData);
      });

    return "9-5";
  }
  getTue(uid) {
    return "9-5";
  }

  getWed(uid) {
    return "9-5";
  }
  getThur(uid) {
    return "9-5";
  }
  getFri(uid) {
    return "9-5";
  }
}

export class Building {
  coordinates: any;
  description: any;
  photos: any[];
  subTitle: any;
  title: any;
  type: any;
}
