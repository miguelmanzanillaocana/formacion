import { Injectable } from '@angular/core';
import { ComentarioSituacion } from '../models/situaciones';

@Injectable({
  providedIn: 'root'
})

export class ComentarioService {

  comentarios: ComentarioSituacion[] = [];
  codAplic: string = '';

  getComentarios(): ComentarioSituacion[]{
    return this.comentarios;
  }

  setComentarios(comSit: ComentarioSituacion[]){
    this.comentarios = comSit;
  }

  getcodAplic(): string{
    return this.codAplic;
  }

  setCodAplic(codAplic: string){
    this.codAplic = codAplic;
  }

  constructor() { }
}
