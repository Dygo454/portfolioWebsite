import { Link } from "react-router-dom";
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1 id="SplashUp">Hello! Welcome to my portfolio website.</h1>
        <h2>Would you like to see a page tailored for a recruiter?</h2>
        <div id="Options">
          <Link to="/recruit" className="button">Yes</Link>
          <Link to="/about" className="button">No</Link>
        </div>
      </header>
    </div>
  );
}

export default Home;
