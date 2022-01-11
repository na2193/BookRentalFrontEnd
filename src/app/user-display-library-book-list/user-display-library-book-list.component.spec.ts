import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDisplayLibraryBookListComponent } from './user-display-library-book-list.component';

describe('UserDisplayLibraryBookListComponent', () => {
  let component: UserDisplayLibraryBookListComponent;
  let fixture: ComponentFixture<UserDisplayLibraryBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDisplayLibraryBookListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDisplayLibraryBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
