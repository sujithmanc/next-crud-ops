import Link from "next/link";

export default function Table({ games }) {
  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Size</th>
          <th>Dev Team</th>
          <th>Date Created</th>
          <th>Last Updated</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {games.map((g) => (
          <tr key={g.id}>
            <td>{g.id}</td>
            <td>{g.name}</td>
            <td>{g.description}</td>
            <td>{g.size}</td>
            <td>{g.devTeam}</td>
            <td>{g.dateCreated}</td>
            <td>{g.lastUpdated}</td>
            <td className="space-x-2">
              <Link href={`/games/${g.id}`} className="btn btn-sm">View</Link>
              <Link href={`/games/${g.id}/edit`} className="btn btn-sm btn-warning">Edit</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}