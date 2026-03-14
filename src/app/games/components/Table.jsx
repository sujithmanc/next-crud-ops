"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { createGame, deleteGame, updateGame } from "../service";

const GameSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  description: z.string().max(2000).optional(),
  size: z.string().min(1, "Size is required").max(50),
  devTeam: z.string().min(1, "Dev team is required").max(255),
});

export async function createGameAction(prevState, formData) {
  const raw = {
    name: formData.get("name"),
    description: formData.get("description"),
    size: formData.get("size"),
    devTeam: formData.get("devTeam"),
  };
  const result = GameSchema.safeParse(raw);
  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors, values: raw };
  }
  await createGame(result.data);
  redirect("/games");
}

export async function updateGameAction(id, prevState, formData) {
  const raw = {
    name: formData.get("name"),
    description: formData.get("description"),
    size: formData.get("size"),
    devTeam: formData.get("devTeam"),
  };
  const result = GameSchema.safeParse(raw);
  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors, values: raw };
  }
  await updateGame(id, result.data);
  redirect("/games");
}

export async function deleteGameAction(id) {
  await deleteGame(id);
  redirect("/games");
}
