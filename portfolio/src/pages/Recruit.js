import { Link } from "react-router-dom";
import './Recruit.css';
import ResumePDF from './../res/files/DiegoAguilar.pdf';

function Recruit() {
  return (
    <div className="Recruit">
      <h1>Who I am:</h1>
      <p>
        I'm Diego Aguilar, an indie game and software developer.
        I have loved making games for as long as I've been doing it,
        and have been passionate about programming since even before that.
        I have many years of experience with various programming languages and Computer Science skills.
        Outside of Computer Science, however, I enjoy martial arts, video games, and content creation.
        I am a 4th degree black belt in Taekwondo, and have been training since 2011.
        As for games and content creation, I have been streaming, on and off, on twitch for a few years now.
        I have uploaded quite a few videos, and really enjoy the whole process, from recording, to editing and publishing.
      </p>
      <br/>
      <br/>
      <h1>What I do:</h1>
      <p>
        I make games, apps, websites, software, etc.
        I have taught myself a lot of different fields within Computer Science,
        consequently I am very versatile in what I do.
        With that said my preferences lean towards back end work and game development.
        There really is something that draws me to the bare bones of a system.
        Something inside of me that really wants to understand the intricacies of large complex software.
      </p>
      <br/>
      <br/>
      <h1>My Goals:</h1>
      <p>
        My end goal in any job, internship, or work experience is, and always has been, to learn.
        Something about me is that I have always loved to learn.
        I always strived to teach myself beyond what I was taught and, when I found Computer Science,
        I found an endless sea of knowledge that I can keep learning in.
        More specifically, I currently am interested in learning about the maintaining of big code bases.
        Thanks to <Link to="/projects">DGE</Link>, I have found myself very interested in large system management.
        With that said, I am truly happy to learn in any other field or realm of CS,
        the entire science is truly a passion of mine.
      </p>
      <br/>
      <br/>
      <h1>My Skills:</h1>
      <p>
        My biggest asset, by far, is my being a quick learner.
        I do have a varied set of technical skills that, I believe, alone set me apart.
        This includes a variety of things ranging from comfort writing kernels and very low level programs,
        to in depth knowledge about Unity and other game engines,
        to a mastery of high level languages like python,
        to use of builder patterns and good object oriented programming practices.
        However, my quick learning is, not only what earned me those skills, but also what makes up for any gaps in my knowledge.
        I am very confident in my ability to adapt to any workflow and skill level.
      </p>
      <br/>
      <br/>
      <a href={ResumePDF} download="DiegoAguilar.pdf">Download my resume here!</a>
    </div>
  );
}

export default Recruit;