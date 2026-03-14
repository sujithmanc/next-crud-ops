import GameForm from "../components/GameForm";
import { createGameAction } from "../actions";

export default function NewGamePage() {
  return <GameForm action={createGameAction} />;
}
