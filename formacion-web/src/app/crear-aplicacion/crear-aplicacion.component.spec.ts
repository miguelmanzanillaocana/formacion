import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAplicacionComponent } from './crear-aplicacion.component';

describe('CrearAplicacionComponent', () => {
  let component: CrearAplicacionComponent;
  let fixture: ComponentFixture<CrearAplicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearAplicacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearAplicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
