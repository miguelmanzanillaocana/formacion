import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSituacionesComponent } from './tabla-situaciones.component';

describe('TablaSituacionesComponent', () => {
  let component: TablaSituacionesComponent;
  let fixture: ComponentFixture<TablaSituacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaSituacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaSituacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
