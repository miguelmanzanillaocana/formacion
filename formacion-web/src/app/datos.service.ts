import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aplicacion } from './interfaces/aplicacion';
import { Responsable } from './interfaces/responsable';
import { Criticidad } from './interfaces/criticidad';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private urlBase = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  //METODOS APLICACIONES
  obtenerAplicaciones(): Observable<Aplicacion[]> {
    return this.http.get<Aplicacion[]>(this.urlBase + 'aplicaciones/');
  }

  borrarAplicacion(cod: string): Observable<boolean> {
    return this.http.delete<boolean>(this.urlBase + 'aplicaciones/delete/' + cod);
  }

  insertarAplicacion(apl: Aplicacion): Observable<Aplicacion> {
    return this.http.post<Aplicacion>(this.urlBase + 'insert', apl);
  }

  //METODOS RESPONSABLES
  obtenerResponsables(): Observable<Responsable[]> {
    return this.http.get<Responsable[]>(this.urlBase + 'responsable/');
  }
  //METODOS CRITICIDADES
  obtenerCriticidades(): Observable<Criticidad[]> {
    return this.http.get<Criticidad[]>(this.urlBase + 'criticidad/');
  }

}
