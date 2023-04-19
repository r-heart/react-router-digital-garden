import { useState } from "react";

export default function useRegistering() {
  const [isRegistering, setIsRegistering] = useState(true);

  return [isRegistering, setIsRegistering];
}
