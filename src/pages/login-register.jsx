import { Form, useActionData } from "react-router-dom";
import { TextInput } from "../components/form";
import useRegistering from "../hooks/useRegistering";

export default function LoginRegister() {
  const error = useActionData();

  console.log(error, "error");

  const [isRegistering, setIsRegistering] = useRegistering();

  return (
    <Form method="post">
      <h2>{isRegistering ? "Register" : "Login"}</h2>

      <TextInput id="username" />
      <TextInput type="password" id="password" />
      {isRegistering && (
        <TextInput
          id="confirmed-password"
          type="password"
          // Don't require the confirm password field. We will be checking it in 'handleSubmit' anyway.
          required={false}
        />
      )}

      <button type="submit" className="btn">
        {isRegistering ? "Register" : "Login"}
      </button>

      <button
        className="text-orange-500"
        type="button"
        onClick={() => setIsRegistering((prev) => !prev)}
      >
        {isRegistering ? "Already have an account?" : "Don't have an account?"}
      </button>
    </Form>
  );
}
