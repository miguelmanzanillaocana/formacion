import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { MatDialogContent } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogActions } from '@angular/material/dialog';
import { MatDialogClose } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DatosService } from '../../../../services/datos.service';
import { ReactiveFormsModule } from '@angular/forms';
import { InsertSubareaDialogComponent } from './insert-subarea-dialog.component';

describe('InsertSubareaDialogComponent', () => {
  let component: InsertSubareaDialogComponent;
  let fixture: ComponentFixture<InsertSubareaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertSubareaDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertSubareaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
