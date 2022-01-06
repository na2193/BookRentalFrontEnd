import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListDeleteDialogBox } from './user-list-delete-dialog-box.component';

describe('DeleteDialogBoxComponent', () => {
  let component: UserListDeleteDialogBox;
  let fixture: ComponentFixture<UserListDeleteDialogBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListDeleteDialogBox ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListDeleteDialogBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
