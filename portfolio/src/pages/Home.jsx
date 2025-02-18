import { Link } from "react-router-dom";
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1 id="SplashUp">Hello! Welcome to my portfolio website.</h1>
        <h2>You would like to...</h2>
        <div id="Options">
          <Link to="/about" className="button">Start with the about page.</Link>
          <Link to="/recruit" className="button">Skip to the summarized recruiter page.</Link>
        </div>
      </header>
    </div>
  );
}

export default Home;
