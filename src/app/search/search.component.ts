import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '../shared/google-books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  frm: FormGroup;
  searchInput: FormControl;

  constructor(public gbooks: GoogleBooksService,
              private route: ActivatedRoute,
              private router: Router) {

    this.searchInput = new FormControl('');
    this.frm = new FormGroup({
      search: this.searchInput
    });

    this.route.params.subscribe(params => {
      if (params['q']) {
        this.searchInput.setValue(params['q']);
        this.doSearch(params['q'], params['p']);
      } else if (this.gbooks.query) {
        this.searchInput.setValue(this.gbooks.query);
      }
    });
  }

  ngOnInit() {
  }

  doSearch(query: string, page: number) {
    this.gbooks.query = query;
    this.gbooks.page = page;
  }

  onSearch() {
    console.log(this.searchInput.value);
    this.router.navigate(['search/', {q: this.searchInput.value, p: 1}]);
  }

}
