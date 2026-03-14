"use client"
import { useTransition } from "react";
import { deleteBookmarkAction } from "../actions";


export default function DeleteButton({ id }) {

    const [isPending, startTransition] = useTransition();


    function handleDelete(id) {
        if (!confirm("Delete this bookmark?")) return;
        startTransition(() => deleteBookmarkAction(id));
    }

    return (<button
        onClick={() => handleDelete(id)}
        disabled={isPending}
        className="text-red-600 hover:underline disabled:opacity-50"
    >
        Delete
    </button>);
}