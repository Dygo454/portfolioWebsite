import './Projects.css';
import CurrentProject from './projectTags/CurrentProject';
import PastProject from './projectTags/PastProject';

import DGE from './../res/projectPics/DGE.png';
import PaceBingo from './../res/projectPics/paceBingo.png';
import PortfolioWebsite from './../res/projectPics/portfolio.png';

import SpellChecker from './../res/projectPics/SpellCheck.png';
import DontLook from './../res/projectPics/DontLook.png';
import DoorsNDragons from './../res/projectPics/DoorsNDragons.png';
import SpyCubed from './../res/projectPics/SpyCubed.png';
import OverflowException from './../res/projectPics/Overflow.png';
import Machukuna from './../res/projectPics/Machukuna.png';

function Projects() {
  return (
    <div className="Projects">
      <div className="ProjectsMain">
        <h1>My Personal Projects</h1>
        <h2>Current:</h2>
        <div className="CurrentProjects">
            <CurrentProject
                data-GHid={"DGE-MK5"}
                data-title={"Diego Game Engine (DGE)"}
                data-state={"Currently developing a render pipeline! School has slowed the progress substantially..."}
                data-img={DGE}
            />
            <CurrentProject 
                data-title={"Pace Bingo (Working Title)"} 
                data-desc={"A bingo game to engage minecraft speedrunning stream viewers. Will use certain premade stats collectors, along with twitch bot API, to allow twitch viewers to play a game as the stream progresses."}
                data-state={"Currently in the information gathering stage. I am sending a few forms out to chatters and streamers to try and get a sense of user needs."}
                data-img={PaceBingo}
            />
            <CurrentProject
                data-GHid={"portfolioWebsite"}
                data-title={"Portfolio Website"}
                data-img={PortfolioWebsite}
            />
        </div>
        <h2>Past:</h2>
        <div className="PastProjects">
            <PastProject 
                data-title={"Spell Checker"} 
                data-desc={"A stand alone application built with SFML that checks the spelling of words. This checker has different options as it was built to compare the speed and memory efficiency of Hashmaps vs. Tries in the context of loading a dictionary file and checking if an inserted word exists inside as well as suggesting words if not."}
                data-link={"https://github.com/Dygo454/spell_checker"}
                data-img={SpellChecker}
            />
            <PastProject 
                data-title={"Don't Look"} 
                data-desc={"My first 3D game and one I worked on over a summer to publish on itch and steam."}
                data-link={"https://dygo454.itch.io/dont-look"}
                data-img={DontLook}
            />
            <PastProject 
                data-title={"Doors And Dragons"} 
                data-desc={"A platformer I submitted to a quick '1bit' game jam."}
                data-link={"https://dygo454.itch.io/1bitweekend"}
                data-img={DoorsNDragons}
            />
            <PastProject 
                data-title={"Spy Cubed"}
                data-desc={"A game I made for the \"One Button Game Jam\". It was one of my first game jams!"}
                data-link={"https://dygo454.itch.io/spy-cubed"}
                data-img={SpyCubed}
            />
            <PastProject 
                data-title={"Overflow Exception"}
                data-desc={"This was another game for a game jam this time having to do with a youtuber/game devoloper."}
                data-link={"https://dygo454.itch.io/overflow-exception"}
                data-img={OverflowException}
            />
            <PastProject 
                data-title={"Legend of Machukuna"} 
                data-desc={"This is a platformer I made based around a Peruvian legend which I submitted to a latin heritage game jam!"}
                data-link={"https://dygo454.itch.io/legend-of-machukuna"}
                data-img={Machukuna}
            />
        </div>
      </div>
    </div>
  );
}

export default Projects;