import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './modules/home/nav/nav.component';
import { Schema1Component } from './modules/home/pages/schema1/schema1.component';
import { Schema2Component } from './modules/home/pages/schema2/schema2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Schema1Component,
    Schema2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
