import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '../shared/google-books.service';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

  constructor(public gbooks: GoogleBooksService) {
  }

  next() {
    if (this.gbooks.page >= this.gbooks.totalPages) { return; }
    this.gbooks.page = this.gbooks.page + 1;
  }

  prev() {
    if (this.gbooks.page < 2) { return; }
    this.gbooks.page = this.gbooks.page - 1;
  }


  ngOnInit() {
  }

}
