import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IngresoComponent } from './login/ingreso/ingreso.component';
import { servicios} from './Servicios/servicios.service';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MenuComponent } from './menu/menu/menu.component';

const rutas:Routes=
[
{
  path:'login',
  component:IngresoComponent 
},

{
  path: 'menu',
  component:MenuComponent
}

]

@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(rutas),
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [
    servicios
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

