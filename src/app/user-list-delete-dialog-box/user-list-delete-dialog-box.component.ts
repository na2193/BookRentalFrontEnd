import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../_models/user';

@Component({
  selector: 'app-user-list-delete-dialog-box.component',
  templateUrl: './user-list-delete-dialog-box.component.html',
  styleUrls: ['./user-list-delete-dialog-box.component.css']
})
export class UserListDeleteDialogBox  {
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<UserListDeleteDialogBox>,
    @Optional() @Inject(MAT_DIALOG_DATA) user: User) {
    console.log(user);
    this.local_data = {...user};
  }

  deleteUser(){
    this.dialogRef.close({
      data:this.local_data
    });
  }

  closeDialog(){
    this.dialogRef.close({
      event:'Cancel'
    });
  }
 

}
