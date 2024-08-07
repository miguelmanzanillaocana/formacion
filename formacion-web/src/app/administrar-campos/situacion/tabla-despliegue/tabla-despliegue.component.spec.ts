import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDespliegueComponent } from './tabla-despliegue.component';

describe('TablaDespliegueComponent', () => {
  let component: TablaDespliegueComponent;
  let fixture: ComponentFixture<TablaDespliegueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaDespliegueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaDespliegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
