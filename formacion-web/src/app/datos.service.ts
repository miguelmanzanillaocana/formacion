import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }


  obtenerAplicaciones(): Observable<any[]> {
    return Observable.create((observer: any) => {
      fetch('http://localhost:8080/aplicaciones/', {
        method: 'GET',
        mode: 'no-cors'
      }).then((response) => response.json()).then(data => {
        observer.next(data);
        observer.complete();
      }).catch(err => observer.error(err));
      
    })

  }
}
