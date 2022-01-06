import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDialogAdminComponent } from './book-dialog-admin.component';

describe('BookDialogAdminComponent', () => {
  let component: BookDialogAdminComponent;
  let fixture: ComponentFixture<BookDialogAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDialogAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDialogAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
