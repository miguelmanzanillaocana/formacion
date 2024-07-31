import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Responsable } from '../interfaces/responsable';
import { Criticidad } from '../interfaces/criticidad';
import { Tecnologia } from '../interfaces/tecnologia';
import { VolumenUsuarios } from '../interfaces/volumen-usuarios';
import { VolumenEvolutivo } from '../interfaces/volumen-evolutivo';
import { Tipo } from '../interfaces/tipo';
import { TecnologiaInterfaz } from '../interfaces/tecnologia-interfaz';
import { Aplicacion } from '../classes/aplicacion';
import { Situacion } from '../classes/situacion';

@Injectable({
  providedIn: 'root'
})

export class DatosService {

  private urlBase = 'http://localhost:8080/';
  private datosTabla: Aplicacion[] = [];

  setDatosTabla(datos: Aplicacion[]) {
    this.datosTabla = datos;
  }

  getDatosTabla(): Aplicacion[] {
    return this.datosTabla;
  }
  
  constructor(private http: HttpClient) { }

  //METODOS APLICACIONES
  obtenerAplicaciones(): Observable<Aplicacion[]> {
    return this.http.get<Aplicacion[]>(this.urlBase + 'aplicacion/');
  }

  borrarAplicacion(cod: string): Observable<boolean> {
    return this.http.delete<boolean>(this.urlBase + 'aplicacion/delete/' + cod);
  }

  //METODOS FORMULARIO APLICACIONES
  insertarAplicacion(apl: Aplicacion): Observable<Aplicacion> {
    return this.http.post<Aplicacion>(this.urlBase + 'aplicacion/insert', apl);
  }

  obtenerResponsables(): Observable<Responsable[]> {
    return this.http.get<Responsable[]>(this.urlBase + 'responsable/');
  }
  
  obtenerCriticidades(): Observable<Criticidad[]> {
    return this.http.get<Criticidad[]>(this.urlBase + 'criticidad/');
  }

  obtenerTecnologias(): Observable<Tecnologia[]> {
    return this.http.get<Tecnologia[]>(this.urlBase + 'tecnologia/');
  }

  obtenerVolumenesUsuarios(): Observable<VolumenUsuarios[]> {
    return this.http.get<VolumenUsuarios[]>(this.urlBase + 'volumen-usuarios/');
  }
  obtenerVolumenesEvolutivo(): Observable<VolumenEvolutivo[]> {
    return this.http.get<VolumenEvolutivo[]>(this.urlBase + 'volumen-evolutivo/');
  }
  obtenerTipos(): Observable<Tipo[]> {
    return this.http.get<Tipo[]>(this.urlBase + 'tipo/');
  }
  obtenerTecnologiaInterfaz(): Observable<TecnologiaInterfaz[]> {
    return this.http.get<TecnologiaInterfaz[]>(this.urlBase + 'tecnologia-interfaz/');
  }

  //METODOS SITUACIONES
  obtenerSituaciones(): Observable<Situacion[]> {
    return this.http.get<Situacion[]>(this.urlBase + 'situacion/');
  }
}
