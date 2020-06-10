import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AddBookmarkDialogComponent } from './add-bookmark-dialog-component/add-bookmark-dialog.component';
import { BookmarksComponent } from './bookmarks-component/bookmarks.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddBookmarkDialogComponent,
    BookmarksComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AddBookmarkDialogComponent
  ]
})
export class BookmarksModule { }
