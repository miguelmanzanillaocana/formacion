import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTecnologiaDialogComponent } from './insert-tecnologia-dialog.component';

describe('InsertTecnologiaDialogComponent', () => {
  let component: InsertTecnologiaDialogComponent;
  let fixture: ComponentFixture<InsertTecnologiaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertTecnologiaDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertTecnologiaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
