import { Routes } from '@angular/router';
import { AplicacionesComponent } from './aplicaciones';
import { SituacionesComponent } from './situaciones';
import { CrearAplicacionComponent } from './crear-aplicacion';
import { AdministrarCamposComponent } from './administrar-campos';
import { EditarAplicacionesComponent } from './editar-aplicaciones';
import { DetallesAplicacionComponent } from './detalles-aplicacion';
import { LoginComponent } from './login';
import { AuthGuard } from './auth/auth-guard.service';

export const routes: Routes = [
    { path: 'aplicaciones', component: AplicacionesComponent },
    { path: 'situaciones', component: SituacionesComponent },
    { path: 'crear-aplicacion', component: CrearAplicacionComponent },
    { path: 'detalles-aplicacion', component: DetallesAplicacionComponent },
    { path: 'administracion', component: AdministrarCamposComponent },
    { path: 'editar-aplicacion', component: EditarAplicacionesComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/aplicaciones', pathMatch: 'full' }
];
