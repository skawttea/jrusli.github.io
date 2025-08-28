
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToolBar from './assets/ToolBar';
import IntroVideo from './assets/components/IntroVideo';
import WorkPage from './assets/components/WorkPage';
import AboutPage from './assets/components/AboutPage';
import ContactPage from './assets/components/ContactPage';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <ToolBar />
        <Routes>
          <Route path="/Scotty-Web/" element={<IntroVideo />} />
          <Route path="/Scotty-Web/Home" element={<IntroVideo />} />
          <Route path="/Scotty-Web/work" element={<WorkPage />} />
          <Route path="/Scotty-Web/about" element={<AboutPage />} />
          <Route path="/Scotty-Web/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;