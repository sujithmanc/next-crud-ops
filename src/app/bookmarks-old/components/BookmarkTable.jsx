import Link from "next/link";
import DeleteButton from "./DeleteButton";

export default function BookmarkTable({ bookmarks }) {
  

  if (!bookmarks || bookmarks.length === 0) {
    return <p className="text-gray-500">No bookmarks found.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border">Title</th>
            <th className="p-3 border">URI</th>
            <th className="p-3 border">Logo</th>
            <th className="p-3 border">Alt Text</th>
            <th className="p-3 border">Alt Text Color</th>
            <th className="p-3 border">Date Created</th>
            <th className="p-3 border">Last Updated</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookmarks.map((bookmark) => (
            <tr key={bookmark.id} className="hover:bg-gray-50">
              <td className="p-3 border">{bookmark.title}</td>
              <td className="p-3 border">{bookmark.uri}</td>
              <td className="p-3 border">{bookmark.logo}</td>
              <td className="p-3 border">{bookmark.altText}</td>
              <td className="p-3 border">{bookmark.altTextColor}</td>
              <td className="p-3 border">
                {new Date(bookmark.dateCreated).toLocaleString()}
              </td>
              <td className="p-3 border">
                {new Date(bookmark.lastUpdated).toLocaleString()}
              </td>
              <td className="p-3 border">
                <div className="flex gap-2">
                  <Link
                    href={`/bookmarks/${bookmark.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </Link>
                  <Link
                    href={`/bookmarks/${bookmark.id}/edit`}
                    className="text-yellow-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <DeleteButton id={bookmark.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
