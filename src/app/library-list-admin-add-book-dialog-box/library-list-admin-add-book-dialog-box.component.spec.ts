import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryListAdminAddBookDialogBox } from './library-list-admin-add-book-dialog-box.component';

describe('BookDialogAdminComponent', () => {
  let component: LibraryListAdminAddBookDialogBox;
  let fixture: ComponentFixture<LibraryListAdminAddBookDialogBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryListAdminAddBookDialogBox ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryListAdminAddBookDialogBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
