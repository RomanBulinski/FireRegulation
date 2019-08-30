import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Schema1Component } from "./modules/home/pages/schema1/schema1.component";
import { Schema2Component } from "./modules/home/pages/schema2/schema2.component";
import { Schema3Component } from "./modules/home/pages/schema3/schema3.component";
import { ContactComponent } from "./modules/home/pages/contact/contact.component";



const routes: Routes = [
  { path: "schema1", component: Schema1Component },
  { path: "schema2", component: Schema2Component },
  { path: "schema3", component: Schema3Component },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
