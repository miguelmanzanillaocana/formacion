import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ComentarioSituacion } from '../../../models';
import { DatosService } from '../../../services/datos.service';
import { CommonModule } from '@angular/common';
import { ComentarioService } from '../../../services/comentario.service';
import { HistorialService } from '../../../services/historial.service';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {
  comSit: ComentarioSituacion; 
  datosComentario: ComentarioSituacion[] = [];
  codAplic: string = "";
  comentarioForm: FormGroup;
  email?:string;

  constructor(private datosService: DatosService, private comentarioService: ComentarioService, private fb: FormBuilder, private historialService: HistorialService) {
    this.comentarioForm = this.fb.group({
      comentario: new FormControl('', Validators.required)
    })
    this.comSit = new ComentarioSituacion(comentarioService.getIdAplic(), 1, "")
  }

  ngOnInit() {
    this.datosComentario = this.comentarioService.getComentarios();
    this.codAplic = this.comentarioService.getcodAplic();
  }

  insertarComentario() {
    this.comSit.com = this.comentarioForm.get('comentario')?.value;
    this.comSit.idSit=this.comentarioService.getIdAplic();
    this.datosService.insertarComentarioSituacion(this.comSit).subscribe(comentario => {
      this.email=sessionStorage.getItem('app.email') || "";
      this.historialService.insertarCreadoComentarioAplicacion(this.email,this.codAplic,this.comSit.com).subscribe((res) => {
          console.log(res)
      })
      location.reload();
    });
  }
}
