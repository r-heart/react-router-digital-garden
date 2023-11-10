import { useState } from "react";

export default function useRegistering(initialState = true) {
  const [isRegistering, setIsRegistering] = useState(initialState);

  return [isRegistering, setIsRegistering];
}
