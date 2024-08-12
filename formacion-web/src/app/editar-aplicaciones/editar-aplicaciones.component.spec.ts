import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAplicacionesComponent } from './editar-aplicaciones.component';

describe('EditarAplicacionesComponent', () => {
  let component: EditarAplicacionesComponent;
  let fixture: ComponentFixture<EditarAplicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarAplicacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAplicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
