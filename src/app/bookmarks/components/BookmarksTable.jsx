import Link from "next/link";
import DeleteBookmarksButton from "./DeleteBookmarksButton";

export default function BookmarksTable({ bookmarks }) {
  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>Title</th>
          <th>URI</th>
          <th>Alt</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {bookmarks.map((b) => (
          <tr key={b.id}>
            <td>{b.title}</td>
            <td>{b.uri}</td>
            <td>{b.altText}</td>
            <td className="flex gap-2">
              <Link href={`/bookmarks/${b.id}`} className="btn btn-sm">
                View
              </Link>
              <Link href={`/bookmarks/${b.id}/edit`} className="btn btn-sm btn-warning">
                Edit
              </Link>
              <DeleteBookmarksButton id={b.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}