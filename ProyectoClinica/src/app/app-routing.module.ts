import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from './login/ingreso/ingreso.component';
import { MenuComponent } from './menu/menu/menu.component';
import { Router } from '@angular/router';
const routes: Routes = [
  { path: 'login', component: IngresoComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige la raíz a /login

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule{}


