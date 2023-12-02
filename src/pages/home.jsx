import { Suspense, useState } from "react";
import {
  Await,
  Form,
  useLoaderData,
  useNavigation,
  useOutletContext,
} from "react-router-dom";
import Error from "../components/error";
import { TextInput } from "../components/form";
import Loading from "../components/loading";
import ThoughtList from "../components/thoughts/thought-list";
import useClearAndFocus from "../hooks/use-clear-and-focus.js";
import useError from "../hooks/use-error";
import useSetCurrentUser from "../hooks/use-set-current-user";

export default function Home() {
  const [thought2Edit, setThought2Edit] = useState();
  const { thoughts } = useLoaderData();
  const navigation = useNavigation();
  const [currentUser, setCurrentUser] = useOutletContext();

  const { error, isErrorShown, setIsErrorShown } = useError();
  useSetCurrentUser(setCurrentUser);

  const isIdle = navigation.state === "idle";

  const formRef = useClearAndFocus(error, isIdle);

  const { thought } = thought2Edit || {};

  return (
    <>
      {currentUser && (
        <Form
          method="POST"
          onSubmit={() => {
            setIsErrorShown(false);
          }}
          ref={formRef}
        >
          <TextInput
            id="thought"
            label="Add a New Thought"
            placeholder={`Hi ${currentUser}, what's on your mind 🧠 ?`}
            defaultValue={thought}
          />

          {error && isErrorShown && <p className="error">{error}</p>}
          <button type="submit" className="btn" disabled={!isIdle}>
            Add Thought
          </button>
        </Form>
      )}
      <Suspense fallback={<Loading />}>
        <Await resolve={thoughts} errorElement={<Error />}>
          <h1>{currentUser}</h1>
          <ThoughtList setThought2Edit={setThought2Edit} />
        </Await>
      </Suspense>
    </>
  );
}
