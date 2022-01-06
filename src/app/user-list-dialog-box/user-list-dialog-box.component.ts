import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Role } from '../_models/roles';
import { User } from '../_models/user';

interface roleOptions {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-list-dialog-box',
  templateUrl: './user-list-dialog-box.component.html',
  styleUrls: ['./user-list-dialog-box.component.css']
})
export class UserListDialogBoxComponent  {
  local_data: User;
  defaultSelectRole; string;
  selectedValue: any;
  role: Role;

  roles: roleOptions[] = [
    {value: 'ROLE_ADMIN', viewValue: 'ROLE_ADMIN'},
    {value: 'ROLE_USER', viewValue: 'ROLE_USER'}
  ]

  constructor(
    public dialogRef: MatDialogRef<UserListDialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) user: User) {
    console.log(user);
    this.local_data = {...user};
    // this is to display the role in the defautl select option
    this.defaultSelectRole = this.local_data.roleName;
  }

  doAction() {
    this.dialogRef.close({
      data:this.local_data
    });

    this.local_data.roles.forEach(role => {
      console.log('on close role id -> ' + role.id);
      console.log('on close role name -> ' + role.roleName);
    });
  }

  closeDialog() {
    this.dialogRef.close({
      event:'Cancel'
    });
  }
  
  // getting the user dropdown selection to perform some action
  onChange(ev: any) {
    this.selectedValue = ev.source.selected.viewValue;
    console.log('User selected option -> ' + this.selectedValue);

    this.local_data.roleName = this.selectedValue;
    console.log('this.local_data.roleName = ' + this.local_data.roleName);


    this.local_data.roles.forEach(role => {
      this.role = role;
      
      console.log('original role id -> ' + this.role.id);
      console.log('origial role name -> ' + this.role.roleName);

      // manually setting the role id here since we only have 2 roles
      if(this.selectedValue == 'ROLE_USER')
        this.role.id = 1;
      else if(this.selectedValue == 'ROLE_ADMIN')
        this.role.id = 3; 

      this.role.roleName = this.local_data.roleName;
      console.log('updated role name -> ' + this.role.roleName);

      // updating the actual user data by replacing the array of roles
      this.local_data.roles[0] = this.role;
    });
 }
}
