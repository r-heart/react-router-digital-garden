import apiService from "../services/api.js";

export const loadThoughts =
  //  Destructure the 'params' object from the request object ('params.author')
  ({ params }) => {
    const { author } = params;
    const thoughts = author
      ? apiService.showThoughts(author)
      : apiService.indexThoughts();

    return { thoughts };
  };
