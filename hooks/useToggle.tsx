import { useState } from "react";

export default function useToggle(defValue = true) {
  const [value, setValue] = useState(defValue);

  const toggle = () => {
    setValue((prev) => !prev);
  };

  return { toggle, value, setValue };
}
