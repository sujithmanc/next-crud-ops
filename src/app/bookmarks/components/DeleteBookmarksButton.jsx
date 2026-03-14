"use client";

import { useTransition } from "react";
import { deleteBookmarkAction } from "../actions";

export default function DeleteBookmarksButton({ id }) {
  const [pending, startTransition] = useTransition();

  function handleDelete() {
    startTransition(() => {
      deleteBookmarkAction(id);
    });
  }

  return (
    <button
      onClick={handleDelete}
      className="btn btn-sm btn-error"
      disabled={pending}
    >
      Delete
    </button>
  );
}