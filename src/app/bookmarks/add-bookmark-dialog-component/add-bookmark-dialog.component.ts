import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import Bookmark, { Group } from '../+state/bookmarks.model';

@Component({
  selector: 'app-add-bookmark-dialog',
  templateUrl: './add-bookmark-dialog.component.html',
  styleUrls: ['./add-bookmark-dialog.component.scss']
})
export class AddBookmarkDialogComponent {

  name: string = '';
  url: string = '';
  group: Group = null;

  constructor(private dialogRef: MatDialogRef<AddBookmarkDialogComponent>) { }

  getGroups(): string[] {
    return Object.values(Group);
  }

  createBookmark() {
    this.dialogRef.close(this.getBookmark());
  }
  
  getBookmark(): Bookmark {
    return {
      name: this.name,
      url: this.url,
      group: this.group
    };
  }
  
  isValid(): boolean {
    return this.name !== '' && this.url !== '' && this.group !== null
  }
  
  close() {
      this.dialogRef.close();
  }
}
