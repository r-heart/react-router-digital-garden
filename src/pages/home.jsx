import { Suspense } from "react";
import { Await, Form, useLoaderData, useOutletContext } from "react-router-dom";
import Error from "../components/error";
import { TextInput } from "../components/form";
import Loading from "../components/loading";
import ThoughtList from "../components/thoughts/thought-list";
import useSetCurrentUser from "../hooks/use-set-current-user";

export default function Home() {
  const { thoughts } = useLoaderData();
  const [currentUser, setCurrentUser] = useOutletContext();

  useSetCurrentUser(setCurrentUser);
  // useEffect(() => {
  //   setCurrentUser(decodeUserFromTokenCookie());
  // });

  return (
    <>
      {currentUser && (
        <Form method="post">
          <TextInput
            id="thought"
            label="Add a New Thought"
            placeholder="What's on your mind? 🧠 "
          />
          <button type="submit" className="btn">
            Add Thought
          </button>
        </Form>
      )}
      <Suspense fallback={<Loading />}>
        <Await resolve={thoughts} errorElement={<Error />}>
          <h1>{currentUser}</h1>
          <ThoughtList />
        </Await>
      </Suspense>
    </>
  );
}
