import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryListAdmin } from './library-list-admin.component';

describe('AdminComponent', () => {
  let component: LibraryListAdmin;
  let fixture: ComponentFixture<LibraryListAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryListAdmin ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryListAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
