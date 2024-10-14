import { Link } from "react-router-dom";
import './Resume.css';

function Resume() {
  return (
    <div className="Resume">
        <h1 style={{textAlign:"center"}}>Diego Aguilar</h1>
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
            <li>Relevant Coursework: Applications of Discrete Structures, Data Structures & Algorithms, Introduction to Computer Organization, Introduction to Software Engineering, Object-Oriented Programming, Study Abroad UF In Japan: Cross Cultural Design, Operating Systems.</li>
        </ul>
        <br/>
        <h3>PROFESSIONAL EXPERIENCE</h3>
        <hr/>
        <p><b>Teaching Assistant</b><span style={{float: "right"}}>January 2023 - Present</span></p>
        <p><i>COP3503C | University of Florida</i>, Gainesville, FL</p>
        <ul>
            <li>Managed a lab section which elaborated on core computer science topics, as well as demonstrated practical applications of concepts.</li>
            <li>Assisted students on projects such as Minesweeper, while working on the backend to develop an auto-grader for the assignment.</li>
            <li>Contributed on the backend of the course, helping with tasks ranging from course planning and assessments to creating labs.</li>
        </ul>
        <br/>
        <p><b>Teaching Assistant</b><span style={{float: "right"}}>September 2024 - Present</span></p>
        <p><i>Dr. Laura Cruz Castro | University of Florida</i>, Gainesville, FL</p>
        <ul>
            <li>Worked directly with the professor of a python course and a graduate data science course to develop and test curriculum materials.</li>
            <li>Analyzed course content to develop lecture slides, homework assignments, and assist in the creation and revisions of exams.</li>
        </ul>
        <br/>
        <h3>Projects</h3>
        <hr/>
        <p><b>DGE (Diego Game Engine)</b><span style={{float: "right"}}>May 2021 - Present</span></p>
        <p><i>Personal Project</i></p>
        <ul>
            <li>Developed good habits and learned best practices for improving code modularity in a big project.</li>
            <li>Learned many low level aspects of a game engine such as render pipelining by using only C++ and OpenCL.</li>
            <li>Integrated OOP build patterns, such as fluid builders, to streamline creation of many large scale backend systems within the project.</li>
        </ul>
        <br/>
        <p><b>Minesweeper Autograder</b><span style={{float: "right"}}>September 2024</span></p>
        <p><i>COP3503C - TA | University of Florida,  Gainesville, FL</i></p>
        <ul>
            <li>Piloted an auto-grading library that when linked to student submissions, produces a score as well as a point breakdown.</li>
            <li>Leveraged design patterns to keep track of code state and strategically organized the large code base of the library.</li>
        </ul>
        <br/>
        <p><b>Disaster Family</b><span style={{float: "right"}}>June 2024</span></p>
        <p><i>CEN4930 | University of Florida</i>,  Kyoto, Japan</p>
        <ul>
            <li>Collaborated with a team to create a game focused on Cross Cultural Design with the theme of disaster prevention.</li>
            <li>Integrated core mechanics utilizing design patterns, including decorators, commands, and mediators.</li>
        </ul>
        <br/>
        <p><b>Spell Checker</b><span style={{float: "right"}}>November 2023</span></p>
        <p><i>COP3530 | University of Florida</i>,  Gainesville, FL</p>
        <ul>
            <li>Lead a team to create a spell checker used to compare two Data Structures in terms of performance, complexity, and efficiency.</li>
            <li>Developed a GUI to assist in the demonstration of the project, including a Trie traversal visualization in SFML.</li>
        </ul>
        <br/>
        <p><b>Minesweeper</b><span style={{float: "right"}}>November 2022</span></p>
        <p><i>COP3503C | University of Florida</i>,  Gainesville, FL</p>
        <ul>
            <li>Strengthened familiarity with Unity and C# by designing and programming various games and participating in game jams.</li>
            <li>Planned and coded the implementations of various features in original games utilizing Unity Scripting API.</li>
        </ul>
        <br/>
        <p><b>Itch.io Games</b><span style={{float: "right"}}>May 2020 - Present</span></p>
        <p><i>Personal Project</i></p>
        <ul>
            <li>Strengthened familiarity with Unity and C# by designing and programming various games and participating in game jams.</li>
            <li>Planned and coded the implementations of various features in original games utilizing Unity Scripting API.</li>
        </ul>
        <br/>
        <h3>Skills</h3>
        <hr/>
        <p><b>Programming Languages:</b> C, C++, C#, Java, Javascript, Python, SQL, HTML, CSS, MATLAB, AutoHotkey, LaTeX, ARM Assembly, OpenCL, Makefile, CMake, Rust.</p>
        <p><b>Skills/Awards:</b> Command Prompt, Unix, Design Patterns, Machine Learning, Unity, SDL2, SFML, Git, GitHub, GitHub Actions, Databases, Blender, Photoshop, Premiere, Jupyter Notebook, UF Dean's List.</p>
        <p><b>Foreign Languages:</b> Spanish (Native Proficiency).</p>
    </div>
  );
}

export default Resume;