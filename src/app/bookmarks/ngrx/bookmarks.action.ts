import { createAction, props } from '@ngrx/store';
import Bookmark from './bookmarks.model';

export const GetBookmarkAction = createAction('[Bookmark] - Get Bookmark');

export const CreateBookmarkAction = createAction(
    '[Bookmark] - Create Bookmark',
    props<Bookmark>()
);

export const DeleteBookmarkAction = createAction(
  '[Bookmark] - Delete Bookmark',
  props<Bookmark>()
);

export const BeginGetBookmarkAction = createAction('[Bookmark] - Begin Get Bookmark');

export const SuccessGetBookmarkAction = createAction(
  '[Bookmark] - Success Get Bookmark',
  props<{ payload: Bookmark[] }>()
);

export const BeginCreateBookmarkAction = createAction(
  '[Bookmark] - Begin Create Bookmark',
  props<{ payload: Bookmark }>()
);

export const SuccessCreateBookmarkAction = createAction(
  '[Bookmark] - Success Create Bookmark',
  props<{ payload: Bookmark }>()
);

export const BeginDeleteBookmarkAction = createAction(
  '[Bookmark] - Begin Delete Bookmark',
  props<{ payload: Bookmark }>()
);

export const SuccessDeleteBookmarkAction = createAction(
  '[Bookmark] - Success Delete Bookmark',
  props<{ payload: Bookmark }>()
);

export const ErrorBookmarkAction = createAction('[Bookmark] - Error', props<Error>());