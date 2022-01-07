import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Book } from '../_models/book';

interface genreOptions {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-library-list-admin-add-book-dialog-box',
  templateUrl: './library-list-admin-add-book-dialog-box.component.html',
  styleUrls: ['./library-list-admin-add-book-dialog-box.component.css']
})
export class LibraryListAdminAddBookDialogBox {
  local_data: Book;
  selectedValue: any;
  action: string;

  genres: genreOptions[] = [
    {value: "Fiction", viewValue: "Fiction"},
    {value: "Non-Fiction", viewValue: "Non-Fiction"},
    {value: "Historical", viewValue: "Historical"},
    {value: "Young Adult", viewValue: "Young Adult"},
    {value: "Kids", viewValue: "Kids"}
  ]

  constructor( 
    public dialogRef: MatDialogRef<LibraryListAdminAddBookDialogBox>,
    @Optional() @Inject(MAT_DIALOG_DATA) public book: Book) { 
      this.local_data = {...book};
    }

  doAction() {
    this.dialogRef.close({
      data:this.local_data,
    });
  }

  closeDialog() {
    this.dialogRef.close({
      event:'Cancel'
    });
  }

  onChange(ev: any) {
    this.selectedValue = ev.source.selected.viewValue;
    //console.log('User selected option -> ' + this.selectedValue);

    this.local_data.genre = this.selectedValue;
    //console.log(this.local_data);
  }

}
