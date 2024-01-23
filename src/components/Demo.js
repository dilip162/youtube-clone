import React, { useMemo, useRef, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [inputText, setInputText] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [state, setState] = useState(0);

  let ref = useRef(0);

  console.log(ref.current);

  const prime = useMemo(() => {
    return findNthPrime(inputText);
  }, [inputText]);

  let val = 0;

  function increaseVal() {
    val = val + 1;
    console.log(val);
  }

  return (
    <div
      className={
        "w-96 h-96 border m-6 p-4 border-black" +
        (isDarkTheme && "bg-black text-white")
      }
    >
      <input
        type="text"
        className="p-1 outline-none mb-6 text-lg border border-gray-600"
        placeholder="enter no."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <h1 className="font-bold">Result : {prime}</h1>
      <h1 className="font-bold">sate : {state}</h1>
      <h1 className="font-bold">Val : {val}</h1>
      <h1 className="font-bold">ref : {ref.current}</h1>

      <button
        className="mt-6 p-2 rounded-md bg-green-500 text-white font-semibold"
        onClick={() => setIsDarkTheme(!isDarkTheme)}
      >
        Switch mode
      </button>

      <button
        className="mt-6 p-2 rounded-md mx-2 bg-yellow-500 font-semibold"
        onClick={() => setState(state + 1)}
      >
        increase state
      </button>

      <button
        className="mt-6 p-2 rounded-md mx-2 bg-pink-500 font-semibold"
        onClick={increaseVal}
      >
        increase val
      </button>

      <button
        className="mt-6 p-2 rounded-md mx-2 bg-purple-500 font-semibold"
        onClick={() => {
          ref.current = ref.current + 1;

          console.log(ref.current);
        }}
      >
        increase ref
      </button>
    </div>
  );
};

export default Demo;
