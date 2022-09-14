import { useState } from "react";

export function useC() {
  const [countB, setCountB] = useState(count);
  const onChange = (e) => {
    setCountB(e.target.value);
  };
  return { countB, setCountB, onChange };
}
