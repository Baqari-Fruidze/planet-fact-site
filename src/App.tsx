import { useState } from "react";
import data from "./data.json";
import saturn from "/assets/planet-saturn.svg";
import saturnInternal from "/assets/planet-saturn-internal.svg";
import { Tdata } from "./Typed";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Header from "./components/Header";

function App() {
  // const [data, setData] = useState<Tdata>(information);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
