import { defer } from "react-router-dom";
import apiService from "../services/api.js";

export const loadThoughts = () => {
  const thoughts = apiService.indexThoughts();

  return defer({ thoughts });
};
