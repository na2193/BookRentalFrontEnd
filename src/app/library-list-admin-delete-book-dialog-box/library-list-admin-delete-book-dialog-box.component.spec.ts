import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryListAdminDeleteBookDialogBoxComponent } from './library-list-admin-delete-book-dialog-box.component';

describe('LibraryListAdminDeleteBookDialogBoxComponent', () => {
  let component: LibraryListAdminDeleteBookDialogBoxComponent;
  let fixture: ComponentFixture<LibraryListAdminDeleteBookDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryListAdminDeleteBookDialogBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryListAdminDeleteBookDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
