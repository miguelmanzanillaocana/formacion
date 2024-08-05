import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Responsable } from '../models/responsable';
import { Criticidad } from '../interfaces/criticidad';
import { Tecnologia } from '../models/tecnologia';
import { VolumenUsuarios } from '../interfaces/volumen-usuarios';
import { VolumenEvolutivo } from '../interfaces/volumen-evolutivo';
import { Tipo } from '../interfaces/tipo';
import { TecnologiaInterfaz } from '../interfaces/tecnologia-interfaz';
import { Aplicacion } from '../models/aplicacion';
import { Situacion } from '../models/situacion';
import { Area } from '../models/area';
import { Subarea } from '../models/subarea';

@Injectable({
  providedIn: 'root'
})

export class DatosService {

  private urlBase = 'http://localhost:8080/';
  
  constructor(private http: HttpClient) { }

  //Aplicaciones
  obtenerAplicaciones(): Observable<Aplicacion[]> {
    return this.http.get<Aplicacion[]>(this.urlBase + 'aplicacion/');
  }

  borrarAplicacion(cod: string): Observable<boolean> {
    return this.http.delete<boolean>(this.urlBase + 'aplicacion/delete/' + cod);
  }

  //Formulario aplicaciones
  insertarAplicacion(apl: Aplicacion): Observable<Aplicacion> {
    return this.http.post<Aplicacion>(this.urlBase + 'aplicacion/insert', apl);
  }

  obtenerAreas(): Observable<Area[]> {
    return this.http.get<Area[]>(this.urlBase + 'area/');
  }

  obtenerSubareas(): Observable<Subarea[]> {
    return this.http.get<Subarea[]>(this.urlBase + 'subarea/');
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

  //Situaciones
  obtenerSituaciones(): Observable<Situacion[]> {
    return this.http.get<Situacion[]>(this.urlBase + 'situacion/');
  }

  //Administración
  insertarArea(ar: Area): Observable<Area> {
    return this.http.post<Area>(this.urlBase + 'area/insert', ar);
  }

  actualizarArea(ar: Area): Observable<Area> {
    return this.http.put<Area>(this.urlBase + 'area/update', ar);
  }

  insertarSubarea(sa: Subarea): Observable<Subarea> {
    return this.http.post<Subarea>(this.urlBase + 'subarea/insert',sa);
  }

  actualizarSubarea(sa: Subarea): Observable<Subarea> {
    return this.http.put<Subarea>(this.urlBase + 'subarea/update', sa);
  }

  insertarResponsable(re: Responsable): Observable<Responsable> {
    return this.http.post<Responsable>(this.urlBase + 'responsable/insert', re);
  }

  actualizarResponsable(re: Responsable): Observable<Responsable> {
    return this.http.put<Responsable>(this.urlBase + 'responsable/update', re);
  }

  insertarTecnologia(te: Tecnologia): Observable<Tecnologia> {
    return this.http.post<Tecnologia>(this.urlBase + 'tecnologia/insert', te);
  }

  actualizarTecnologia(te: Tecnologia): Observable<Tecnologia> {
    return this.http.put<Tecnologia>(this.urlBase + 'tecnologia/update', te);
  }

}
