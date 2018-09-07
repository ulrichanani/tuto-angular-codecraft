import {Component, OnInit} from "@angular/core";
import {GoogleBooksService} from '../shared/google-books.service';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

  constructor(public gbooks: GoogleBooksService) {
  }

  next() {
    if (this.gbooks._page >= this.gbooks.totalPages) { return; }
    this.gbooks._page += 1;
    this.gbooks.searchBooks(this.gbooks.query);
  }

  prev() {
    if (this.gbooks._page < 2) { return; }
    this.gbooks._page -= 1;
    this.gbooks.searchBooks(this.gbooks.query);
  }


  ngOnInit() {
  }

}
