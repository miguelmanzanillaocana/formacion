import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarCamposComponent } from './administrar-campos.component';

describe('AdministrarCamposComponent', () => {
  let component: AdministrarCamposComponent;
  let fixture: ComponentFixture<AdministrarCamposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrarCamposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrarCamposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
