import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Historial, UserUpdate } from '../models';
import { HistorialIns } from '../models/autentificacion/historial-ins';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  private urlBase = 'http://localhost:8080/historial/insert';
  private user!:UserUpdate;
  private hist!: HistorialIns;
  constructor(private http: HttpClient) { }
  
  insertarBorradoApliacion(email: string, codApp: string): Observable<Historial> {
    this.user=new UserUpdate(1,"",email,"","","",false,"");
    this.hist=new HistorialIns(1,this.user,"Borrado aplicacion: "+codApp,"1900-01-01");
    return this.http.post<Historial>(this.urlBase,this.hist);
  }
  
}
