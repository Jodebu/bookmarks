import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AddBookmarkDialogComponent } from './add-bookmark-dialog/add-bookmark-dialog.component';
import { BookmarksComponent } from './component/bookmarks.component';

@NgModule({
  declarations: [
    AddBookmarkDialogComponent,
    BookmarksComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [
    AddBookmarkDialogComponent
  ]
})
export class BookmarksModule { }
