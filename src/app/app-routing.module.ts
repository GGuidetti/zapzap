import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrianguloComponent } from './componentes/triangulo/triangulo.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'triangulo', component: TrianguloComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
