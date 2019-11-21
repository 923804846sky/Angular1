import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './authguard.service';

const routes: Routes = [
    // {path: '', redirectTo: 'jstask5' ,pathMatch:'prefix'},
    // {path:'jstask5',loadChildren:'./pages/jstask5/jstask5.module#Jstask5Module'},
    // {path:'jstask6',loadChildren:'./pages/jstask6/jstask6.module#Jstask6Module'},
       {path: '', redirectTo: 'jstask5',pathMatch: 'prefix'},
       {path: 'jstask5',loadChildren: './pages/jstask5/jstask5.module#Jstask5Module'},
       {path: 'jstask6',canActivate: [AuthGuard],loadChildren: './pages/jstask6/jstask6.module#Jstask6Module' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
