import Home from "./components/FunctionalComponents/Home";
import About from "./components/FunctionalComponents/About";
import Contact from "./components/FunctionalComponents/Contact";
import Gallery from "./components/FunctionalComponents/Gallery";
import Signup from "./components/FunctionalComponents/Signup";
import Navbar from "./components/FunctionalComponents/Navbar";
import UseEffect from "./components/FunctionalComponents/Hooks/UseEffect"
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
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
