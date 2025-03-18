import { Component, OnInit } from '@angular/core';
import { servicios} from 'src/app/Servicios/servicios.service';
import {FormsModule} from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  formData =   {
    username: '',
    password: '',
    rememberMe: false
  };
  
  showPassword = false;

  hide = false;
  constructor(private servicios: servicios, private router: Router) {
    
   }
  usuario: any;
  mostrarInformacion: any;

  ngOnInit(): void
  {

  }

  async ingreso()
  {
    console.log(" Form data ", this.formData)
    console.log("Data de usuario-login" , this.formData.username)
    console.log("pepe le gusta r6");
    //this.usuario = await this.servicios.obtenerUsuarioById(1).toPromise(); //se consume servicio definido en la clase servicios.service.ts
    //console.log("informacion:", this.usuario);
    //this.router.navigate(['menu']);
  }


  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Form submitted:', this.formData);
      // Aquí iría la lógica de autenticación
    }
  }

}
