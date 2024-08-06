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

  // Endpoints Aplicaciones
  private aplicacion = 'aplicacion/';
  private area = 'area/';
  private subarea = 'subarea/';
  private responsable = 'responsable/';
  private criticidad = 'criticidad/';
  private tecnologia = 'tecnologia/';
  private volumenUsuarios = 'volumenUsuarios/';
  private volumenEvolutivo = 'volumenEvolutivo/';
  private tipo = 'tipo/';
  private tecnologiaInterfaz = 'tecnologiaInterfaz/';

  // Endpoints Situaciones
  private situacion = 'situacion/';

  // Endpoints Comunes
  private insert = 'insert';
  private update = 'update';
  private delete = 'delete/';
  
  constructor(private http: HttpClient) { }

  //Aplicaciones
  obtenerAplicaciones(): Observable<Aplicacion[]> {
    return this.http.get<Aplicacion[]>(this.urlBase + this.aplicacion);
  }

  borrarAplicacion(cod: string): Observable<boolean> {
    return this.http.delete<boolean>(this.urlBase + this.aplicacion + this.delete + cod);
  }

  //Formulario aplicaciones
  insertarAplicacion(apl: Aplicacion): Observable<Aplicacion> {
    return this.http.post<Aplicacion>(this.urlBase + this.aplicacion + this.insert, apl);
  }

  obtenerAreas(): Observable<Area[]> {
    return this.http.get<Area[]>(this.urlBase + this.area);
  }

  obtenerSubareas(): Observable<Subarea[]> {
    return this.http.get<Subarea[]>(this.urlBase + this.subarea);
  }

  obtenerResponsables(): Observable<Responsable[]> {
    return this.http.get<Responsable[]>(this.urlBase + this.responsable);
  }
  
  obtenerCriticidades(): Observable<Criticidad[]> {
    return this.http.get<Criticidad[]>(this.urlBase + this.criticidad);
  }

  obtenerTecnologias(): Observable<Tecnologia[]> {
    return this.http.get<Tecnologia[]>(this.urlBase + this.tecnologia);
  }

  obtenerVolumenesUsuarios(): Observable<VolumenUsuarios[]> {
    return this.http.get<VolumenUsuarios[]>(this.urlBase + this.volumenUsuarios);
  }
  obtenerVolumenesEvolutivo(): Observable<VolumenEvolutivo[]> {
    return this.http.get<VolumenEvolutivo[]>(this.urlBase + this.volumenEvolutivo);
  }
  obtenerTipos(): Observable<Tipo[]> {
    return this.http.get<Tipo[]>(this.urlBase + this.tipo);
  }
  obtenerTecnologiaInterfaz(): Observable<TecnologiaInterfaz[]> {
    return this.http.get<TecnologiaInterfaz[]>(this.urlBase + this.tecnologiaInterfaz);
  }

  //Situaciones
  obtenerSituaciones(): Observable<Situacion[]> {
    return this.http.get<Situacion[]>(this.urlBase + this.situacion);
  }

  //Administración
  insertarArea(ar: Area): Observable<Area> {
    return this.http.post<Area>(this.urlBase + this.area + this.insert, ar);
  }

  actualizarArea(ar: Area): Observable<Area> {
    return this.http.put<Area>(this.urlBase + this.area + this.update, ar);
  }

  insertarSubarea(sa: Subarea): Observable<Subarea> {
    return this.http.post<Subarea>(this.urlBase + this.subarea + this.insert,sa);
  }

  actualizarSubarea(sa: Subarea): Observable<Subarea> {
    return this.http.put<Subarea>(this.urlBase + this.subarea + this.update, sa);
  }

  insertarResponsable(re: Responsable): Observable<Responsable> {
    return this.http.post<Responsable>(this.urlBase + this.responsable + this.insert, re);
  }

  actualizarResponsable(re: Responsable): Observable<Responsable> {
    return this.http.put<Responsable>(this.urlBase + this.responsable + this.update, re);
  }

  insertarTecnologia(te: Tecnologia): Observable<Tecnologia> {
    return this.http.post<Tecnologia>(this.urlBase + this.tecnologia + this.insert, te);
  }

  actualizarTecnologia(te: Tecnologia): Observable<Tecnologia> {
    return this.http.put<Tecnologia>(this.urlBase + this.tecnologia + this.update, te);
  }

}
