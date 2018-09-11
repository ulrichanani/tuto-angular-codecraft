import { Component } from '@angular/core';
import { Book } from '../shared/book';
import { GoogleBooksService } from '../shared/google-books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import * as BookActions from '../shared/ngrx-library.actions';
import { NgProgress } from '@ngx-progressbar/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  book: Observable<Book>;
  books: Book[];

  constructor(public gbooks: GoogleBooksService,
              private route: ActivatedRoute,
              private router: Router,
              private store: Store<AppState>,
              public progress: NgProgress) {
    this.route.params.subscribe(params => {
      if (params['bookId']) {
        this.getBook(params['bookId']);
      }
    });
    store.select('book').subscribe(res => {
      this.books = res;
    });
  }

  getBook(bookId: string) {
    this.book = this.gbooks.retrieveBook(bookId).pipe(
      map(bk => this.gbooks.bookFactory(bk))
    );
  }

  addBook(book: Book) {
    this.store.dispatch(new BookActions.AddBook(book));
  }

  removeBook(book: Book) {
    this.store.dispatch(new BookActions.RemoveBook(this.indexOf(book)));
  }

  hasBook(book: Book): boolean {
    return this.indexOf(book) !== -1;
  }

  indexOf(book: Book): number {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id === book.id) {
        return i;
      }
    }
    return -1;
  }

  loaded(): void {
    this.progress.complete();
  }
}
