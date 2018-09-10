import { Book } from './book';
import * as BookActions from './ngrx-library.actions';


export function reducer(state: Book[] = [], action: BookActions.Actions) {

  switch (action.type) {
    case BookActions.ADD_BOOK:
      console.log(action.payload);
      return [...state, action.payload];

    case BookActions.REMOVE_BOOK:
      console.log(action.payload);
      state.splice(action.payload, 1);
      return state;

    default:
      return state;
  }
}
