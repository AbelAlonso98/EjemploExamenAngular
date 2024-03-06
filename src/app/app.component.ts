import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EjemploExamen';
  paramNameOnRouting: string = "Pues lo que quieras pasar"
}
