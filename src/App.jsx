
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";

import MainGame from "./Components/MainGame";
import GameOver from "./Components/GameOver";

function App() {
 
  return (

   <BrowserRouter>
    <Routes>
      <Route path="/" element={<GameOver/>}></Route>

    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
