import { getBookmark } from "../service";
import BookmarksDetails from "../components/BookmarksDetails";

export default async function Page({ params }) {
  const { id } = await params;
  const bookmark = await getBookmark(id);

  return (
    <div className="p-6">
      <BookmarksDetails bookmark={bookmark} />
    </div>
  );
}