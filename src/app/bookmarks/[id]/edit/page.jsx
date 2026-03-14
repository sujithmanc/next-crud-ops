import { getBookmark } from "../../service";
import { updateBookmarkAction } from "../../actions";
import BookmarksForm from "../../components/BookmarksForm";

export default async function Page({ params }) {
  const bookmark = await getBookmark(params.id);

  const action = updateBookmarkAction.bind(null, params.id);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Bookmark</h1>
      <BookmarksForm action={action} defaultValues={bookmark} />
    </div>
  );
}