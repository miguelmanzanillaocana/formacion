import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-insert-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './insert-form.component.html',
  styleUrl: './insert-form.component.css'
})
export class InsertFormComponent {

  aplicacionForm: FormGroup
  
  constructor(private fb: FormBuilder) {
    this.aplicacionForm = this.fb.group({
      codApli: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
      nombApli: new FormControl(''),
      nombArea: new FormControl(''),
      subArea: new FormControl(''),
      resp: new FormControl('')
    })
  }

  onSubmit(){
    console.log(this.aplicacionForm.value)
  }

}
