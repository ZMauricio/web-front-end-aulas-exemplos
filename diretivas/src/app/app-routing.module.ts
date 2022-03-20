import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgclassComponent } from './atributos/ngclass/ngclass.component';
import { NgstyleComponent } from './atributos/ngstyle/ngstyle.component';
import { NgforComponent } from './estruturais/ngfor/ngfor.component';
import { NgifComponent } from './estruturais/ngif/ngif.component';
import { NgswitchComponent } from './estruturais/ngswitch/ngswitch.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'ngif',
    component: NgifComponent
  },
  {
    path: 'ngfor',
    component: NgforComponent
  },
  {
    path: 'ngswitch',
    component: NgswitchComponent
  },
  {
    path: 'ngclass',
    component: NgclassComponent
  },
  {
    path: 'ngstyle',
    component: NgstyleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
