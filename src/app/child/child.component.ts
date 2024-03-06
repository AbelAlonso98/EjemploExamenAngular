import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // To set Input we have to set the attribute as @Input()
  // make sure you import it from @angular/core
  @Input() nameOfAttributeWeWantFromParent: any = 'whatever';

}
