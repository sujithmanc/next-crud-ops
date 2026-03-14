import Link from "next/link";

export default function GameDetails({ game }) {
  return (
    <div className="card bg-base-200 p-6">
      <h2 className="card-title">{game.name}</h2>
      <p>{game.description}</p>
      <p><strong>Size:</strong> {game.size}</p>
      <p><strong>Dev Team:</strong> {game.devTeam}</p>
      <div className="flex gap-2 mt-4">
        <Link href={`/games/${game.id}/edit`} className="btn btn-warning">Edit</Link>
        <Link href="/games" className="btn btn-secondary">Back</Link>
      </div>
    </div>
  );
}
