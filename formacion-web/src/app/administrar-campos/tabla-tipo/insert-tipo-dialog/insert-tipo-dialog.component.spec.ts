import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTipoDialogComponent } from './insert-tipo-dialog.component';

describe('InsertTipoDialogComponent', () => {
  let component: InsertTipoDialogComponent;
  let fixture: ComponentFixture<InsertTipoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertTipoDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertTipoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
