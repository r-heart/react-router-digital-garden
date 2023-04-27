import ky from "ky";

const authAPI = ky.create({
  // Hooks allow modifications during the request lifecycle. Hook functions may be async and are run serially.
  // These are 'ky' 🪝 hooks, not React hooks.
  hooks: {
    //  https://github.com/sindresorhus/ky#hooksbeforeerror
    beforeError: [
      async (error) => {
        /**
         * If the request received a response,
         * the error will be of type HTTPError and the Response object will be available at error.response.
         * https://github.com/sindresorhus/ky#hooksbeforeretry
         */
        const { response } = error;
        if (response && response.body) {
          // Server sets `message` property on error.
          const { message } = await response.json();
          throw new Error(
            `Authentication Error: ${message} (${response.status})`
          );
        }

        throw error;
      },
    ],
  },
});

export default {
  indexThoughts() {
    return ky.get(`http://localhost:3001/thoughts`).json();
  },
  async showThoughts(author) {
    const allThoughts = await this.indexThoughts();
    const thoughts4Author = allThoughts.filter(
      (thought) => thought.author === author
    );

    if (!thoughts4Author.length) {
      throw new Error("No thoughts found");
    }

    return thoughts4Author;
  },
  registerUser(newUser) {
    return authAPI
      .post(`http://localhost:3000/users/register`, { json: newUser })
      .json();
  },
  loginUser(user) {
    return authAPI
      .post(`http://localhost:3000/users/login`, { json: user })
      .json();
  },
};
