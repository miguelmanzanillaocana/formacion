import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesAplicacionComponent } from './detalles-aplicacion.component';

describe('DetallesAplicacionComponent', () => {
  let component: DetallesAplicacionComponent;
  let fixture: ComponentFixture<DetallesAplicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesAplicacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesAplicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
