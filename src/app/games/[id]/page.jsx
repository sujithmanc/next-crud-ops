import { getGameById } from "../service";
import GameDetails from "../components/GameDetails";

export default async function GameDetailsPage({ params }) {
  const { id } = await params;
  const game = await getGameById(id);
  return <GameDetails game={game} />;
}
