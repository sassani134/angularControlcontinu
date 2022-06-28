import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Mes components
import { HomeComponent } from './compo/home/home.component';
import { StationsComponent } from './compo/stations/stations.component';
import { StationDetailComponent } from './compo/station-detail/station-detail.component';
import { ErrorComponent } from './error/error.component';

//import { loggedGuard } from './logged.guard';

const routes: Routes = [

  {path: '', component:HomeComponent},
  {path: 'stations',
    component:StationsComponent,
    //canActivateChild: [LoggedGuard],
    children: [
      {path: ':name',component:StationDetailComponent},
    ]
  },
  //redirection si erreur
  {path: 'sation', redirectTo: 'stations', pathMatch: 'full'},
  //page not found doit etre le dernier element
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
