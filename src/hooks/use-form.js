import { useEffect, useRef, useState } from "react";

export default function useForm(error, isIdle) {
  const [thought2Edit, setThought2Edit] = useState(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    if (!error && isIdle) {
      formRef.current.reset();
      setThought2Edit(null);
    }

    form.elements.namedItem("thought").focus();
  }, [setThought2Edit, error, isIdle]);

  const formRef = useRef(null);

  return { formRef, thought2Edit, setThought2Edit };
}
