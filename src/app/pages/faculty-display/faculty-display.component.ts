import { Component, OnInit } from "@angular/core";

import { CbuDataService } from "../../cbu-data.service";

import * as firebase from "firebase/app";
import "firebase/firestore";

@Component({
  selector: "app-faculty-display",
  templateUrl: "./faculty-display.component.html",
  styleUrls: ["./faculty-display.component.css"]
})
export class FacultyDisplayComponent implements OnInit {
  faculty: any;
  firstName: any;
  lastName: any;
  title: any;
  school: any;
  officeNumber: any;
  phoneNumber: any;
  facultyUID: any;
  monHrs: any;
  tueHrs: any;
  wedHrs: any;
  thurHrs: any;
  friHrs: any;

  constructor(private cbuDataService: CbuDataService) {}

  ngOnInit() {
    this.faculty = this.cbuDataService.tempFaculty;
    this.firstName = this.faculty.firstName;
    this.lastName = this.faculty.lastName;
    this.title = this.faculty.title;
    this.school = this.faculty.school;
    this.officeNumber = this.faculty.officeNumber;
    this.phoneNumber = this.faculty.phoneNumber;
    this.facultyUID = this.faculty.uniqueId;
    this.friHrs = this.cbuDataService.getMon(this.facultyUID);
    this.monHrs = this.cbuDataService.getMon(this.facultyUID);
    this.tueHrs = this.cbuDataService.getTue(this.facultyUID);
    this.wedHrs = this.cbuDataService.getWed(this.facultyUID);
    this.thurHrs = this.cbuDataService.getThur(this.facultyUID);
  }
}
