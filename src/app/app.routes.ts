import {Routes} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {BookComponent} from './book/book.component';
import {LibraryComponent} from './library/library.component';

export const routes: Routes = [
  // {path: '**', component: SearchComponent},
  // {path: '', redirectTo: 'search', pathMatch: 'full'},
  {
    path: 'search',
    component: SearchComponent,
    // canDeactivate: [UnsearchedTermGuard]
  },
  {path: 'book', component: BookComponent},
  {path: 'library', component: LibraryComponent},
];
