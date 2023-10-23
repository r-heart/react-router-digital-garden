import api from "../services/api";

export const registerOrLogin = async ({ request }) => {
  const fd = await request.formData();

  const submittedUser = Object.fromEntries(fd);

  console.log(submittedUser);

  const { token } = await api.registerUser(submittedUser);
  console.log(token);

  return token;
};
