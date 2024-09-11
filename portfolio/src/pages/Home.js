import { Link } from "react-router-dom";
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1 id="SplashUp">Hello! Welcome to my portfolio website.</h1>
        <h2>Are you visiting as a recruitor?</h2>
        <div id="Options">
          <Link to="/recruit" className="button">Yes, I am.</Link>
          <Link to="/casual" className="button">No, I'm just looking around.</Link>
        </div>
        <Link to="/about" id="Other">I'd like to skip and jump to the website.</Link>
      </header>
    </div>
  );
}

export default Home;
