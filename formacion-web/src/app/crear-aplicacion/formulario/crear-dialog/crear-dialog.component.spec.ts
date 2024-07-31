import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCrearAppComponent } from './crear-dialog.component';

describe('DialogCrearAppComponent', () => {
  let component: DialogCrearAppComponent;
  let fixture: ComponentFixture<DialogCrearAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogCrearAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCrearAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
