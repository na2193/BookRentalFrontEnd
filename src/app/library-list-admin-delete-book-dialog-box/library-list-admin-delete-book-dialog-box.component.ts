import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from '../_models/book';

@Component({
  selector: 'app-library-list-admin-delete-book-dialog-box',
  templateUrl: './library-list-admin-delete-book-dialog-box.component.html',
  styleUrls: ['./library-list-admin-delete-book-dialog-box.component.css']
})
export class LibraryListAdminDeleteBookDialogBoxComponent  {
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<LibraryListAdminDeleteBookDialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) book: Book) {
    console.log(book);
    this.local_data = {...book};
  }

  deleteBook() {
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
