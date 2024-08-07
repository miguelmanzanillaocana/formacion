import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTecnologiaInterfazDialogComponent } from './insert-tecnologia-interfaz-dialog.component';

describe('InsertTecnologiaInterfazDialogComponent', () => {
  let component: InsertTecnologiaInterfazDialogComponent;
  let fixture: ComponentFixture<InsertTecnologiaInterfazDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertTecnologiaInterfazDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertTecnologiaInterfazDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
