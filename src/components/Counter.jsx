import { useState } from "react";

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const currDate = new Date();
  const calcDate = currDate.setDate(currDate.getDate() + count);
  //   currDate.toDateString();
  //   console.log(currDate);
  return (
    <div className="container flex flex-col mx-auto max-w-2xl text-center mt-16 justify-center items-center ">
      <div className=" mmx-auto mb-8 border-violet-400 rounded-md border bg-violet-900 text-white py-4 w-[50%]">
        <button
          onClick={() => setStep((curr) => curr - 1)}
          className="mr-4 border rounded-full px-2 py-[0.5] bg-white font-bold text-violet-800"
        >
          -
        </button>
        <span>Step : {step}</span>
        <button
          onClick={() => setStep((curr) => curr + 1)}
          className="ml-4 border rounded-full px-2 py-[0.5] bg-white font-bold text-violet-800"
        >
          +
        </button>
      </div>
      <div className=" mx-auto mb-8 border-violet-400 rounded-md border bg-violet-900 text-white py-4 w-[50%]">
        <button
          onClick={() => setCount((curr) => curr - step)}
          className="mr-4 border rounded-full px-2 py-[0.5] bg-white font-bold text-violet-800"
        >
          -
        </button>
        <span>Count : {count}</span>
        <button
          onClick={() => setCount((curr) => curr + step)}
          className="ml-4 border rounded-full px-2 py-[0.5] bg-white font-bold text-violet-800"
        >
          +
        </button>
      </div>
      <div className=" mx-auto font-bold shadow-lg mb-8 border-violet-400 rounded-md border  text-violet-900 py-6 w-[50%]">
        <p>
          {count === 0
            ? `Today is : ${currDate.toDateString()} `
            : count > 0
            ? `${count} from today is : ${currDate.toDateString()}`
            : `${Math.abs(count)} ago was : ${currDate.toDateString()}`}
        </p>
      </div>
    </div>
  );
};

export default Counter;
