import { useEffect } from "react";
import { decodeUserFromTokenCookie } from "../services/utils";

export default function useSetCurrentUser(setCurrentUser) {
  useEffect(() => {
    setCurrentUser(decodeUserFromTokenCookie());
  }, [setCurrentUser]);
}
