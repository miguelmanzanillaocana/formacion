import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDocumentDialogComponent } from './insert-document-dialog.component';

describe('InsertDocumentDialogComponent', () => {
  let component: InsertDocumentDialogComponent;
  let fixture: ComponentFixture<InsertDocumentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertDocumentDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertDocumentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
