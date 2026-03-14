import { getGameById } from "../../service";
import GameForm from "../../components/GameForm";
import { updateGameAction } from "../../actions";

export default async function EditGamePage({ params }) {
  const { id } = await params;
  const game = await getGameById(id);
  const boundAction = updateGameAction.bind(null, id);

  return <GameForm action={boundAction} initialData={game} />;
}
