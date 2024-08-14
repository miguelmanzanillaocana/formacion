import { Injectable } from '@angular/core';
import { ComentarioSituacion } from '../models/situaciones';

@Injectable({
  providedIn: 'root'
})

export class ComentarioService {

  comentarios: ComentarioSituacion[] = [];
  idAplic = 0;
  codAplic: string = '';

  getComentarios(): ComentarioSituacion[]{
    return this.comentarios;
  }

  setComentarios(comSit: ComentarioSituacion[]){
    this.comentarios = comSit;
  }

  getIdAplic(): number{
    return this.idAplic;
  }

  setIdAplic(idAplic: number){
    this.idAplic = idAplic;
  }

  getcodAplic(): string{
    return this.codAplic;
  }

  setCodAplic(codAplic: string){
    this.codAplic = codAplic;
  }

  constructor() { }
}
