import {Routes} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {BookComponent} from './book/book.component';
import {LibraryComponent} from './library/library.component';

export const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'book/:bookId', component: BookComponent},
  {path: 'library', component: LibraryComponent},
  {path: '**', component: SearchComponent},
];
