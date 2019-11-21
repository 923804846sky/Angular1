import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { Jstask6Component } from './jstask6.component';
import { Article2Component } from './article2/article2.component';

const routes: Routes = [
  {path:'',component:Jstask6Component,    
    children:[
     {path:'article',component:ArticleComponent},
     {path:'article2',component:Article2Component}
    ]}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Jstask6RoutingModule { }
