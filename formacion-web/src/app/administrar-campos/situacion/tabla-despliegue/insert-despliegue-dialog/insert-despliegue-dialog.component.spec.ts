import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDespliegueDialogComponent } from './insert-despliegue-dialog.component';

describe('InsertDespliegueDialogComponent', () => {
  let component: InsertDespliegueDialogComponent;
  let fixture: ComponentFixture<InsertDespliegueDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertDespliegueDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertDespliegueDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
