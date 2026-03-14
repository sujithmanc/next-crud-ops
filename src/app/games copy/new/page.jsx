import Form from "../components/Form";
import { createGameAction } from "../actions";

export default function Page() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Create Game</h1>
      <Form action={createGameAction} />
    </div>
  );
}