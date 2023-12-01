import { useEffect, useRef } from "react";

export default function useClearAndFocus(error, isIdle) {
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    if (!error && isIdle) formRef.current.reset();

    form.elements.namedItem("thought").focus();
  });

  const formRef = useRef(null);

  return formRef;
}
