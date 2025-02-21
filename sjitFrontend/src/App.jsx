import Home from "./components/FunctionalComponents/Home";
import About from "./components/FunctionalComponents/About";
import Contact from "./components/FunctionalComponents/Contact";
import Gallery from "./components/FunctionalComponents/Gallery";
import Signup from "./components/FunctionalComponents/Signup";
import Navbar from "./components/FunctionalComponents/Navbar";
import UseEffect from "./components/FunctionalComponents/Hooks/UseEffect";
import Login from "./components/FunctionalComponents/Login";
import UseEffectAPI from "./components/FunctionalComponents/Hooks/useEffectAPI";
import UseRef from "./components/FunctionalComponents/Hooks/UseRef";
import UseMemo from "./components/FunctionalComponents/Hooks/UseMemo";
import UseCallback from "./components/FunctionalComponents/Hooks/UseCallback";
import UseMemoize from "./components/FunctionalComponents/UseMemoize";
import HoC from "./components/FunctionalComponents/HoC/Hoc";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route
              path="/"
              element={<Home msg="Hello," msg1="Welcome"></Home>}
            ></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/use-effect" element={<UseEffect />}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/use-effect-api" element={<UseEffectAPI />}></Route>
            <Route path='/use-ref' element={<UseRef/>}></Route>
            <Route path="/use-memo" element={<UseMemo/>}></Route>
            <Route path="/use-callback" element={<UseCallback/>}></Route>
            <Route path="/use-memoize" element={<UseMemoize/>}></Route>
            <Route path="/hoc" element={<HoC/>}></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
