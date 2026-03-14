"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
    >
      {pending ? "Saving..." : "Save"}
    </button>
  );
}

export default function BookmarkForm({ action, initialData }) {
  const [state, formAction] = useActionState(action, { errors: {}, values: {} });

  // After a failed submission, restore what the user typed.
  // On first render, fall back to initialData (edit page prefill).
  const values = {
    title:        state.values?.title        ?? initialData?.title        ?? "",
    uri:          state.values?.uri          ?? initialData?.uri          ?? "",
    logo:         state.values?.logo         ?? initialData?.logo         ?? "",
    altText:      state.values?.altText      ?? initialData?.altText      ?? "",
    altTextColor: state.values?.altTextColor ?? initialData?.altTextColor ?? "",
  };

  return (
    <form action={formAction} className="flex flex-col gap-4 max-w-lg">
      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          name="title"
          defaultValue={values.title}
          key={values.title}         // 👈 forces re-render with restored value
          className="w-full border rounded px-3 py-2"
        />
        {state?.errors?.title && (
          <p className="text-red-500 text-xs mt-1">{state.errors.title[0]}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">URI</label>
        <input
          name="uri"
          defaultValue={values.uri}
          key={values.uri}
          className="w-full border rounded px-3 py-2"
        />
        {state?.errors?.uri && (
          <p className="text-red-500 text-xs mt-1">{state.errors.uri[0]}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Logo</label>
        <input
          name="logo"
          defaultValue={values.logo}
          key={values.logo}
          className="w-full border rounded px-3 py-2"
        />
        {state?.errors?.logo && (
          <p className="text-red-500 text-xs mt-1">{state.errors.logo[0]}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Alt Text</label>
        <input
          name="altText"
          defaultValue={values.altText}
          key={values.altText}
          className="w-full border rounded px-3 py-2"
        />
        {state?.errors?.altText && (
          <p className="text-red-500 text-xs mt-1">{state.errors.altText[0]}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Alt Text Color</label>
        <input
          name="altTextColor"
          defaultValue={values.altTextColor}
          key={values.altTextColor}
          className="w-full border rounded px-3 py-2"
        />
        {state?.errors?.altTextColor && (
          <p className="text-red-500 text-xs mt-1">{state.errors.altTextColor[0]}</p>
        )}
      </div>

      <div className="flex gap-3">
        <SubmitButton />
        <a href="/bookmarks" className="px-4 py-2 border rounded hover:bg-gray-50">
          Cancel
        </a>
      </div>
    </form>
  );
}