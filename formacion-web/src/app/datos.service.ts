import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private urlBase = 'http://localhost:8080';

  constructor(private http: HttpClient) {
    
   }

  obtenerAplicaciones(): Observable<any[]> {
    return this.http.get<any[]>(this.urlBase + '/aplicaciones/');
  }

  borrarAplicacion(cod: string): Observable<boolean> {
    return this.http.delete<boolean>(this.urlBase + '/aplicaciones/delete/' + cod);
  }
}
