import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }

  obtenerAplicaciones(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/aplicaciones/');
  }
}
