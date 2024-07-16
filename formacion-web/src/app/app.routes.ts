import { Routes } from '@angular/router';

import { AplicacionesComponent } from './aplicaciones';
import { SituacionesComponent } from './situaciones';
import { HomeComponent } from './home';

export const routes: Routes = [
    { path: 'aplicaciones', component: AplicacionesComponent },
    { path: 'situaciones', component: SituacionesComponent },
    { path: 'inicio', component: HomeComponent},
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];
