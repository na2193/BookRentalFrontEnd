import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryListAdminUpdateBookDialogBoxComponent } from './library-list-admin-update-book-dialog-box.component';

describe('LibraryListAdminUpdateBookDialogBoxComponent', () => {
  let component: LibraryListAdminUpdateBookDialogBoxComponent;
  let fixture: ComponentFixture<LibraryListAdminUpdateBookDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryListAdminUpdateBookDialogBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryListAdminUpdateBookDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
