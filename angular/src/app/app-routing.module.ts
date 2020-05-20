import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MapBoxComponent} from './_components/map-box/map-box.component';
import {AddAptComponent} from './_components/add-apt/add-apt.component';


const routes: Routes = [
  { path: '', component: MapBoxComponent},
  { path: 'add', component: AddAptComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
