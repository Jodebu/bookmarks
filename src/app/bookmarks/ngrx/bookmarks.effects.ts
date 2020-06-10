import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as BookmarkActions from './bookmarks.action';
import Bookmark from './bookmarks.model';
import { BookmarkService } from 'src/app/bookmarks/services/bookmark.service';

@Injectable()
export class BookmarkEffects {
  constructor(private bookmarkService: BookmarkService, private action$: Actions) {}

  GetBookmarks$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(BookmarkActions.BeginGetBookmarkAction),
      mergeMap(() =>
        this.bookmarkService.getBookmarks().pipe(
          map((data: Bookmark[]) => {
              return BookmarkActions.SuccessGetBookmarkAction({ payload: data });
            }),
            catchError((error: Error) => {
              return of(BookmarkActions.ErrorBookmarkAction(error));
            })
        )
      )
    )
  );

  CreateBookmarks$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(BookmarkActions.BeginCreateBookmarkAction),
      mergeMap((action: any) =>
        this.bookmarkService.addBookmark(action.payload).pipe(
          map((data: Bookmark) => {
              return BookmarkActions.SuccessCreateBookmarkAction({ payload: data });
            }),
            catchError((error: Error) => {
              return of(BookmarkActions.ErrorBookmarkAction(error));
            })
        )
      )
    )
  );

  DeleteBookmarks$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(BookmarkActions.BeginDeleteBookmarkAction),
      mergeMap((action: any) =>
        this.bookmarkService.deleteBookmark(action.payload).pipe(
          map((data: Bookmark) => {
              return BookmarkActions.SuccessDeleteBookmarkAction({ payload: data });
            }),
            catchError((error: Error) => {
              return of(BookmarkActions.ErrorBookmarkAction(error));
            })
        )
      )
    )
  );
}