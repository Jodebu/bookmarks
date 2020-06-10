import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import Bookmark, { Group } from '../+state/bookmarks.model';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-bookmark-dialog',
  templateUrl: './add-bookmark-dialog.component.html',
  styleUrls: ['./add-bookmark-dialog.component.scss']
})
export class AddBookmarkDialogComponent {

  form: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    url: ['', [Validators.required, Validators.pattern('https?://.+')]],
    group: ['', Validators.required]
  });

  constructor(
    private dialogRef: MatDialogRef<AddBookmarkDialogComponent>,
    private formBuilder: FormBuilder
    ) { }

  getGroups(): string[] {
    return Object.values(Group);
  }

  createBookmark() {
    this.dialogRef.close(this.getBookmark());
  }
  
  getBookmark(): Bookmark {
    return {
      name: this.form.value.name,
      url: this.form.value.url,
      group: this.form.value.group
    };
  }
  
  isFormValid(): boolean {
    return this.form.valid;
  }
  
  close() {
      this.dialogRef.close();
  }
}
