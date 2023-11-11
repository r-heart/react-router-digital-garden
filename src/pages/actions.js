import { redirect } from "react-router-dom";
import api from "../services/api";
import {
  decodeUserFromTokenCookie,
  setTokenCookie,
  validateRegistrationPasswords,
} from "../services/utils";

export const mutateThought = async ({ request }) => {
  switch (request.method) {
    case "POST": {
      const fd = await request.formData();
      const thought = fd.get("thought");

      // Revalidate the user's token whenever we submit a thought
      const author = decodeUserFromTokenCookie();

      await api.addThought({ thought, author });
      break;
    }
    case "DELETE": {
      const { id, author } = request.body;
    }
  }
  return redirect("/");
};

export const registerOrLogin = async ({ request }) => {
  const fd = await request.formData();
  const submittedUser = Object.fromEntries(fd);
  const isRegistering = "confirmedPassword" in submittedUser;

  try {
    if (isRegistering)
      validateRegistrationPasswords(
        submittedUser.password,
        submittedUser.confirmedPassword
      );

    const { token } = isRegistering
      ? await api.registerUser(submittedUser)
      : await api.loginUser(submittedUser);

    setTokenCookie(token);
    return redirect("/");
  } catch (error) {
    return error.message;
  }
};
