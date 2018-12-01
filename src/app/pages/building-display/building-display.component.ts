import { Component, OnInit, Input } from "@angular/core";

import { CbuDataService } from "../../cbu-data.service";
import { Building } from "../../cbu-data.service";

import * as firebase from "firebase/app";
import "firebase/firestore";
import { defineBase } from "@angular/core/src/render3";

@Component({
  selector: "app-building-display",
  templateUrl: "./building-display.component.html",
  styleUrls: ["./building-display.component.css"]
})
export class BuildingDisplayComponent implements OnInit {
  building: any;
  buildingTitle: any;
  buildingSubTitle: any;
  buildingDesc: any;
  buildingUID: any;

  newBuildingTitle: any;
  newBuildingSubTitle: any;
  newBuildingDesc: any;

  getData(): void {}

  saveData(): void {
    // Initialize cloud firestore through firebase
    const db = firebase.firestore();

    // Disable depricated features
    db.settings({
      timestampsInSnapshots: true
    });
    console.log(this.buildingSubTitle);

    db.collection("buildings")
      .doc(this.buildingUID)
      .set({
        title: this.buildingTitle,
        subTitle: this.buildingSubTitle,
        description: this.buildingDesc
      },
      {merge: true})
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  }

  constructor(private cbuDataService: CbuDataService) {}

  ngOnInit() {
    this.building = this.cbuDataService.tempBuilding;
    this.buildingTitle = this.building.title;
    this.buildingSubTitle = this.building.subTitle;
    this.buildingDesc = this.building.description;
    this.buildingUID = this.building.uniqueID;
  }
}
