"use server";

import { z } from "zod";
import { createGame, updateGame, deleteGame } from "./service";

export const GameSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  description: z.string().max(2000).optional(),
  size: z.string().min(1, "Size is required").max(50),
  devTeam: z.string().min(1, "Dev team is required").max(255),
});

export async function createGameAction(formData) {
  const data = Object.fromEntries(formData);
  const parsed = GameSchema.safeParse(data);

  if (!parsed.success) {
    return { error: parsed.error.flatten() };
  }

  await createGame(parsed.data);
}

export async function updateGameAction(id, formData) {
  const data = Object.fromEntries(formData);
  const parsed = GameSchema.safeParse(data);

  if (!parsed.success) {
    return { error: parsed.error.flatten() };
  }

  await updateGame(id, parsed.data);
}

export async function deleteGameAction(id) {
  await deleteGame(id);
}