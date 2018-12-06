import { Component, OnInit } from "@angular/core";

import * as firebase from "firebase/app";
import "firebase/firestore";

import { CbuDataService } from "../../cbu-data.service";

import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-faculty-list",
  templateUrl: "./faculty-list.component.html",
  styleUrls: ["./faculty-list.component.css"]
})
export class FacultyListComponent implements OnInit {
  faculty: any = [];
  filteredFaculty: any = [];
  filterText: any;

  closeResult: string;
  dataSaved = true;
  dataFalse = true;

  schoolType = ["Business", "Science", "Engineering"];

  newFacultyFirstname: any;
  newFacultyLastname: any;
  newFacultyEmail: any;
  newFacultyOfficeNumber: any;
  newFacultyOfficePhone: any;
  newFacultyTitle: any;
  newFacultySchool: any;
  newFacultyWebsite: any;

  addedText: string;

  setFaculty(faculty): any {
    this.cbuDataService.tempFaculty = faculty;
  }

  updateList(): any {
    this.filteredFaculty = this.faculty.filter(
      n =>
        n.title.toLowerCase().includes(this.filterText.toLowerCase()) ||
        n.firstName.toLowerCase().includes(this.filterText.toLowerCase()) ||
        n.lastName.toLowerCase().includes(this.filterText.toLowerCase()) ||
        n.school.toLowerCase().includes(this.filterText.toLowerCase()) ||
        n.department.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  setSchool(school) {
    this.newFacultySchool = school;
  }

  constructor(private cbuDataService: CbuDataService) {}

  ngOnInit() {
    this.faculty = this.cbuDataService.faculty;
    this.filteredFaculty = this.faculty;
  }
}
