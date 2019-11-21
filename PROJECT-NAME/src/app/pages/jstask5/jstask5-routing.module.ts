import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Jstask5Component } from './jstask5.component';


const routes: Routes = [
  { path:'' , component:Jstask5Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Jstask5RoutingModule { }
