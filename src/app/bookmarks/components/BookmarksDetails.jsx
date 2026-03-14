export default function BookmarksDetails({ bookmark }) {
  return (
    <div className="p-4 border rounded space-y-2 max-w-md">
      <h2 className="text-xl font-bold">{bookmark.title}</h2>
      <p><strong>URI:</strong> {bookmark.uri}</p>
      <p><strong>Alt Text:</strong> {bookmark.altText}</p>
      <p><strong>Color:</strong> {bookmark.altTextColor}</p>
      {bookmark.logo && (
        <img src={bookmark.logo} alt={bookmark.title} className="w-16 h-16" />
      )}
    </div>
  );
}