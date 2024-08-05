import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertResponsableDialogComponent } from './insert-responsable-dialog.component';

describe('InsertResponsableDialogComponent', () => {
  let component: InsertResponsableDialogComponent;
  let fixture: ComponentFixture<InsertResponsableDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertResponsableDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertResponsableDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
