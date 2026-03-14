"use client";

import { useTransition } from "react";
import { deleteGameAction } from "../actions";


export default function DeleteGameButton({ id }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete(id) {
    if (!confirm("Delete this game?")) return;
    startTransition(() => deleteGameAction(id));
  }

  return (
    <button onClick={() => handleDelete(id)} disabled={isPending} className="btn btn-error btn-sm">
      {isPending ? "Deleting..." : "Delete"}
    </button>
  );
}
