import { Link } from "react-router-dom";
import './Resume.css';

function Resume() {
  return (
    <div className="Resume">
        <h1>Diego Aguilar</h1>
        <br/>
        <p style={{textAlign:"center"}}>diegoaguilar454@yahoo.com</p>
        <p style={{textAlign:"center"}}><Link to={"https://www.linkedin.com/in/diego-a-aguilar"}>LinkedIn</Link> | <Link to={"https://github.com/dygo454"}>GitHub</Link> | <Link to={"https://dygo454.itch.io"}>ItchIO</Link></p>
        <br/>
        <h3>Education</h3>
        <hr/>
        <p><b>Bachelor of Science in Computer Science</b><span style={{float: "right"}}>August 2022 - May 2026</span></p>
        <p><i>University of Florida</i>, Gainesville, FL</p>
        <ul>
            <li>GPA: 3.71 / 4.00</li>
            <li>Relevant Coursework: Applications of Discrete Structures, Data Structures & Algorithms, Introduction to Computer Organization, Introduction to Software Engineering, Object-Oriented Programming, Study Abroad UF In Japan: Cross Cultural Design.</li>
        </ul>
        <br/>
        <h3>Professional Experience</h3>
        <hr/>
        <p><b>Teaching Assistant</b><span style={{float: "right"}}>January 2023 - Present</span></p>
        <p><i>COP3503C | University of Florida</i>, Gainesville, FL</p>
        <ul>
            <li>Managed a lab section which elaborated on topics and concepts, demonstrated how to put them in action, and assisted students on projects such as a take on Minesweeper.</li>
            <li>Contributed on the back end of the course helping with a variety of things from planning of course schedule to creating labs and their documentations.</li>
        </ul>
        <br/>
        <h3>Projects</h3>
        <hr/>
        <p><b>DGE (Diego Game Engine)</b><span style={{float: "right"}}>May 2021 - Present</span></p>
        <p><i>Personal Project</i></p>
        <ul>
            <li>Developed good practices for improving code modularity in a big project.</li>
            <li>Studied many low level aspects of a game engine such as render pipelining by using only C++ and OpenCL.</li>
        </ul>
        <br/>
        <p><b>Disaster Family</b><span style={{float: "right"}}>June 2024</span></p>
        <p><i>CEN4930 | University of Florida</i>,  Kyoto, Japan</p>
        <ul>
            <li>Collaborated with a team to create a game focused on Cross Cultural Design and, specifically, Disaster Prevention.</li>
            <li>Implemented core mechanics utilizing design patterns, including decorators, commands, and mediators.</li>
        </ul>
        <br/>
        <p><b>Spell Checker</b><span style={{float: "right"}}>November 2023</span></p>
        <p><i>COP3530 | University of Florida</i>,  Gainesville, FL</p>
        <ul>
            <li>Lead a team to create a spell checker used to compare two Data Structures in a certain context.</li>
            <li>Implemented a GUI to assist in the demonstration of the project, including a Trie traversal visualization in SFML.</li>
        </ul>
        <br/>
        <p><b>Minesweeper</b><span style={{float: "right"}}>November 2022</span></p>
        <p><i>COP3503C | University of Florida</i>,  Gainesville, FL</p>
        <ul>
            <li>Implemented certain design patterns, such as singletons and fluid builders, to develop an expandable final product.</li>
            <li>Worked with the SFML Library to create a window and display graphics.</li>
        </ul>
        <br/>
        <p><b>ItchIO Games</b><span style={{float: "right"}}>May 2020 - Present</span></p>
        <p><i>Personal Project</i></p>
        <ul>
            <li>Developed and improved my ability to use Unity and code in C#.</li>
            <li>Planned and coded the implementations of various features in all of my games utilizing Unity Scripting API.</li>
        </ul>
        <br/>
        <h3>Skills</h3>
        <hr/>
        <p><b>Programming Languages:</b> C, C++, C#, Java, Javascript, Python, HTML, CSS, MATLAB, AutoHotkey, SQL, LaTeX, ARM Assembly, OpenCL, Makefile, CMake, Rust.</p>
        <p><b>Skills/Awards:</b> Command Prompt, Unix, Design Patterns, Unity, SDL2, SFML, Git, GitHub, GitHub Actions, MySQL, GraphQL, Blender, Photoshop, Premiere, Dean's List.</p>
        <p><b>Foreign Languages:</b> Spanish (Native Proficiency).</p>
    </div>
  );
}

export default Resume;