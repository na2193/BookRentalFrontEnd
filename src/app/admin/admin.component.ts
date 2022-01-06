import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Book } from '../_models/book';
import { BookService } from '../_services/book.service';

import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BookDialogAdminComponent } from '../book-dialog-admin/book-dialog-admin.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  bookName: string;
  isbn: string;

  public books: Book[];

  constructor(private bookService: BookService, private formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.getBooks();
  }

  public getBooks(): void {
    this.bookService.getBooks()
      .subscribe((response: Book[]) => {
        this.books = response;
        console.log(this.books);
      },
      (err: HttpErrorResponse) => {
        alert(err.message);
      }
    );
  }

  openDialog(obj: any): void {
    const dialogRef = this.dialog.open(BookDialogAdminComponent, {
      width: '500px',
      data: { obj }
    });
    
  

    dialogRef.afterClosed().subscribe(res => {
      this.isbn = res;
    });
  }


}