import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as BookmarkActions from '../+state/bookmarks.action';
import Bookmark, { Group } from '../+state/bookmarks.model';
import BookmarkState from '../+state/bookmarks.state';
import { MatDialog } from '@angular/material/dialog';
import { AddBookmarkDialogComponent } from '../add-bookmark-dialog-component/add-bookmark-dialog.component';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit, OnDestroy {
  
  bookmark$: Observable<BookmarkState>;
  bookmarkSubscription: Subscription;
  bookmarkList: Bookmark[] = [];
  bookmarkError: Error = null;

  constructor(
    private store: Store<{ bookmarks: BookmarkState }>,
    private dialog: MatDialog
    ) {
    this.bookmark$ = store.pipe(select('bookmarks'));
  }

  ngOnInit() {
    this.bookmarkSubscription = this.bookmark$
      .pipe(
        map((state: BookmarkState) => {
          this.bookmarkList = state.bookmarks;
          this.bookmarkError = state.bookmarkError;
        })
      )
      .subscribe();

    this.store.dispatch(BookmarkActions.BeginGetBookmarkAction());
  }

  getGroups(): string[] {
    return Object.values(Group);
  }
  
  openAddBookmarkDialog(): void {
    this.dialog.open(AddBookmarkDialogComponent, {
      autoFocus: true,
      disableClose: true
    }).afterClosed()
      .subscribe((bookmark: Bookmark) => {
        if (bookmark) {
          this.store.dispatch(BookmarkActions.BeginCreateBookmarkAction({ payload: bookmark }));
        }
      }
    );
  }

  deleteBookmark(bookmark: Bookmark): void {
    this.store.dispatch(BookmarkActions.BeginDeleteBookmarkAction({ payload: bookmark }));
  }

  ngOnDestroy() {
    if (this.bookmarkSubscription) {
      this.bookmarkSubscription.unsubscribe();
    }
  }
}
