import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTecnologiaComponent } from './tabla-tecnologia.component';

describe('TablaTecnologiaComponent', () => {
  let component: TablaTecnologiaComponent;
  let fixture: ComponentFixture<TablaTecnologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaTecnologiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaTecnologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
