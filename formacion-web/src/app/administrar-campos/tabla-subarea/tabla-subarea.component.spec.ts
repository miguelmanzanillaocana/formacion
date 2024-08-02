import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSubareaComponent } from './tabla-subarea.component';

describe('TablaSubareaComponent', () => {
  let component: TablaSubareaComponent;
  let fixture: ComponentFixture<TablaSubareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaSubareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaSubareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
