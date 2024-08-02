import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertAreaDialogComponent } from './insert-area-dialog.component';

describe('InsertAreaDialogComponent', () => {
  let component: InsertAreaDialogComponent;
  let fixture: ComponentFixture<InsertAreaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertAreaDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertAreaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
