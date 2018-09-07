import {Component, OnInit} from '@angular/core';
import {GoogleBooksService} from '../shared/google-books.service';
import {Book} from '../shared/book';
import {Router, ActivatedRoute} from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public gbooks: GoogleBooksService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(params => {
      // console.log(params);
      if (params['term']) {
        this.doSearch(params['term']); }
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
