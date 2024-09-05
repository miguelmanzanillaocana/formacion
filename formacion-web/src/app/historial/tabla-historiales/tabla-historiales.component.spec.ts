import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaHistorialesComponent } from './tabla-historiales.component';

describe('TablaHistorialesComponent', () => {
  let component: TablaHistorialesComponent;
  let fixture: ComponentFixture<TablaHistorialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaHistorialesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaHistorialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
