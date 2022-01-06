import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { UserListDialogBoxComponent } from '../user-list-dialog-box/user-list-dialog-box.component';
import { UserListDeleteDialogBox } from '../user-list-delete-dialog-box/user-list-delete-dialog-box.component';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../_models/user';
import { Role } from '../_models/roles';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  dataSource: User[] = [];
  roles: Role[] = [];
  columnsToDisplay = ['id', "firstName", "lastName" ,"username", "email", "roles", "action"];
  
  constructor(private userService: UserService, public dialog: MatDialog) { }
  
  public getUsers(): void {
    this.userService.getUsers().subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      
      let updatedRoleName;

      this.dataSource.forEach(user => {
        //console.log('User Id = ' + user.id);
        
        user.roles.forEach(role => {
          //console.log('ROLE is = ' + role.roleName);
          updatedRoleName = role.roleName;
          //console.log('User RoleName = ' + updatedRoleName);
        });

        user.roleName = updatedRoleName;
       // console.log('Updated user.rolename = ' + user.roleName);
      });
    });
  }

  ngOnInit(): void {
   this.getUsers();
  }

  openDialog(action, data) {
    let dialogRef;
    if(action == "Update") {
      dialogRef = this.dialog.open(UserListDialogBoxComponent, {
        width: '500px',
        data:data
      });
    }
    else if(action == "Delete") {
      dialogRef = this.dialog.open(UserListDeleteDialogBox, {
        width: '500px',
        data:data
      });
    }

    dialogRef.afterClosed().subscribe(result => {
      if(action == 'Delete') {
        console.log("Deleting the user with ID -> " + result.data.id);
        this.userService.deleteUser(result.data.id).subscribe(
          (response: void) => {
            console.log(response);
            this.getUsers();
            alert("Successfully deleted user");
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        )
      }
      else if(action == 'Update') {
        console.log("Updating the user with ID -> " + result.data.id);
        this.userService.updateUser(result.data).subscribe(
          (response: User) => {
            console.log(response);
            this.getUsers();
          }
        ),
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
      }
    });
  }

}
