import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacultyListComponent } from './pages/faculty-list/faculty-list.component';
import { BuildingListComponent } from './pages/building-list/building-list.component';

//Theme Component Imports
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BuildingDisplayComponent } from './pages/building-display/building-display.component';
import { StartComponent } from './pages/start/start.component';
import { FacultyDisplayComponent } from './pages/faculty-display/faculty-display.component';
import { AddFacultyComponent } from './snippets/add-faculty/add-faculty.component';


@NgModule({
  declarations: [
    AppComponent,
    FacultyListComponent,
    BuildingListComponent,
    BuildingDisplayComponent,
    StartComponent,
    FacultyDisplayComponent,
    AddFacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
