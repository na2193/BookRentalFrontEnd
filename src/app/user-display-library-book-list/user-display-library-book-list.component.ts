import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Book } from '../_models/book';
import { BookService } from '../_services/book.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-display-library-book-list',
  templateUrl: './user-display-library-book-list.component.html',
  styleUrls: ['./user-display-library-book-list.component.css']
})
export class UserDisplayLibraryBookListComponent implements OnInit {
  public books: Book[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  dataSource: MatTableDataSource<Book>;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
   
  }

  public getBooks(): void {
    this.bookService.getBooks()
      .subscribe((response: Book[]) => {
        this.books = response;

        // setting up the pagination data
        this.dataSource = new MatTableDataSource<Book>(response);
        this.dataSource.paginator = this.paginator;
        this.obs = this.dataSource.connect();
        
        console.log(this.books);
      },
      (err: HttpErrorResponse) => {
        alert(err.message);
      }
    );
  }




}
