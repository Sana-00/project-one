import React from "react";
import { increaseValue, decreaseValue } from "./Action-creator";
import { useSelector, useDispatch } from "react-redux";
import "./Counter.css";
function Counter() {
  const myState = useSelector((state) => state.ourState.count);
  const dispatch = useDispatch(increaseValue, decreaseValue);
  console.log("object", myState);
  return (
    <div className="counter">
      <h1 className="inc">Q#1 Increment and decrement using redux</h1>

      <button onClick={() => dispatch(increaseValue())}>increment</button>
      <p>{myState}</p>
      <button onClick={() => dispatch(decreaseValue())}>decrement</button>
    </div>
  );
}

export default Counter;
