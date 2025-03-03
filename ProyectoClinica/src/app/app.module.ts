import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IngresoComponent } from './login/ingreso/ingreso.component';
import { servicios} from './Servicios/servicios.service';
import { HttpClientModule } from '@angular/common/http';


const rutas:Routes=
[
{
  path:'login',
  component:IngresoComponent 
}

]

@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(rutas),
    BrowserAnimationsModule,

  ],
  providers: [
    servicios
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

