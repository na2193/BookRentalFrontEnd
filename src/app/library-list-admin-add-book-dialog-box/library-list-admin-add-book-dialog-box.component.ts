import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormGroup, Validators, FormControl } from '@angular/forms';
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
export class LibraryListAdminAddBookDialogBox implements OnInit {
  local_data: Book;
  selectedValue: any;
  action: string;

  addNewBookForm: FormGroup;

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

  ngOnInit() {
    this.addNewBookForm = new FormGroup({
      bookName: new FormControl('', [Validators.required]),
      authorLastName: new FormControl('', [Validators.required]), 
      authorFirstName: new FormControl('', [Validators.required]), 
      isbn: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.max(9999999999)]), 
      genre: new FormControl('', [Validators.required]), 
      description: new FormControl('', [Validators.required, Validators.maxLength(500)]), 
      numInStock: new FormControl('', [Validators.required, Validators.maxLength(2), Validators.max(50)]), 
      imagePath: new FormControl('')
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.addNewBookForm.controls[controlName].hasError(errorName);
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
