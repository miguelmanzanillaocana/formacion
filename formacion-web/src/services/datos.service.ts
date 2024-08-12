import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aplicacion, Area, Subarea, Responsable, Criticidad, TecnologiaInterfaz, Tecnologia, Tipo, VolumenEvolutivo, VolumenUsuarios } from '../models/aplicaciones';
import { Situacion, Despliegue, Maven, Documentacion, Pruebas, Testing, Informes, ServicioTerceros } from '../models/situaciones';

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
  private consulta = 'cod/'
  
  constructor(private http: HttpClient) { }

  //Aplicaciones
  obtenerAplicaciones(): Observable<Aplicacion[]> {
    return this.http.get<Aplicacion[]>(this.urlBase + this.aplicacion);
  }

  borrarAplicacion(cod: string): Observable<boolean> {
    return this.http.delete<boolean>(this.urlBase + this.aplicacion + this.delete + cod);
  }

  obtenerAplicacionPorCod(cod: string): Observable<Aplicacion> {
    return this.http.get<Aplicacion>(this.urlBase + this.aplicacion + this.consulta + cod);
  }

  //Formulario aplicaciones
  insertarAplicacion(apl: Aplicacion): Observable<Aplicacion> {
    return this.http.post<Aplicacion>(this.urlBase + this.aplicacion + this.insert, apl);
  }

  insertarSituacion(situ: Situacion): Observable<Situacion> {
    return this.http.post<Situacion>(this.urlBase + this.situacion + this.insert, situ);
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

  obtenerSituacionPorCod(cod: string): Observable<Situacion> {
    return this.http.get<Situacion>(this.urlBase + this.situacion + this.consulta + cod);
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

  insertarTipo(ti: Tipo): Observable<Tipo> {
    return this.http.post<Tipo>(this.urlBase + this.tipo + this.insert, ti);
  }

  actualizarTipo(ti: Tipo): Observable<Tipo> {
    return this.http.put<Tipo>(this.urlBase + this.tipo + this.update, ti);
  }

  insertarTecnologiaInterfaz(te: TecnologiaInterfaz): Observable<TecnologiaInterfaz> {
    return this.http.post<TecnologiaInterfaz>(this.urlBase + this.tecnologiaInterfaz + this.insert, te);
  }

  actualizarTecnologiaInterfaz(te: TecnologiaInterfaz): Observable<TecnologiaInterfaz> {
    return this.http.put<TecnologiaInterfaz>(this.urlBase + this.tecnologiaInterfaz + this.update, te);
  }

  insertarDespliegue(des: Despliegue): Observable<Despliegue> {
    return this.http.post<Despliegue>(this.urlBase + this.despliegue + this.insert, des);
  }

  actualizarDespliegue(des: Despliegue): Observable<Despliegue> {
    return this.http.put<Despliegue>(this.urlBase + this.despliegue + this.update, des);
  }

  insertarDocumentacion(doc: Documentacion): Observable<Documentacion> {
    return this.http.post<Documentacion>(this.urlBase + this.documentacion + this.insert, doc);
  }

  actualizarDocumentacion(doc: Documentacion): Observable<Documentacion> {
    return this.http.put<Documentacion>(this.urlBase + this.documentacion + this.update, doc);
  }

  insertarInformes(inf: Informes): Observable<Informes> {
    return this.http.post<Informes>(this.urlBase + this.informes + this.insert, inf);
  }

  actualizarInformes(inf: Informes): Observable<Informes> {
    return this.http.put<Informes>(this.urlBase + this.informes + this.update, inf);
  }
}
