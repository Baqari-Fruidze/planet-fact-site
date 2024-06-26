import { useState } from "react";
import data from "./data.json";
import saturn from "/assets/planet-saturn.svg";
import saturnInternal from "/assets/planet-saturn-internal.svg";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useNavigate } from "react-router-dom";
function App() {
  const [show, setshow] = useState<boolean>(false);
  return (
    <>
      <BrowserRouter>
        <Header show={show} setShow={setshow} />
        <Routes>
          <Route path="/" element={<Navigate to={"/earth"} />} />
          <Route
            path="/:name"
            element={<Home show={show} setShow={setshow} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
