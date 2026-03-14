import { createBookmarkAction } from "../actions";
import BookmarksForm from "../components/BookmarksForm";

export default function Page() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">New Bookmark</h1>
      <BookmarksForm action={createBookmarkAction} />
    </div>
  );
}