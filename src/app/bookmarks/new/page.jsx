import BookmarkForm from "../components/BookmarkForm";
import { createBookmarkAction } from "../actions";

export default function NewBookmarkPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">New Bookmark</h1>
      <BookmarkForm action={createBookmarkAction} />
    </div>
  );
}
