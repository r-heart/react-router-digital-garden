import api from "../services/api";
import { setTokenCookie } from "../services/utils";

export const registerOrLogin = async ({ request }) => {
  const fd = await request.formData();
  const submittedUser = Object.fromEntries(fd);
  const { token } = await api.registerUser(submittedUser);

  setTokenCookie(token);

  // TODO: Catch and return errors

  return token;
};
