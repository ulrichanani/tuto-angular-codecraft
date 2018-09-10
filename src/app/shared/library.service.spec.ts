/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LibraryService } from './library.service';
import { Book } from './book';

function createBookFixture(book_id) {
  return new Book(
    book_id,
    'title',
    'subTitle:',
    ['authors'],
    'publisher',
    'publishDate',
    'description',
    ['categories'],
    'thumbnail',
    'smallThumbnail'
);
}

describe('LibraryService', () => {
  let libraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibraryService]
    });
    libraryService = TestBed.get(LibraryService);
  });


  it('can add a book to the library', () => {
    const book = createBookFixture('book1');
    libraryService.addBook(book);
    expect(libraryService.indexOf(book)).toBeGreaterThanOrEqual(0);
  });

  it('can remove a book to the library', () => {
    const book = createBookFixture('book2');
    libraryService.addBook(book);
    libraryService.removeBook(book);
    expect(libraryService.hasBook('ulrich2')).toBe(false);
  });

  it('checks if a book is already in the library', () => {
    const book = createBookFixture('book3');
    expect(libraryService.indexOf(book)).toBe(-1);
    libraryService.addBook(book);
    expect(libraryService.indexOf(book)).toBeGreaterThanOrEqual(0);
  });

  it('can save and load the books', () => {
    const book = createBookFixture('book4');
    // console.log([book], libraryService.books);
    libraryService.books = [createBookFixture('book4')];
    libraryService.save();
    libraryService.load();
    // console.log([book], libraryService.books);
    expect(libraryService.books).toEqual([book]);
  });
});
