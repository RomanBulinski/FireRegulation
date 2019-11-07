import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './modules/home/nav/nav.component';
import { Schema1Component } from './modules/home/pages/schema1/schema1.component';
import { Schema2Component } from './modules/home/pages/schema2/schema2.component';
import { Schema3Component } from './modules/home/pages/schema3/schema3.component';
import { ContactComponent } from './modules/home/pages/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TextruleComponent } from './modules/home/pages/schema1/textrule/textrule.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ZlComponent } from './modules/home/pages/schema1/zl/zl.component';
import { PmComponent } from './modules/home/pages/schema1/pm/pm.component';
import { ContService } from "./modules/home/pages/contact/cont.service";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Schema1Component,
    Schema2Component,
    Schema3Component,
    ContactComponent,
    TextruleComponent,
    ZlComponent,
    PmComponent,
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
    ReactiveFormsModule,
    MatButtonToggleModule

  ],
  providers: [ContService],
  bootstrap: [AppComponent]
})
export class AppModule { }

