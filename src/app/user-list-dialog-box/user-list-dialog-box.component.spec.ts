import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListDialogBoxComponent } from './user-list-dialog-box.component';

describe('DialogBoxComponent', () => {
  let component: UserListDialogBoxComponent;
  let fixture: ComponentFixture<UserListDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListDialogBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
