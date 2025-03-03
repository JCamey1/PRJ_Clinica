import { Component, OnInit } from '@angular/core';
import { servicios} from 'src/app/Servicios/servicios.service';
import {FormsModule} from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  userForm: FormGroup;
  hide = false;
  constructor(private servicios: servicios) {
    this.userForm = new FormGroup({
      usuario: new FormControl('', Validators.required),
      contraseña: new FormControl('', Validators.required)
    });
   }
  usuario: any;
  mostrarInformacion: any;

  ngOnInit(): void
  {

  }

  async ingreso()
  {
    console.log("pepe le gusta r6");
    this.usuario = await this.servicios.obtenerUsuarioById(1).toPromise(); //se consume servicio definido en la clase servicios.service.ts
    console.log("informacion:", this.usuario);
  }


}
