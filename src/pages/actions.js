import api from "../services/api";

export const registerOrLogin = async ({ request }) => {
  const fd = await request.formData();

  const submittedUser = Object.fromEntries(fd);

  console.log(submittedUser);

  const stuff = await api.registerUser(submittedUser);
  console.log(stuff);
};
