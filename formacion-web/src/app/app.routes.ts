import { Routes } from '@angular/router';

import { AplicacionesComponent } from './aplicaciones';
import { SituacionesComponent } from './situaciones';
import { CrearAplicacionComponent } from './crear-aplicacion';
import { DemoResolverService } from './resolvers/demo-resolver.service';

export const routes: Routes = [
    { path: 'aplicaciones', component: AplicacionesComponent,
        resolve:{
            aplicaciones: DemoResolverService
        }
    },
    { path: 'situaciones', component: SituacionesComponent },
    { path: 'crear-app', component: CrearAplicacionComponent},
    { path: '', redirectTo: '/aplicaciones', pathMatch: 'full' }
    
];
