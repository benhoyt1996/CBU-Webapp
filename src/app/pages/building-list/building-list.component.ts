import { Component, OnInit } from '@angular/core';

import {CbuDataService} from '../../cbu-data.service';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css']
})
export class BuildingListComponent implements OnInit {

  buildings: any = [];

  //tempBuilding: any;

  setBuilding(building): any {
    this.cbuDataService.tempBuilding = building;
  }

  constructor(private cbuDataService: CbuDataService) { }

  ngOnInit() {
    this.buildings = this.cbuDataService.buildings;
  }

}
