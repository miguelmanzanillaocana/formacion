import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTecnologiaInterfazComponent } from './tabla-tecnologia-interfaz.component';

describe('TablaTecnologiaInterfazComponent', () => {
  let component: TablaTecnologiaInterfazComponent;
  let fixture: ComponentFixture<TablaTecnologiaInterfazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaTecnologiaInterfazComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaTecnologiaInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
