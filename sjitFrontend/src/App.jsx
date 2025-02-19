
import Home from "./components/FunctionalComponents/Home";
import About from "./components/FunctionalComponents/About";
import Contact from "./components/FunctionalComponents/Contact";
import Gallery from "./components/FunctionalComponents/Gallery";
import Skills from "./components/FunctionalComponents/Skills";

function App() {


  return (
    <>
      <div>
        <h1>Welcome to react</h1>
        <hr />
        <ul>
          <li><Home></Home></li>
          <li><About /></li>
          <li><Gallery></Gallery></li>
          <li><Skills></Skills></li>
          <li><Contact></Contact></li>
        </ul>
      </div>
    </>
  );
}

export default App;
