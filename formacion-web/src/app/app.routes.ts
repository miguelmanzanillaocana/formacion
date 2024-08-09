import { Routes } from '@angular/router';

import { AplicacionesComponent } from './aplicaciones';
import { SituacionesComponent } from './situaciones';
import { CrearAplicacionComponent } from './crear-aplicacion';
import { AdministrarCamposComponent } from './administrar-campos';
import { DetallesAplicacionComponent } from './aplicaciones';

export const routes: Routes = [
    { path: 'aplicaciones', component: AplicacionesComponent },
    { path: 'situaciones', component: SituacionesComponent },
    { path: 'crear-aplicacion', component: CrearAplicacionComponent},
    { path: 'detalles-aplicacion', component: DetallesAplicacionComponent},
    { path: 'administracion', component: AdministrarCamposComponent},
    { path: '', redirectTo: '/aplicaciones', pathMatch: 'full' }
    
];
