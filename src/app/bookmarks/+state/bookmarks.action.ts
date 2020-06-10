import { createAction, props } from '@ngrx/store';
import Bookmark from './bookmarks.model';

const BOOKMARK: string = '[Bookmark]';
const GET_BOOKMARK: string = `${BOOKMARK} - Get`;
const GET_BOOKMARK_BEGIN: string = `${BOOKMARK} - Get: Begin`;
const GET_BOOKMARK_SUCCESS: string = `${BOOKMARK} - Get: Success`;
const CREATE_BOOKMARK: string = `${BOOKMARK} - Create`;
const CREATE_BOOKMARK_BEGIN: string = `${BOOKMARK} - Create: Begin`;
const CREATE_BOOKMARK_SUCCESS: string = `${BOOKMARK} - Create: Success`;
const DELETE_BOOKMARK: string = `${BOOKMARK} - Delete`;
const DELETE_BOOKMARK_BEGIN: string = `${BOOKMARK} - Delete: Begin`;
const DELETE_BOOKMARK_SUCCESS: string = `${BOOKMARK} - Delete: Success`;
const BOOKMARK_ERROR: string = `${BOOKMARK} - Error`;

export const GetBookmarkAction = createAction(GET_BOOKMARK);
export const CreateBookmarkAction = createAction(CREATE_BOOKMARK, props<Bookmark>());
export const DeleteBookmarkAction = createAction(DELETE_BOOKMARK, props<Bookmark>());
export const BeginGetBookmarkAction = createAction(GET_BOOKMARK_BEGIN);
export const SuccessGetBookmarkAction = createAction(GET_BOOKMARK_SUCCESS, props<{ payload: Bookmark[] }>());
export const BeginCreateBookmarkAction = createAction(CREATE_BOOKMARK_BEGIN, props<{ payload: Bookmark }>());
export const SuccessCreateBookmarkAction = createAction(CREATE_BOOKMARK_SUCCESS, props<{ payload: Bookmark }>());
export const BeginDeleteBookmarkAction = createAction(DELETE_BOOKMARK_BEGIN, props<{ payload: Bookmark }>());
export const SuccessDeleteBookmarkAction = createAction(DELETE_BOOKMARK_SUCCESS, props<{ payload: Bookmark }>());
export const ErrorBookmarkAction = createAction(BOOKMARK_ERROR, props<Error>());