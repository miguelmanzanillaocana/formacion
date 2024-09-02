import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerrarSessionComponentComponent } from './cerrar-session-component.component';

describe('CerrarSessionComponentComponent', () => {
  let component: CerrarSessionComponentComponent;
  let fixture: ComponentFixture<CerrarSessionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CerrarSessionComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CerrarSessionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
