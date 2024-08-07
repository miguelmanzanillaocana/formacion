import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaInformesComponent } from './tabla-informes.component';

describe('TablaInformesComponent', () => {
  let component: TablaInformesComponent;
  let fixture: ComponentFixture<TablaInformesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaInformesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaInformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
