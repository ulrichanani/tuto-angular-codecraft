import {Component, OnInit} from "@angular/core";
import {GoogleBooksService} from '../shared/google-books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(public gbooks: GoogleBooksService) {}

  ngOnInit() {
  }

  formatAuthors(authors: string[]) {
    if (authors == null) { return; }
    let val = '';
    for (let i = 0; i < authors.length - 1; i++) {
      val += `${authors[i]} & `;
    }
    val += `${authors[authors.length - 1]}`;
    return val;
  }

}
