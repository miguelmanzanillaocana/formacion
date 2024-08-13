import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ComentarioSituacion } from '../../../models/situaciones';
import { DatosService } from '../../../services/datos.service';
import { CommonModule } from '@angular/common';
import { ComentarioService } from '../../../services/comentario.service';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {
  comSit = new ComentarioSituacion(0, 1, "")
  datosComentario: ComentarioSituacion[] = [];
  codAplic: string = "";
  comentarioForm: FormGroup;

  constructor(private datosService: DatosService, private comentarioService: ComentarioService, private fb: FormBuilder) {
    this.comentarioForm = this.fb.group({
      comentario: new FormControl('', Validators.required)
    })

    this.datosService.obtenerIdSitByCod(this.codAplic).subscribe(idSit => {
      this.comSit.idSit = idSit as number;
    })
  }

  ngOnInit() {
    this.datosComentario = this.comentarioService.getComentarios();
    this.codAplic = this.comentarioService.getcodAplic();
  }

  insertarComentario() {
    this.comSit.com = this.comentarioForm.get('comentario')?.value;
    console.log(this.comSit)

    this.datosService.insertarComentarioSituacion(this.comSit).subscribe(comentario => {
      location.reload();
    });
  }
}
