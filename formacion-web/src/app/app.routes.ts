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
    { path: 'aplicaciones', component: AplicacionesComponent, canActivate:[AuthGuard], data:{role:"ROLE_user"}},
    { path: 'situaciones', component: SituacionesComponent, canActivate:[AuthGuard], data:{role:"ROLE_user"} },
    { path: 'crear-aplicacion', component: CrearAplicacionComponent, canActivate:[AuthGuard], data:{role:"ROLE_user"} },
    { path: 'detalles-aplicacion', component: DetallesAplicacionComponent, canActivate:[AuthGuard], data:{role:"ROLE_user"} },
    { path: 'administracion', component: AdministrarCamposComponent, canActivate:[AuthGuard], data:{role:"ROLE_user"} },
    { path: 'editar-aplicacion', component: EditarAplicacionesComponent, canActivate:[AuthGuard], data:{role:"ROLE_user"} },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/aplicaciones', pathMatch: 'full' }
];
