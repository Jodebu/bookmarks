import Bookmark from './bookmarks.model';

export default interface BookmarkState {
    bookmarks: Bookmark[];
    bookmarkError: Error;
}

export const initializeState: () => BookmarkState = (): BookmarkState => {
    return { bookmarks: [], bookmarkError: null }
};
