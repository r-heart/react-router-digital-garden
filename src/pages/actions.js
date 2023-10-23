export const registerOrLogin = async ({ request }) => {
  const fd = await request.formData();

  const submittedUser = Object.fromEntries(fd);

  console.log(submittedUser);
};
