import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAplicacionesComponent } from './tabla-aplicaciones.component';

describe('TablaDatosComponent', () => {
  let component: TablaAplicacionesComponent;
  let fixture: ComponentFixture<TablaAplicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaAplicacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaAplicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
