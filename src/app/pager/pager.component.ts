import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '../shared/google-books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

  constructor(public gbooks: GoogleBooksService,
              private router: Router) {
  }

  next() {
    if (this.gbooks.page >= this.gbooks.totalPages) { return; }
    // this.gbooks.page = this.gbooks.page + 1;
    this.router.navigate(['search/', {q: this.gbooks.query, p: Number(this.gbooks.page) + 1}]);
  }

  prev() {
    if (this.gbooks.page < 2) { return; }
    // this.gbooks.page = this.gbooks.page - 1;
    this.router.navigate(['search/', {q: this.gbooks.query, p: Number(this.gbooks.page) - 1}]);
  }


  ngOnInit() {
  }

}
