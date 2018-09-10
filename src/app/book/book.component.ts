import { Component } from '@angular/core';
import { Book } from '../shared/book';
import { GoogleBooksService } from '../shared/google-books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LibraryService } from 'src/app/shared/library.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  book: Observable<Book>;

  constructor(public gbooks: GoogleBooksService,
              public library: LibraryService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(params => {
      // console.log(params['bookId']);
      if (params['bookId']) {
        this.getBook(params['bookId']);
      }
    });
  }

  getBook(bookId: string) {
    this.book = this.gbooks.retrieveBook(bookId).pipe(
      map(bk => this.gbooks.bookFactory(bk))
    );
  }

  hasBook(book: Book): boolean {
    return this.library.hasBook(book);
  }

  addBook(book: Book) {
    this.library.addBook(book);
  }

  removeBook(book: Book) {
    this.library.removeBook(book);
  }
}
