import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTipoComponent } from './tabla-tipo.component';

describe('TablaTipoComponent', () => {
  let component: TablaTipoComponent;
  let fixture: ComponentFixture<TablaTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaTipoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
