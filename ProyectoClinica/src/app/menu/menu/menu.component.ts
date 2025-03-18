import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onButtonClick(action: string): void {
    console.log(`Botón ${action} clickeado`);
    // Implementa la lógica específica para cada botón
  }
  
  onExitClick(): void {
    console.log('Salir clickeado');
    this.router.navigate(['login']);  }
}
