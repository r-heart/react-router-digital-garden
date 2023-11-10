import { useEffect, useState } from "react";
import { useActionData } from "react-router-dom";

export default function useError() {
  const error = useActionData();

  const [isErrorShown, setIsErrorShown] = useState(false);

  useEffect(() => {
    if (error) setIsErrorShown(true);
  }, [error]);

  return { error, isErrorShown, setIsErrorShown };
}
