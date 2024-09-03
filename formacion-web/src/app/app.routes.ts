import { Routes } from '@angular/router';
import { AplicacionesComponent } from './aplicaciones';
import { SituacionesComponent } from './situaciones';
import { CrearAplicacionComponent } from './crear-aplicacion';
import { AdministrarCamposComponent } from './administrar-campos';
import { EditarAplicacionesComponent } from './editar-aplicaciones';
import { DetallesAplicacionComponent } from './detalles-aplicacion';
import { LoginComponent } from './login';
import { AuthGuard } from './auth/auth-guard.service';
import { CrearUserComponent } from './crear-user';

export const routes: Routes = [
    { path: 'aplicaciones', component: AplicacionesComponent,canActivate:[AuthGuard], data:{role:["ROLE_user","ROLE_admin"]} },
    { path: 'situaciones', component: SituacionesComponent,canActivate:[AuthGuard], data:{role:["ROLE_user","ROLE_admin"]} },
    { path: 'crear-aplicacion', component: CrearAplicacionComponent,canActivate:[AuthGuard], data:{role:["ROLE_user","ROLE_admin"]} },
    { path: 'detalles-aplicacion', component: DetallesAplicacionComponent,canActivate:[AuthGuard], data:{role:["ROLE_user","ROLE_admin"]} },
    { path: 'crear-user', component: CrearUserComponent,canActivate:[AuthGuard], data:{role:["ROLE_admin"]} },
    { path: 'administracion', component: AdministrarCamposComponent,canActivate:[AuthGuard], data:{role:["ROLE_admin"]}  },
    { path: 'editar-aplicacion', component: EditarAplicacionesComponent,canActivate:[AuthGuard], data:{role:["ROLE_user","ROLE_admin"]}},
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
