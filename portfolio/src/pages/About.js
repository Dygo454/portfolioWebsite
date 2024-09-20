import './About.css';
import { Link } from "react-router-dom";
import pfp from './../res/pfp.png';
import TaekwondoMe from './../res/other/taekwondo.png';
import GamesMe from './../res/other/games.png';
import TwitchMe from './../res/other/TwitchPFP.png';
import taekwondo from './../res/icons/taekwondo.png';
import controller from './../res/icons/controller.png';
import live from './../res/icons/live.png';

let currInd = -1;
async function setAboutClick(event) {
  if (event.target.tagName === "IMG") {
    event.target = event.target.parentElement;
  }
  if (event.target.id === currInd) {
    document.getElementById(currInd+"body").className = "inactiveAbout";
    event.target.className = "AboutMainBarIco";
    currInd = -1;
    return;
  }
  if (currInd >= 0) {
    document.getElementById(currInd+"body").className = "inactiveAbout";
    document.getElementById(currInd).className = "AboutMainBarIco";
  }
  event.target.className = "AboutMainBarIcoActive";
  currInd = event.target.id;
  setTimeout(() => {
    document.getElementById(currInd+"body").className = "activeAbout";
  }, 500);
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
        <h1>More about me:</h1>
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
            <img src={TaekwondoMe} alt="Me performing a jump spin side kick to break two wooden boards"/>
          </div>
          <div id="1body" className="inactiveAbout">
            <p>
              Gaming has been a hobby of mine for a long time.
              Some of my most played games are Minecraft, Oxygen Not Included, and Valorant.
              <br/><br/>
              My favorite game, however, is OneShot. It's a game I genuinely can't recommend enough,
              in this game you follow the story of Nico who speaks directly to the player.
              This allows for a very interesting dynamic that I genuinely love and I think is done very well.
              That coupled with very pretty pixel art and a really good story made me fall in love with the game.
              I won't spoil anything but I do genuinely recommend!
              <br/><br/>
              As for my most played games, I have been speedrunning Minecraft for a few years now and have made a lot of progress.
              It is something I still enjoy doing and still love improving on.
              With the amount of play time I have it is definitely a favorite of mine.
              Oxygen Not Included is another one of my favorite's. I love it because it challenges my organizational skills.
              I really do enjoy playing this game and get very excited about successful worlds.
              Finally, Valorant is another game I enjoy. While I don't play much competitively anymore,
              I do like the occasional casual games with friends.
            </p>
            <img src={GamesMe} alt="Me performing a jump spin side kick to break two wooden boards"/>
          </div>
          <div id="2body" className="inactiveAbout">
            <p>
              Ever since around 2021 I've been streaming on twitch.
              Content creation has always been a desired hobby of mine, however,
              it wasn't until I saved up the money to build my own pc that I could actually realize it.
              With some supplies and time, I began to stream that summer. At first, I wasn't sure what exactly to do,
              I bounced between a couple things, like coding/game dev streams and trending games.
              Eventually, Minecraft speedrunning became trendy so I decided to try my hand at it.
              <br/><br/>
              The thing about speedrunning is that there is a lot of science and math put into it,
              so being a historically technicaly player I found it very interesting.
              It didn't take long for me to start taking it more seriously and it soon became the norm.
              Even now when given the chance I speedrun, streaming or not, because it has been something I've enjoyed.
              <br/><br/>
              With an interest in this area and a genuine interest in content creation as a whole,
              I've always wondered how to make speedrunning more viewer friendly and have taken steps to make my streams more enjoyable.
              I really do enjoy turning on the camera and having fun with my little comunity,
              and I hope to make things even more fun with a project I've recently started (more on that <Link href='/projects'>here</Link>).
            </p>
            <img src={TwitchMe} alt="My avatar for twitch streaming"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;