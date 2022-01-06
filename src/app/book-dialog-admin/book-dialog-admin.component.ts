import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Book } from '../_models/book';


@Component({
  selector: 'app-book-dialog-admin',
  templateUrl: './book-dialog-admin.component.html',
  styleUrls: ['./book-dialog-admin.component.css']
})
export class BookDialogAdminComponent implements OnInit {

  // addNewBookForm = this.formBuilder.group({
  //   bookName: ['', Validators.required],
  //   authorLastName: ['', Validators.required],
  //   authorFirstName: ['', Validators.required],
  //   isbn: ['', [Validators.required, Validators.maxLength(15)]],
  //   genre: ['', Validators.required],
  //   description: ['', [Validators.required, Validators.maxLength(500)]],
  //   numInStock: ['', [Validators.required, Validators.maxLength(2)]],
  //   imagePath: [''],
  // }); 

  local_data:any;

  constructor( 
    public dialogRef: MatDialogRef<BookDialogAdminComponent>,
    @Inject(MAT_DIALOG_DATA) public book: Book,
    private formBuilder: FormBuilder
  ) { }

  onNoClick(): void {
    this.dialogRef.close({data:this.local_data});
  }

  ngOnInit() {
  }
}
