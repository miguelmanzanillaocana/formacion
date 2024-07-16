import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacionesComponent } from './situaciones.component';

describe('SituacionesComponent', () => {
  let component: SituacionesComponent;
  let fixture: ComponentFixture<SituacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SituacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SituacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
