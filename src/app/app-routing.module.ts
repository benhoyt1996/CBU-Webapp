import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Pages
import { FacultyListComponent } from './pages/faculty-list/faculty-list.component';
import { BuildingListComponent } from './pages/building-list/building-list.component';

const routes: Routes = [
  {path: 'faculty-list', component: FacultyListComponent},
  {path: 'building-list', component: BuildingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
