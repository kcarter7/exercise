import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PatientDisplayComponent } from './components/patient-display/patient-display.component';
import { PatientComponent } from './patient.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    PatientDisplayComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
