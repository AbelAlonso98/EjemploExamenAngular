import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  paramWeWantFromRouting: string = "";
  
constructor(private route: ActivatedRoute){
  // This is how we collect the param in the routing, "paramNameOnRouting" is the name we 
  // set in app-routing.module.ts after the ':'
  route.params.subscribe(
    params=>{
      this.paramWeWantFromRouting = params["paramNameOnRouting"];
    }
  )
}

  numbers: number[] = [1, 2, 3, 98, 100, 15];
  inc(index: number){
    this.numbers[index]++;
  }
}
