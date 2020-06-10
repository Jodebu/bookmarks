import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as BookmarkActions from '../ngrx/bookmarks.action';
import Bookmark, { Group } from '../ngrx/bookmarks.model';
import BookmarkState from '../ngrx/bookmarks.state';
import { MatDialog } from '@angular/material/dialog';
import { AddBookmarkDialogComponent } from '../add-bookmark-dialog/add-bookmark-dialog.component';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit, OnDestroy {

  constructor(
    private store: Store<{ bookmarks: BookmarkState }>,
    private dialog: MatDialog
    ) {
    this.bookmark$ = store.pipe(select('bookmarks'));
  }

  bookmark$: Observable<BookmarkState>;
  bookmarkSubscription: Subscription;
  bookmarkList: Bookmark[] = [];
  bookmarkError: Error = null;

  ngOnInit() {
    this.bookmarkSubscription = this.bookmark$
      .pipe(
        map(x => {
          this.bookmarkList = x.bookmarks;
          this.bookmarkError = x.bookmarkError;
        })
      )
      .subscribe();

    this.store.dispatch(BookmarkActions.BeginGetBookmarkAction());
  }

  getGroups(): string[] {
    return Object.values(Group);
  }

  deleteBookmark(bookmark: Bookmark): void {
    this.store.dispatch(BookmarkActions.BeginDeleteBookmarkAction({ payload: bookmark }));
  }

  openAddBookmarkDialog(): void {
    this.dialog.open(AddBookmarkDialogComponent, {
      autoFocus: true,
      disableClose: true
    }).afterClosed().subscribe(
      (bookmark: Bookmark) => {
        if (bookmark) {
          this.store.dispatch(BookmarkActions.BeginCreateBookmarkAction({ payload: bookmark }));
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.bookmarkSubscription) {
      this.bookmarkSubscription.unsubscribe();
    }
  }
}
