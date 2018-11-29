import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CbuDataService {

  buildings = [];
  faculty = [];

  tempBuilding: any;

  constructor() { }
}

export class Building {
  coordinates: any;
  description: any;
  photos: any[];
  subTitle: any;
  title: any;
  type: any;
}
