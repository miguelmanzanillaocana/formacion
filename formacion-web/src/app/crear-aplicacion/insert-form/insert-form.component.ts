import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Responsable } from '../../interfaces/responsable';
import { DatosService } from '../../datos.service';
import { CommonModule } from '@angular/common';
import { Criticidad } from '../../interfaces/criticidad';

@Component({
  selector: 'app-insert-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './insert-form.component.html',
  styleUrl: './insert-form.component.css'
})

export class InsertFormComponent {
  datosResp: Responsable[]=[];
  datosCriti: Criticidad[]=[];
  aplicacionForm: FormGroup
  
  ngOnInit(): void{
    this.datosService.obtenerResponsables().subscribe((datosResp: Responsable[]) => {
      this.datosResp = datosResp as Responsable[];
    })
    this.datosService.obtenerCriticidades().subscribe((datosCriti: Criticidad[]) => {
      this.datosCriti = datosCriti as Criticidad[];
    })
  }

  constructor(private datosService: DatosService ,private fb: FormBuilder) {
    this.aplicacionForm = this.fb.group({
      codApli: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
      nombApli: new FormControl(''),
      nombArea: new FormControl(''),
      subArea: new FormControl(''),
      resp: new FormControl(0),
      tecn: new FormControl(0),
      criti: new FormControl(1),
      volEvol: new FormControl(0),
      volUsu: new FormControl(0),
      tipo: new FormControl(0),
      tecnInt: new FormControl(0)
    })
  }

  onSubmit(){
    console.log(this.aplicacionForm.value)
  }

}
