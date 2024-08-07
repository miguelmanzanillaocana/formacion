import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAreaComponent } from './tabla-area.component';

describe('TablaAreaComponent', () => {
  let component: TablaAreaComponent;
  let fixture: ComponentFixture<TablaAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
