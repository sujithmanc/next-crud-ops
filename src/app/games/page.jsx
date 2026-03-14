import Table from "../games copy/components/Table";
import { getGames } from "./service";
import Link from "next/link";

export default async function Page() {
  const games = await getGames();

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Games</h1>
        <Link href="/games/new" className="btn btn-primary">New Game</Link>
      </div>
      <Table games={games} />
    </div>
  );
}