"use server";

import { revalidatePath } from "next/cache";

const BASE_URL = "http://localhost:9090/api/bookmarks";

export async function createBookmarkAction(formData) {
  const data = {
    title: formData.get("title"),
    uri: formData.get("uri"),
    logo: formData.get("logo"),
    altText: formData.get("altText"),
    altTextColor: formData.get("altTextColor"),
  };

  await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  revalidatePath("/bookmarks");
}

export async function updateBookmarkAction(id, formData) {
  const data = {
    title: formData.get("title"),
    uri: formData.get("uri"),
    logo: formData.get("logo"),
    altText: formData.get("altText"),
    altTextColor: formData.get("altTextColor"),
  };

  await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  revalidatePath("/bookmarks");
}

export async function deleteBookmarkAction(id) {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  revalidatePath("/bookmarks");
}