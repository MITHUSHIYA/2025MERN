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
import HoC from "./components/FunctionalComponents/HoC/HoC";
import Memo from "./components/FunctionalComponents/Memoization/Memo";
import LazyLoadingAndSuspense from "./components/FunctionalComponents/Memoization/LazyLoadingAndSuspense";
import CoE from "./components/FunctionalComponents/ContextAPI/CoE";
import Exams from "./components/FunctionalComponents/PropDrilling/Exams";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home msg="Hello," msg1="Welcome"></Home>}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/use-effect" element={<UseEffect />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/use-effect-api" element={<UseEffectAPI />}></Route>
            <Route path="/use-ref" element={<UseRef />}></Route>
            <Route path="/use-memo" element={<UseMemo />}></Route>
            <Route path="/use-callback" element={<UseCallback />}></Route>
            <Route path="/use-memoize" element={<UseMemoize />}></Route>
            <Route path="/hoc" element={<HoC />}></Route>
            <Route path="/memo" element={<Memo />}></Route>
            <Route path="/lazy-loading" element={<LazyLoadingAndSuspense />}></Route>
            <Route path="/res" element={<CoE />}></Route>
            <Route path="/propdrilling" element={<Exams mark={'10'}/>}></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
