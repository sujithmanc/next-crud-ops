import { getBookmarks } from "./service";
import BookmarksTable from "./components/BookmarksTable";
import Link from "next/link";

export default async function Page() {
  const bookmarks = await getBookmarks();

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Bookmarks</h1>
        <Link href="/bookmarks/new" className="btn btn-primary">
          New Bookmark
        </Link>
      </div>
      <BookmarksTable bookmarks={bookmarks} />
    </div>
  );
}