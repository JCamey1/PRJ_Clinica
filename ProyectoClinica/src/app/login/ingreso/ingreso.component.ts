import { Component, OnInit } from '@angular/core';
import { servicios} from 'src/app/Servicios/servicios.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  constructor(private servicios: servicios) { }
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
