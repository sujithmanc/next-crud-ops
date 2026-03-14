import Link from "next/link";
import { getAllBookmarks } from "./service";
import BookmarkTable from "./components/BookmarkTable";

export default async function BookmarksPage() {
  const bookmarks = await getAllBookmarks();

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Bookmarks</h1>
        <Link
          href="/bookmarks/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + New Bookmark
        </Link>
      </div>
      <BookmarkTable bookmarks={bookmarks} />
    </div>
  );
}
