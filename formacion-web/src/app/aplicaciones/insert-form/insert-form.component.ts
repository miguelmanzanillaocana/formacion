import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-insert-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './insert-form.component.html',
  styleUrl: './insert-form.component.css'
})
export class InsertFormComponent {

  aplicacionForm: FormGroup;
  
  constructor(private fb: FormBuilder){
    this.aplicacionForm = this.fb.group({
      codApli: new FormControl(''),
      nombApli: new FormControl(``)
    })
  }

}
