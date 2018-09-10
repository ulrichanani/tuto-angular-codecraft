import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducer } from './shared/ngrx-library.reducer';

// COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { SearchComponent } from './search/search.component';
import { LibraryComponent } from './library/library.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { GoogleBooksService } from './shared/google-books.service';
import { PagerComponent } from './pager/pager.component';
import { ArrayDisplayPipe } from './array-display/array-display.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookComponent,
    BookListComponent,
    SearchComponent,
    LibraryComponent,
    PagerComponent,
    ArrayDisplayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({
      book: reducer
    })
  ],
  providers: [GoogleBooksService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
