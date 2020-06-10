import { Action, createReducer, on } from '@ngrx/store';
import * as BookmarkActions from './bookmarks.action';
import Bookmark from './bookmarks.model';
import BookmarkState, { initializeState } from './bookmarks.state';

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(BookmarkActions.GetBookmarkAction, state => state),
  on(BookmarkActions.CreateBookmarkAction, (state: BookmarkState, item: Bookmark) => {
    return { ...state, bookmarks: [...state.bookmarks, item], bookmarkError: null };
  }),
  on(BookmarkActions.DeleteBookmarkAction, (state: BookmarkState, item: Bookmark) => {
    return { ...state, bookmarks: [...state.bookmarks.filter((bookmark: Bookmark) => bookmark !== item)], bookmarkError: null };
  }),
  on(BookmarkActions.SuccessGetBookmarkAction, (state: BookmarkState, { payload }) => {
    return { ...state, bookmarks: payload };
  }),
  on(BookmarkActions.SuccessCreateBookmarkAction, (state: BookmarkState, { payload }) => {
    return { ...state, bookmarks: [...state.bookmarks, payload], bookmarkError: null };
  }),
  on(BookmarkActions.SuccessDeleteBookmarkAction, (state: BookmarkState, { payload }) => {
    return { ...state, bookmarks: [...state.bookmarks.filter((item: Bookmark) => item !== payload)], bookmarkError: null };
  }),
  on(BookmarkActions.ErrorBookmarkAction, (state: BookmarkState, error: Error) => {
    console.log(error);
    return { ...state, bookmarkError: error };
  })
);

export function BookmarkReducer(state: BookmarkState | undefined, action: Action) {
  return reducer(state, action);
}
