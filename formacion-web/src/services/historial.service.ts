import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Area, Historial, RegisterDto, UserModel, UserUpdate } from '../models';
import { HistorialIns } from '../models/autentificacion/historial-ins';


@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  
  private urlBase = 'http://localhost:8080/historial/insert';
  private user!: UserUpdate;
  private hist!: HistorialIns;
  fechaActual!: string;
  hora!:string;

  constructor(private http: HttpClient) {
    const date = new Date();
    this.fechaActual = `${date.getFullYear()}-${this.padZero(date.getMonth() + 1)}-${this.padZero(date.getDate())}`;
    this.hora = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  padZero(value: number): string {
    return (value < 10 ? '0' : '') + value;
  }

  insertarBorradoApliacion(email: string, codApp: string): Observable<Historial> {
    this.user = new UserUpdate(1, "", email, "", "", "", false, "");

    this.hist = new HistorialIns(1, this.user, "Borrado aplicacion: " + codApp, this.fechaActual);
    return this.http.post<Historial>(this.urlBase, this.hist);
  }

  insertarEditadoApliacion(email: string, codApp: string): Observable<Historial> {
    this.user = new UserUpdate(1, "", email, "", "", "", false, "");
    this.hist = new HistorialIns(1, this.user, "Actualizado aplicacion: " + codApp, this.fechaActual);
    return this.http.post<Historial>(this.urlBase, this.hist);
  }

  insertarCreadoApliacion(email: string, codApp: string): Observable<Historial> {
    this.user = new UserUpdate(1, "", email, "", "", "", false, "");
    this.hist = new HistorialIns(1, this.user, "Creado aplicacion: " + codApp, this.fechaActual);
    return this.http.post<Historial>(this.urlBase, this.hist);
  }

  insertarCreadoComentarioAplicacion(email: string, codApp: string,comentario: string): Observable<Historial> {
    this.user = new UserUpdate(1, "", email, "", "", "", false, "");
    this.hist = new HistorialIns(1, this.user, "Creado comentario '"+comentario+"' de la aplicacion: " + codApp, this.fechaActual);
    return this.http.post<Historial>(this.urlBase, this.hist);
  }

  insertarInicioSesion(email: string): Observable<Historial> {
    this.user = new UserUpdate(1, "", email, "", "", "", false, "");
    this.hist = new HistorialIns(1, this.user, "Inicio sesión a las: " + this.hora, this.fechaActual);
    return this.http.post<Historial>(this.urlBase, this.hist);
  }

  insertarCerrarSesion(email: string): Observable<Historial> {
    this.user = new UserUpdate(1, "", email, "", "", "", false, "");
    this.hist = new HistorialIns(1, this.user, "Cerro sesión a las: " + this.hora, this.fechaActual);
    return this.http.post<Historial>(this.urlBase, this.hist);
  }

  insertarCreadoUsario(email: string, usuarioemail:RegisterDto): Observable<Historial> {
    this.user = new UserUpdate(1, "", email, "", "", "", false, "");
    this.hist = new HistorialIns(1, this.user, "Creado usuario: " + usuarioemail.fullName+", email: "+usuarioemail.email+", rol: "+usuarioemail.role, this.fechaActual);
    return this.http.post<Historial>(this.urlBase, this.hist);
  }

  insertarHabilitadoUser(email: string, user: UserModel): Observable<Historial> {
    this.user = new UserUpdate(1, "", email, "", "", "", false, "");
    this.hist = new HistorialIns(1, this.user, "Usuario habilitado: " + user.fullName+" email: "+user.email, this.fechaActual);
    return this.http.post<Historial>(this.urlBase, this.hist);
  }

  insertarDeshabilitadoUser(email: string, user: UserModel): Observable<Historial> {
    this.user = new UserUpdate(1, "", email, "", "", "", false, "");
    this.hist = new HistorialIns(1, this.user, "Usuario deshabilitado: " + user.fullName+" email: "+user.email, this.fechaActual);
    return this.http.post<Historial>(this.urlBase, this.hist);
  }

  insertarCreadoAdministracion(email: string, nombre:string,tipo:string): Observable<Historial> {
    this.user = new UserUpdate(1, "", email, "", "", "", false, "");
    this.hist = new HistorialIns(1, this.user, "Creado "+tipo+": " + nombre, this.fechaActual);
    return this.http.post<Historial>(this.urlBase, this.hist);
  }
}
