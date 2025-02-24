import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <div class="dropdown">
          <span class="drop-btn">Hooks</span>
          <ol class="drop-content">
            <li>
              <Link to="/use-state">useState</Link>
            </li>
            <li>
              <Link to="/use-effect">useEffect</Link>
            </li>
            <li>
              <Link to="/use-effect-api">useEffectAPI</Link>
            </li>
            <li>
              <Link to="/use-ref">useRef</Link>
            </li>
            <li>
              <Link to="/use-memo">useMemo</Link>
            </li>
            <li>
              <Link to="/use-callback">useCallback</Link>
            </li>
            <li>
              <Link to="/use-memoize">useMemoize</Link>
            </li>
          </ol>
        </div>
        <li>
          <Link to="/hoc">HoC</Link>
        </li>
        <div class="dropdown">
          <span>Memoization</span>
          <ol class="drop-content">
            <li>
              <Link to="/memo">Memo</Link>
            </li>
            <li>
              <Link to="/lazy-loading">LazyLoading</Link>
            </li>
          </ol>
        </div>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </nav>
    </header>
  );
};

export default Navbar;
