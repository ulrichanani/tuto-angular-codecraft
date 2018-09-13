import { Injectable } from '@angular/core';
import { Book } from './book';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';

@Injectable()
export class GoogleBooksService {
  public loading: boolean = false;
  public initialised: boolean = false;
  public totalItems: number = 0;
  private _page: number = 1;
  public pageSize: number = 10;
  public query: string = '';
  public books: Book[];


  constructor(private http: HttpClient) {
  }

  get startIndex() {
    return this.page * this.pageSize;
  }

  get totalPages() {
    try {
      return Math.ceil(this.totalItems / this.pageSize);
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  get page(): number {
    return this._page;
  }

  set page(val: number) {
    if (val !== this.page) {
      this._page = val;
      this.searchBooks(this.query);
    }
  }


  public searchBooks(queryTitle: string) {
    this.query = queryTitle;
    this.loading = true;
    this.initialised = true;
    this.books = [];
    this.http.get(`${env.api_path}?q=${this.query}&maxResults=${this.pageSize}&startIndex=${this.startIndex}`)
      .pipe(
        tap(res => {
          const data: any = res;
          this.totalItems = data.totadatalItems;
        }),
        map(res => {
          const data: any = res;
          return data.items ? data.items : [];
        }),
        // tap(books => console.log(books)),
        map(items => {
          return items.map(item => this.bookFactory(item));
        }),
        tap(() => this.loading = false),
        // tap(books => console.log(books))
      ).subscribe((books) => this.books = books);
  }

  retrieveBook(bookId: string) {
    return this.http.get(`${env.api_path}/${bookId}`);
  }

  public bookFactory(item: any): Book {
    return new Book(
      item.id,
      item.volumeInfo.title,
      item.volumeInfo.subtitle,
      item.volumeInfo.authors,
      item.volumeInfo.publisher,
      item.volumeInfo.publishedDate,
      item.volumeInfo.description,
      item.volumeInfo.categories ? item.volumeInfo.categories.map((item) => item.split('/').pop().trim()) : ['N/A'],
      item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : '',
      item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : ''
    );
  }
}
