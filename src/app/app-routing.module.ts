import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Pages
import { FacultyListComponent } from './pages/faculty-list/faculty-list.component';
import { BuildingListComponent } from './pages/building-list/building-list.component';
import { BuildingDisplayComponent } from './pages/building-display/building-display.component';

const routes: Routes = [
  {path: 'faculty-list', component: FacultyListComponent},
  {path: 'building-list', component: BuildingListComponent},
  {path: 'building-list/building-display', component: BuildingDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
