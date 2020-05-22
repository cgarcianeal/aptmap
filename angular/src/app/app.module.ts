import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapBoxComponent } from './_components/map-box/map-box.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MapService} from './_services/map.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import {AppRoutingModule} from './app-routing.module';
import { AddAptComponent } from './_components/add-apt/add-apt.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MapBoxComponent,
    AddAptComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
