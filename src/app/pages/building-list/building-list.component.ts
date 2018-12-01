import { Component, OnInit } from "@angular/core";

import * as firebase from "firebase/app";
import "firebase/firestore";

import { CbuDataService } from "../../cbu-data.service";

import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-building-list",
  templateUrl: "./building-list.component.html",
  styleUrls: ["./building-list.component.css"]
})
export class BuildingListComponent implements OnInit {
  buildings: any = [];
  filteredBuildings: any = [];
  filterText: any;

  closeResult: string;
  dataSaved = true;

  newBuildingTitle: any;
  newBuildingSubTitle: any;
  newBuildingDesc: any;

  addedText: string;

  // tempBuilding: any;

  setBuilding(building): any {
    this.cbuDataService.tempBuilding = building;
  }

  updateList(): any {
    this.filteredBuildings = this.buildings.filter(n =>
      n.title.toLowerCase().includes(this.filterText)
    );
  }

  addBuilding(): any {
    // Initialize cloud firestore through firebase
    const db = firebase.firestore();

    // Disable depricated features
    db.settings({
      timestampsInSnapshots: true
    });

    const testBld = {
      title: this.newBuildingTitle,
      subTitle: this.newBuildingSubTitle,
      description: this.newBuildingDesc
    };
    this.cbuDataService.buildings.push(testBld);
    this.buildings = this.cbuDataService.buildings;

    db.collection("buildings")
      .add({
        title: this.newBuildingTitle,
        subTitle: this.newBuildingSubTitle,
        description: this.newBuildingDesc
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  constructor(
    private cbuDataService: CbuDataService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.buildings = this.cbuDataService.buildings;
    this.filteredBuildings = this.buildings;
  }
}
