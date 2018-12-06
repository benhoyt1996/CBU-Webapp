import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Pages
import { FacultyListComponent } from "./pages/faculty-list/faculty-list.component";
import { BuildingListComponent } from "./pages/building-list/building-list.component";
import { BuildingDisplayComponent } from "./pages/building-display/building-display.component";
import { FacultyDisplayComponent } from "./pages/faculty-display/faculty-display.component";
import { StartComponent } from "./pages/start/start.component";

const routes: Routes = [
  { path: "", component: StartComponent },
  { path: "faculty-list", component: FacultyListComponent },
  { path: "building-list", component: BuildingListComponent },
  {
    path: "building-list/building-display",
    component: BuildingDisplayComponent
  },
  { path: "faculty-list/faculty-display", component: FacultyDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
