const BASE_URL = "http://localhost:9090/api/bookmarks";

export async function getAllBookmarks() {
  const res = await fetch(BASE_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch bookmarks");
  return res.json();
}

export async function getBookmarkById(id) {
  const url = `${BASE_URL}/${id}`;
  console.info(url);
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch bookmark");
  return res.json();
}

export async function createBookmark(data) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },  
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create bookmark: ", JOSN.stringify(res, null, 2));
  return res.json();
}

export async function updateBookmark(id, data) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update bookmark");
  return res.json();
}

export async function deleteBookmark(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete bookmark");
}
