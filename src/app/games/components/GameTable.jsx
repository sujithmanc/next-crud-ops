import Link from "next/link";
import DeleteGameButton from "./GameDeleteButton";

export default function GameTable({ games }) {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Size</th>
            <th>Dev Team</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.id}>
              <td>{game.name}</td>
              <td>{game.description}</td>
              <td>{game.size}</td>
              <td>{game.devTeam}</td>
              <td className="flex gap-2">
                <Link href={`/games/${game.id}`} className="btn btn-info btn-sm">View</Link>
                <Link href={`/games/${game.id}/edit`} className="btn btn-warning btn-sm">Edit</Link>
                <DeleteGameButton id={game.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/games/new" className="btn btn-primary mt-4">Add New Game</Link>
    </div>
  );
}
