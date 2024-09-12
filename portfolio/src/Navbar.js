import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  let pathname = window.location.pathname;
  return (
    <ul className="Navbar">
        <li><Link id="/home" to="/home" className={pathname==="/home" ? "NavbarActive":"NavbarLink"}>Home</Link></li>
        <li><Link id="/casual" to="/casual" className={pathname==="/casual" ? "NavbarActive":"NavbarLink"}>Viewer</Link></li>
        <li><Link id="/recruit" to="/recruit" className={pathname==="/recruit" ? "NavbarActive":"NavbarLink"}>Recruiter</Link></li>
        <li><Link id="/about" to="/about" className={pathname==="/about" ? "NavbarActive":"NavbarLink"}>About Me</Link></li>
        {/* <li><Link id="" to="" className={pathname=="" ? "NavbarActive":"NavbarLink"}></Link></li> */}
    </ul>
  );
}

export default Navbar;