import /**/{Component, OnInit} from '@angular/core';
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

  search: FormControl;

  constructor(public gbooks: GoogleBooksService) {
    this.search = new FormControl('Harry Potter');
  }

  doSearch() {
    if (this.search.value == null) { return; }
    const term = this.search.value.toString().trim();
    if (term.length > 0) {
      this.onSearch(term);
    }
  }

  onSearch(term: string) {
    console.log('onSearch Triggered with : ', term);
    this.gbooks.searchBooks(term);
  }

  ngOnInit() {
  }

}
