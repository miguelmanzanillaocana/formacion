import { Routes } from '@angular/router';

import { AplicacionesComponent } from './aplicaciones';
import { SituacionesComponent } from './situaciones';
import { CrearAplicacionComponent } from './crear-aplicacion';
import { AdministrarCamposComponent } from './administrar-campos';

export const routes: Routes = [
    { path: 'aplicaciones', component: AplicacionesComponent },
    { path: 'situaciones', component: SituacionesComponent },
    { path: 'crear-app', component: CrearAplicacionComponent},
    { path: 'administracion', component: AdministrarCamposComponent},
    { path: '', redirectTo: '/aplicaciones', pathMatch: 'full' }
    
];
