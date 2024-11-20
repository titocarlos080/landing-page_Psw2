import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [


  { path: '', component: HomeComponent }, // Ruta para el Home (raíz)
  { path: '**', redirectTo: '' }     

];
