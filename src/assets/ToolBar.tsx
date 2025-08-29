
import { Link } from 'react-router-dom';

function ToolBar() {
  return (
    <div>
      <h1>
        <div className="toolbar-title">Scotty Ninh</div>
        <nav>
          <Link to="/home">
            <button>Home</button>
          </Link>
          <Link to="/work">
            <button>Work</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>
          <Link to="/contact">
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