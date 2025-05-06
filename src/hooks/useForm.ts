import { useState } from "react";

export function useForm(initVals: any) {
  const [state, setState] = useState(initVals);

  return [
    state,
    (e: any) => {
      setState((prevState: any) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    },
  ];
}
