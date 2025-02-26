import { Link } from "react-router-dom";
import './Home.css';
import oldpfp from '../res/other/oldpfp.png'

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1 id="SplashUp">Hello! Welcome to my portfolio website.</h1>
        <div id="Splash">
          <div id="SplashLeft">
            <p>Hey! My name is</p>
            <h1>Diego Aguilar</h1>
            <p>A game/backend developer.</p>
          </div>
          <img src={oldpfp}/>
        </div>
      </header>
    </div>
  );
}

export default Home;
