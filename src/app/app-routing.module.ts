import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ErrorComponent } from './error/error.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  // This is the default pathing localhost:4200
  { path: "", component: InicioComponent },

  // These are normal routes, charging normal components
  { path: "parent", component: ParentComponent },
  { path: "child", component: ChildComponent },

  // This one gets one parameter from routing, it must be collected on ParentComponent
  // paramNameOnRouting is the name we will collect, not the variable in app.component.ts
  { path: "parent/:paramNameOnRouting", component: ParentComponent },

  // This expression gets everysingle pathing that is not included here
  // It has to be on the bottom of the list, if not, routes below it won't work.
  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
