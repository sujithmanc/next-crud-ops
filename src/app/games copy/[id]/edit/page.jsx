import { getGame } from "../../service";
import Form from "../../components/Form";
import { updateGameAction } from "../../actions";

export default async function Page({ params }) {
  const game = await getGame(params.id);

  async function action(formData) {
    "use server";
    await updateGameAction(params.id, formData);
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Edit Game</h1>
      <Form action={action} defaultValues={game} />
    </div>
  );
}