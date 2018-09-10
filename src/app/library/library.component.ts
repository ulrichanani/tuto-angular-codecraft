import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  books: Book[];

  constructor(private store: Store<AppState>) {
    this.store.select('book').subscribe(res => {
      this.books = res;
    });
  }

  ngOnInit() {
  }

}
