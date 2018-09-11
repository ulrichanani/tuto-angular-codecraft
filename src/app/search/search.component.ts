import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '../shared/google-books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgProgress } from '@ngx-progressbar/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public gbooks: GoogleBooksService,
              private route: ActivatedRoute,
              private router: Router,
              public progress: NgProgress) {
    this.route.params.subscribe(params => {
      if (params['term']) {
        this.progress.start();
        this.doSearch(params['term']);
      }
    });
  }

  ngOnInit() {
  }

  doSearch(term: string) {
    this.gbooks.searchBooks(term);
  }

  onSearch(term: string) {
    this.router.navigate(['search', {term: term}]);
  }

}
