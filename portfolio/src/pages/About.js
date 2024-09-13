import './About.css';
import pfp from './../res/pfp.png';
import TaekwondoMe from './../res/other/taekwondo.png';
import taekwondo from './../res/icons/taekwondo.png';
import controller from './../res/icons/controller.png';
import live from './../res/icons/live.png';

let currInd = -1;
function setAboutClick(event) {
  if (event.target.tagName === "IMG") {
    event.target = event.target.parentElement;
  }
  if (event.target.id === currInd) {
    return;
  }
  if (currInd >= 0) {
    document.getElementById(currInd+"body").className = "inactiveAbout";
    document.getElementById(currInd).className = "AboutMainBarIco";
  }
  currInd = event.target.id;
  document.getElementById(currInd+"body").className = "activeAbout";
  event.target.className = "AboutMainBarIcoActive";
}

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
          <span id={0} className="AboutMainBarIco" onClick={setAboutClick}><img src={taekwondo} alt="Icon of a taekwondo kick"/></span>
          <span id={1} className="AboutMainBarIco" onClick={setAboutClick}><img src={controller} alt="Icon of a game controller"/></span>
          <span id={2} className="AboutMainBarIco" onClick={setAboutClick}><img src={live} alt="Icon of a broadcasting antena"/></span>
        </div>
        <div className="AboutMainPersonalHidden">
          <div id="0body" className="inactiveAbout">
            <p>
              I have been doing taekwondo for almost as long as I can remember.
              I started at 7 years old and have stuck with it ever since!
              Taekwondo started as an activity for me and was something fun to do after school.
              However, after earning my black belt, I realized how passionate I had become.
              <br/><br/>
              I began training seriously and participating in various tournaments.
              Soon after, I became an 'Instructor in Training' and, eventually, an Instructor.
              With all this training and passion, I became a lot better a lot faster.
              Especially during quarantine, I got serious and, by the time I was back to in person lessons, I started winning.
              <br/><br/>
              Taekwondo has been a big part of who I am for so many years now. It's a sport I truly love and miss when I'm away.
              I keep up with it to the best of my ability even when I am away. As of now, I am a 4th Dan Black Belt, which I earned in fall 2023.
            </p>
            <img src={TaekwondoMe} alt="Icon of a broadcasting antena"/>
          </div>
          <div id="1body" className="inactiveAbout">
            <p>erm</p>
          </div>
          <div id="2body" className="inactiveAbout">
            <p>erm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;