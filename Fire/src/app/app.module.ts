import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './modules/home/nav/nav.component';
import { Schema1Component } from './modules/home/pages/schema1/schema1.component';
import { Schema2Component } from './modules/home/pages/schema2/schema2.component';
import { Schema3Component } from './modules/home/pages/schema3/schema3.component';
import { ContactComponent } from './modules/home/pages/contact/contact.component';
import { HorButtonGroupComponent } from './modules/home/pages/schema1/hor-button-group/hor-button-group.component';
import { VerButtonGropuComponent } from './modules/home/pages/schema1/ver-button-gropu/ver-button-gropu.component';
import { ZlButtonComponent } from './modules/home/pages/schema1/hor-button-group/zl-button/zl-button.component';
import { HeightButtonComponent } from './modules/home/pages/schema1/ver-button-gropu/height-button/height-button.component';
import { TableComponent } from './modules/home/pages/schema1/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';

import {MatGridListModule} from '@angular/material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TextruleComponent } from './modules/home/pages/schema1/textrule/textrule.component';
import { TablePMComponent } from './modules/home/pages/schema1/table-pm/table-pm.component';
import { HorButtunPMComponent } from './modules/home/pages/schema1/hor-buttun-pm/hor-buttun-pm.component';
import { VerButtonGroupPMComponent } from './modules/home/pages/schema1/ver-button-group-pm/ver-button-group-pm.component';
import { HorButtonGroupPMComponent } from './modules/home/pages/schema1/hor-button-group-pm/hor-button-group-pm.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Schema1Component,
    Schema2Component,
    Schema3Component,
    ContactComponent,
    HorButtonGroupComponent,
    VerButtonGropuComponent,
    ZlButtonComponent,
    HeightButtonComponent,
    TableComponent,
    TextruleComponent,
    TablePMComponent,
    HorButtunPMComponent,
    VerButtonGroupPMComponent,
    HorButtonGroupPMComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatSliderModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

