"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-primary" disabled={pending}>
      {pending ? "Saving..." : "Save"}
    </button>
  );
}

export default function GameForm({ action, initialData }) {
  const [state, formAction] = useActionState(action, { errors: {}, values: {} });

  const values = {
    name: state.values?.name ?? initialData?.name ?? "",
    description: state.values?.description ?? initialData?.description ?? "",
    size: state.values?.size ?? initialData?.size ?? "",
    devTeam: state.values?.devTeam ?? initialData?.devTeam ?? "",
  };

  return (
    <form action={formAction} className="space-y-4">
      <input name="name" defaultValue={values.name} className="input input-bordered w-full" placeholder="Name" />
      {state.errors?.name && <p className="text-red-500">{state.errors.name[0]}</p>}

      <textarea name="description" defaultValue={values.description} className="textarea textarea-bordered w-full" placeholder="Description" />
      {state.errors?.description && <p className="text-red-500">{state.errors.description[0]}</p>}

      <input name="size" defaultValue={values.size} className="input input-bordered w-full" placeholder="Size" />
      {state.errors?.size && <p className="text-red-500">{state.errors.size[0]}</p>}

      <input name="devTeam" defaultValue={values.devTeam} className="input input-bordered w-full" placeholder="Dev Team" />
      {state.errors?.devTeam && <p className="text-red-500">{state.errors.devTeam[0]}</p>}

      <div className="flex gap-2">
        <SubmitButton />
        <a href="/games" className="btn btn-secondary">Cancel</a>
      </div>
    </form>
  );
}
