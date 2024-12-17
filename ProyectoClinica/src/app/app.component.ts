import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoClinica';
  hide = true;

  clickEvent(event: any): void {
    this.hide = !this.hide; // Alterna el valor de "hide"
    console.log('Button clicked:', event);
  }
  constructor(private router:Router)
  {
      
  }

  ngOnInit(): void
  {
    this.router.navigate(['login']);
  }

}
