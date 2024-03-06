import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // To set Input we have to set the attribute as @Input()
  // make sure you import it from @angular/core
  @Input() nameOfAttributeWeWantFromParent: number = 8;

  // This is an @Output variable, it will be sent when (click) event is made.
  @Output() datosEnviados = new EventEmitter<string>();

  // This is how you send it.
  enviarDatos(){
    this.datosEnviados.emit("El componente que has clickado tenía valor: " + this.nameOfAttributeWeWantFromParent + " y ahora: " + (this.nameOfAttributeWeWantFromParent+1))
  }
}
