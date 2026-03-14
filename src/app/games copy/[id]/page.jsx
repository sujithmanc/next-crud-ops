import { getGame } from "../service";

export default async function Page({ params }) {
  const game = await getGame(params.id);

  return (
    <div className="p-6 space-y-2">
      <h1 className="text-2xl font-bold">{game.name}</h1>
      <p>{game.description}</p>
      <p>Size: {game.size}</p>
      <p>Dev Team: {game.devTeam}</p>
      <p>Date Created: {game.dateCreated}</p>
      <p>Last Updated: {game.lastUpdated}</p>
    </div>
  );
}