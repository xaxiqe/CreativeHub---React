import { useState } from "react";

//counter
function Counter() {
  const [counter, setCounter] = useState(1);

  const increase = () => {
    setCounter(counter + step);
  };

  const decrease = () => {
    setCounter(counter - step >= 0 ? counter - step - 1 : counter);
  };

  //steps
  const [step, setStep] = useState(1);
  const setSteps = (e) => {
    setStep(Number(e.target.value));
  };

  //reset form and steps
  const reset = () => {
    setCounter(1);
    setStep(1);
  };

  return (
    <>
      <div className="flex justify-center gap-5 mt-3">
        <div className="flex justify-center items-center ">
          <input
            type="number"
            value={step}
            onChange={setSteps}
            className="px-4 py-2 bg-gray-200 w-24 h-24 text-center text-4xl rounded-lg font-semibold hover:bg-gray-30"
            min="1"
          />
        </div>

        <span
          className="flex items-center justify-center 
                   w-24 h-24 
                   bg-green-300 
                   border border-gray-200 
                   text-5xl font-bold 
                   rounded-xl"
        >
          {counter}
        </span>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-200 rounded-lg font-semibold hover:bg-gray-300"
        >
          Reset
        </button>
      </div>

      <div className="flex justify-center gap-5 mt-10 items-center">
        <button className="text-4xl" onClick={increase}>
          ➕
        </button>
        <button className="text-4xl" onClick={decrease}>
          ➖
        </button>
      </div>
    </>
  );
}
export default Counter;
