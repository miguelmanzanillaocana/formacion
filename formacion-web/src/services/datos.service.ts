import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Responsable } from '../models/aplicaciones/responsable';
import { ICriticidad } from '../interfaces/aplicaciones/i-criticidad';
import { Tecnologia } from '../models/aplicaciones/tecnologia';
import { IVolumenUsuarios } from '../interfaces/aplicaciones/i-volumen-usuarios';
import { IVolumenEvolutivo } from '../interfaces/aplicaciones/i-volumen-evolutivo';
import { ITipo } from '../interfaces/aplicaciones/i-tipo';
import { ITecnologiaInterfaz } from '../interfaces/aplicaciones/i-tecnologia-interfaz';
import { Aplicacion } from '../models/aplicaciones/aplicacion';
import { Situacion } from '../models/situaciones/situacion';
import { Area } from '../models/aplicaciones/area';
import { Subarea } from '../models/aplicaciones/subarea';
import { Despliegue } from '../models/situaciones/despliegue';
import { Maven } from '../models/situaciones/maven';
import { Documentacion } from '../models/situaciones/documentacion';
import { Pruebas } from '../models/situaciones/pruebas';
import { Testing } from '../models/situaciones/testing';
import { Informes } from '../models/situaciones/informes';
import { ServicioTerceros } from '../models/situaciones/servicio-terceros';

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
  private despliegue = 'despliegue/';
  private maven = 'maven/';
  private documentacion = 'documentacion/';
  private planPruebas = 'planPruebas/';
  private testing = 'testing/';
  private informes = 'informes/';
  private serviciosTerceros = 'serviciosTerceros/'

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
  
  obtenerCriticidades(): Observable<ICriticidad[]> {
    return this.http.get<ICriticidad[]>(this.urlBase + this.criticidad);
  }

  obtenerTecnologias(): Observable<Tecnologia[]> {
    return this.http.get<Tecnologia[]>(this.urlBase + this.tecnologia);
  }

  obtenerVolumenesUsuarios(): Observable<IVolumenUsuarios[]> {
    return this.http.get<IVolumenUsuarios[]>(this.urlBase + this.volumenUsuarios);
  }
  obtenerVolumenesEvolutivo(): Observable<IVolumenEvolutivo[]> {
    return this.http.get<IVolumenEvolutivo[]>(this.urlBase + this.volumenEvolutivo);
  }
  obtenerTipos(): Observable<ITipo[]> {
    return this.http.get<ITipo[]>(this.urlBase + this.tipo);
  }
  obtenerTecnologiaInterfaz(): Observable<ITecnologiaInterfaz[]> {
    return this.http.get<ITecnologiaInterfaz[]>(this.urlBase + this.tecnologiaInterfaz);
  }

  //Situaciones
  obtenerSituaciones(): Observable<Situacion[]> {
    return this.http.get<Situacion[]>(this.urlBase + this.situacion);
  }

  obtenerDespliegues(): Observable<Despliegue[]> {
    return this.http.get<Despliegue[]>(this.urlBase + this.despliegue);
  }

  obtenerMavens(): Observable<Maven[]> {
    return this.http.get<Maven[]>(this.urlBase + this.maven);
  }

  obtenerDocumentacion(): Observable<Documentacion[]> {
    return this.http.get<Documentacion[]>(this.urlBase + this.documentacion);
  }

  obtenerPlanPruebas(): Observable<Pruebas[]> {
    return this.http.get<Pruebas[]>(this.urlBase + this.planPruebas);
  }

  obtenerTesting(): Observable<Testing[]> {
    return this.http.get<Testing[]>(this.urlBase + this.testing);
  }

  obtenerInformes(): Observable<Informes[]> {
    return this.http.get<Informes[]>(this.urlBase + this.informes);
  }

  obtenerServicioTerceros(): Observable<ServicioTerceros[]> {
    return this.http.get<ServicioTerceros[]>(this.urlBase + this.serviciosTerceros);
  }

  obtenerComentariosSituacion() {

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
