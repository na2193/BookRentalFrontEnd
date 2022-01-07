import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from '../_models/book';
import { BookService } from '../_services/book.service';

import { MatDialog } from "@angular/material/dialog";
import { LibraryListAdminAddBookDialogBox } from '../library-list-admin-add-book-dialog-box/library-list-admin-add-book-dialog-box.component';
import { LibraryListAdminUpdateBookDialogBoxComponent } from '../library-list-admin-update-book-dialog-box/library-list-admin-update-book-dialog-box.component';
import { LibraryListAdminDeleteBookDialogBoxComponent } from '../library-list-admin-delete-book-dialog-box/library-list-admin-delete-book-dialog-box.component';

@Component({
  selector: 'app-library-list-admin',
  templateUrl: './library-list-admin.component.html',
  styleUrls: ['./library-list-admin.component.css']
})
export class LibraryListAdmin implements OnInit {
  dataSource: Book[] = [];

  public books: Book[];

  constructor(private bookService: BookService, public dialog: MatDialog) { }

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

  openDialog(action, data): void {
    let dialogRef;

    if(action == "Add") {
      dialogRef = this.dialog.open(LibraryListAdminAddBookDialogBox, {
        width: '725px',
        data: data
      });
    }
    else if(action == "Update") {
      dialogRef = this.dialog.open(LibraryListAdminUpdateBookDialogBoxComponent, {
        width: '725px',
        data: data
      });
    }
    else if(action == "Delete") {
      dialogRef = this.dialog.open(LibraryListAdminDeleteBookDialogBoxComponent, {
        width: '500px',
        data: data
      });
    }

    dialogRef.afterClosed().subscribe(result => {
      if(action == "Add") {
        console.log("Adding the Book -> " + result.data.bookName);

        this.bookService.addBook(result.data).subscribe(
          (response: Book) => {
            console.log(response);
            this.getBooks();
            // add a success message popup or something
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        )
      }
      else if(action == "Update") {
        console.log("Updating the Book -> " + result.data.bookName);

        this.bookService.updateBook(result.data).subscribe(
          (response: Book) => {
            console.log(response);
            this.getBooks();
          }
        ),
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      }
      else if(action == "Delete") {
        console.log("Deleting the Book -> " + result.data.bookName);

        this.bookService.deleteBook(result.data.id).subscribe(
          (response: void) => {
            console.log(response);
            this.getBooks();
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        )
      }
    });
  }
}

/*

TO DO:
1. ADD PAGINATION TO THE CARDS, might change the disign since into smaller boxes insted of long rectangles since you will not see alot of info in a page without
scrolling
(might be better to do a table since pagination will also be easeri, can also still have the image of the book. maybe see a way to add a image from file instead of typing it in?)

2. add search functionality

*/