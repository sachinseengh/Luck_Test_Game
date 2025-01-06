import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-slate-600 w-full h-screen m-0">
        <div>
          <h1 className="text-4xl font-bold tracking-wide text-white pt-10 ">
            Test Your Luck
          </h1>
        </div>
        <div className="border-black border ml-56 mt-16  mr-56 p-10 ">
          <div className="flex flex-wrap gap-10 ">

          <div className="h-24 w-24 bg-green-500 p-5">
            1
          </div>
         
          <div className="h-24 w-24 bg-green-500 p-5">
            1
          </div>
          <div className="h-24 w-24 bg-green-500 p-5">
            1
          </div>
          
          <div className="h-24 w-24 bg-green-500 p-5">
            1
          </div>
          <div className="h-24 w-24 bg-green-500 p-5">
            1
          </div>
          <div className="h-24 w-24 bg-green-500 p-5">
            1
          </div>
          <div className="h-24 w-24 bg-green-500 p-5">
            1
          </div>
          <div className="h-24 w-24 bg-green-500 p-5">
            1
          </div>
          <div className="h-24 w-24 bg-green-500 p-5">
            1
          </div>
          
          
          </div>
        
        </div>
      </div>
    </>
  );
}

export default App;
