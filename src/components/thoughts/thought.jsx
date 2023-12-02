import {
  Link,
  useNavigation,
  useOutletContext,
  useSubmit,
} from "react-router-dom";

export default function Thought({ thought, setThought2Edit }) {
  const navigation = useNavigation();
  const [currentUser] = useOutletContext();
  const submit = useSubmit();

  return (
    <li className="font-medium">
      {thought.thought}
      <small className="block space-x-2 italic">
        <Link to={`/thoughts/${thought.author}`}>{thought.author}</Link>
        <time>{thought.date}</time>
        <time>{thought.time}</time>

        {currentUser === thought.author && (
          <div className="my-2 space-x-2">
            <button
              className="rounded bg-yellow-500 px-4 py-2 text-black"
              onClick={() => {
                setThought2Edit({
                  thought: thought.thought,
                  author: thought.author,
                  id: thought.id,
                });
              }}
            >
              Edit
            </button>
            <button
              className="rounded bg-red-500 px-4 py-2"
              disabled={navigation.state !== "idle"}
              onClick={() => {
                submit(
                  {
                    id: thought.id,
                    author: thought.author,
                  },
                  {
                    method: "DELETE",
                  }
                );
              }}
            >
              Delete
            </button>
          </div>
        )}
      </small>
    </li>
  );
}
