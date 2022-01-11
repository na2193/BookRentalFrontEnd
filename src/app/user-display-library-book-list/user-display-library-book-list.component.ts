import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Book } from '../_models/book';
import { BookService } from '../_services/book.service';

@Component({
  selector: 'app-user-display-library-book-list',
  templateUrl: './user-display-library-book-list.component.html',
  styleUrls: ['./user-display-library-book-list.component.css']
})
export class UserDisplayLibraryBookListComponent implements OnInit {
  public books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
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

}
