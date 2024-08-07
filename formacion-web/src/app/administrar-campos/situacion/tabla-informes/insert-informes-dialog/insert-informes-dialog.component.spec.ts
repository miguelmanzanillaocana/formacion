import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertInformesDialogComponent } from './insert-informes-dialog.component';

describe('InsertInformesDialogComponent', () => {
  let component: InsertInformesDialogComponent;
  let fixture: ComponentFixture<InsertInformesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertInformesDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertInformesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
