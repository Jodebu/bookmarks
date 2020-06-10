import { Injectable } from '@angular/core';
import Bookmark from '../ngrx/bookmarks.model';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  bookmarks: Bookmark[] = [];

  constructor() { }

  public getBookmarks(): Observable<Bookmark[]> {
    return of(this.bookmarks);
  }

  public addBookmark(bookmark: Bookmark): Observable<Bookmark> {
    this.bookmarks = [...this.bookmarks, bookmark];
    return of(bookmark);
  }

  public deleteBookmark(bookmark: Bookmark): Observable<Bookmark> {
    this.bookmarks = [...this.bookmarks.filter((item: Bookmark) => bookmark !== item)];
    return of(bookmark);
  }
}
