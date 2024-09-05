import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Historial, UserUpdate } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  private urlBase = 'http://localhost:8080/historial/insert';
  private user!:UserUpdate;
  private hist!: Historial;
  constructor(private http: HttpClient) { }
  
  insertarBorradoApliacion(email: string): Observable<Historial> {
    this.user=new UserUpdate(1,"",email,"","","",false,"");
    this.hist=new Historial(1,this.user,"Borrado aplicacion","");

    return this.http.post<Historial>(this.urlBase + this.aplicacion + this.insert, apl);
  }
}
