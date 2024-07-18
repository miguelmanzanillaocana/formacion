import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonInsertarComponent } from './boton-insertar.component';

describe('BotonInsertarComponent', () => {
  let component: BotonInsertarComponent;
  let fixture: ComponentFixture<BotonInsertarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonInsertarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonInsertarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
