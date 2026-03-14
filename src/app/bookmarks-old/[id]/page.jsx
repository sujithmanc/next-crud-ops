import { getBookmarkById } from "../service";
import BookmarkDetails from "../components/BookmarkDetails";

export default async function BookmarkDetailsPage({ params }) {
  const { id } = await params;
  const bookmark = await getBookmarkById(id);

  

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Bookmark Details</h1>
      <BookmarkDetails bookmark={bookmark} />
    </div>
  );
}
