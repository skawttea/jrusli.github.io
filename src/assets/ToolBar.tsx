
import { Link } from 'react-router-dom';

function ToolBar() {
  return (
    <div>
      <h1>
        :)
        <nav>
          <Link to="/Scotty-Web/home">
            <button>Home</button>
          </Link>
          <Link to="/Scotty-Web/work">
            <button>Work</button>
          </Link>
          <Link to="/Scotty-Web/about">
            <button>About</button>
          </Link>
          <Link to="/Scotty-Web/contact">
            <button>Contact</button>
          </Link>
          <a href="https://www.youtube.com/@skawttea" target="_blank" rel="noopener noreferrer">
            <button>YouTube</button>
          </a>
        </nav>
      </h1>
    </div>
  );
}

export default ToolBar;