import { Component, Input, OnInit } from '@angular/core';
import { GoogleBooksService } from '../shared/google-books.service';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(public gbooks: GoogleBooksService) {}

  @Input() books: Book[];

  ngOnInit() {
    // console.log('BookList', this.books);
  }

}
