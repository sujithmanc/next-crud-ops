"use client";

export default function Form({ action, defaultValues = {} }) {
  return (
    <form action={action} className="space-y-4 max-w-lg">
      <input
        name="name"
        placeholder="Name"
        defaultValue={defaultValues.name}
        className="input input-bordered w-full"
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        defaultValue={defaultValues.description}
        className="textarea textarea-bordered w-full"
      />

      <input
        name="size"
        placeholder="Size"
        defaultValue={defaultValues.size}
        className="input input-bordered w-full"
        required
      />

      <input
        name="devTeam"
        placeholder="Dev Team"
        defaultValue={defaultValues.devTeam}
        className="input input-bordered w-full"
        required
      />

      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  );
}