import Link from "next/link";

export default function BookmarkDetails({ bookmark }) {
  return (
    <div className="max-w-lg">
      <dl className="flex flex-col gap-4">
        <div>
          <dt className="text-sm font-medium text-gray-500">Title</dt>
          <dd className="mt-1">{bookmark.title}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">URI</dt>
          <dd className="mt-1">
            <a href={bookmark.uri} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">
              {bookmark.uri}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Logo</dt>
          <dd className="mt-1">{bookmark.logo}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Alt Text</dt>
          <dd className="mt-1">{bookmark.altText}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Alt Text Color</dt>
          <dd className="mt-1">{bookmark.altTextColor}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Date Created</dt>
          <dd className="mt-1">{new Date(bookmark.dateCreated).toLocaleString()}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Last Updated</dt>
          <dd className="mt-1">{new Date(bookmark.lastUpdated).toLocaleString()}</dd>
        </div>
      </dl>

      <div className="flex gap-3 mt-6">
        <Link
          href={`/bookmarks/${bookmark.id}/edit`}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Edit
        </Link>
        <Link
          href="/bookmarks"
          className="px-4 py-2 border rounded hover:bg-gray-50"
        >
          Back
        </Link>
      </div>
    </div>
  );
}
