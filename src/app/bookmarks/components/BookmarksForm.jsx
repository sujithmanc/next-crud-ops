export default function BookmarksForm({ action, defaultValues = {} }) {
  return (
    <form action={action} className="space-y-4 max-w-md">
      <input
        name="title"
        placeholder="Title"
        defaultValue={defaultValues.title}
        className="input input-bordered w-full"
        required
      />

      <input
        name="uri"
        placeholder="URI"
        defaultValue={defaultValues.uri}
        className="input input-bordered w-full"
        required
      />

      <input
        name="logo"
        placeholder="Logo URL"
        defaultValue={defaultValues.logo}
        className="input input-bordered w-full"
      />

      <input
        name="altText"
        placeholder="Alt Text"
        defaultValue={defaultValues.altText}
        className="input input-bordered w-full"
        maxLength="2"
        minLength="2"
        required
      />

      <input
        name="altTextColor"
        placeholder="#0000FF"
        defaultValue={defaultValues.altTextColor || "#0000FF"}
        className="input input-bordered w-full"
      />

      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}