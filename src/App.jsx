import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function decreaseHandler() {
    setCount(count - 1);
  }

  function increaseHandler() {
    setCount(count + 1);
  }
  function resetHandler() {
    setCount(0);
  }

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-[#08081d] flex-col gap-10">
        <div className=" px-10 py-10 flex flex-col  gap-10 border-3 border-dotted border-[#ffffff] rounded-lg">
        <h1 className="font-medium text-center text-4xl text-white">Counter App</h1>
        <div className="bg-white flex justify-center gap-12 py-2 rounded-sm text-[25px] text-[#344151]">
          <button
            onClick={decreaseHandler}
            className="border-r-2 text-center w-20 border-[#bfbfb] text-5xl"
          >
            -
          </button>
          <div className="text-center py-2 text-3xl">{count}</div>
          <button onClick={increaseHandler}className="border-l-2 text-center w-20 border-[#bfbfb] text-5xl">+</button>
        </div>
        <button onClick={resetHandler}className="bg-[#0398d4] text-white px-8 py-2 rounded-sm text-lg w-25 m-auto flex justify-center items-center">Reset</button>
      </div>
        </div>
    </>
  );
}

export default App;
