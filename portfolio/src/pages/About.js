import './About.css';
import pfp from './../res/pfp.png';
import taekwondo from './../res/icons/taekwondo.png';
import controller from './../res/icons/controller.png';
import live from './../res/icons/live.png';

function About() {
  return (
    <div className="About">
      <div className="AboutMain">
        <div>
          <h1 className="AboutTitle">Who I Am!</h1>
          <p className="AboutMainText">
            Hi! I'm Diego, a Game Developer who's been making games since the spring of 2020!
            I've mostly used unity, but have been transitioning away from comercial game engines.
            I am curretly making a game engine of my own called DGE.
            <br/><br/>
            I have many years of experience with programming in general (since 2016).
            And ever since that first summer class I took I've been fascinated by everything computer science.
            I am a person who loves puzzles and, ever since learning python, learning new languages and concepts has been my favorite puzzle.
            As such, I've taught myself multiple languages and expanded on my knowledge on them in an academic setting.
            <br/><br/>
            While I have limited professional experience, I have worked as a Lead TA/PM in UF's Programming Fundamentals 2,
            which involved: gaining experience with LaTeX, making a lab from scratch, as well as strengthening my C++ knowledge.
            In addition to my own personal projects developing my skills as a programmer,
            I feel working there has developed important skills in a more professional perspective.
          </p>
        </div>
        <img src={pfp} alt="A headshot of me." className="AboutMainImg"></img>
      </div>
      <div className="AboutMainPersonal">
        <div className='AboutMainBar'>
          <span className="AboutMainBarIco"><img src={taekwondo} alt="Icon of a taekwondo kick"/></span>
          <span className="AboutMainBarIco"><img src={controller} alt="Icon of a game controller"/></span>
          <span className="AboutMainBarIco"><img src={live} alt="Icon of a broadcasting antena"/></span>
        </div>
      </div>
    </div>
  );
}

export default About;