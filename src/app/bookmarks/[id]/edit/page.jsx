import { getBookmarkById } from "../../service";
import BookmarkForm from "../../components/BookmarkForm";
import { updateBookmarkAction } from "../../actions";

export default async function EditBookmarkPage({ params }) {
  const { id } = await params;  
  const bookmark = await getBookmarkById(id);
  console.info(bookmark);
  const boundAction = updateBookmarkAction.bind(null, id);  

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Edit Bookmark</h1>
      <BookmarkForm action={boundAction} initialData={bookmark} />
    </div>
  );
}
