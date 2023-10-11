import { defer } from "react-router-dom";
import apiService from "../services/apiService";

export const loadThoughts = () => {
  const thoughts = apiService.indexThoughts();

  return defer({ thoughts });
};
