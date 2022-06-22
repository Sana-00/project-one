import React, { useState } from "react";
import useCustomHooks from "./CustomHooks";
import "../CustomHooks/Click.css";
function Click() {
  const [count, setCount] = useState(0);
  //Custom HOOK

  useCustomHooks(count);
  return (
    <div className="click">
      <h1 className="hooks">Q#2 CUSTOM HOOKS EXAMPLE</h1>
      <h2>
        why we use ustom hooks<br></br> The main reason to write a custom hook
        is for code reusability.<br></br> For example, instead of writing the
        same code across multiple components that use the same common stateful
        logic (say a “setState” or localStorage logic), you can put that code
        inside a custom hook and reuse it
      </h2>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default Click;
