import { Link } from "react-router-dom";
import './Footer.css';

import Email from './res/icons/email.ico';
import GitHub from './res/icons/GitHub.ico';
import Itch from './res/icons/itch.ico';
import LinkedIN from './res/icons/linkedIN.ico';

function Footer() {
  return (
    <ul className="Footer">
        <li><Link to="mailto: diegoaguilar454@yahoo.com"><img src={Email}/></Link></li>
        <li><Link to="https://github.com/Dygo454"><img src={GitHub}/></Link></li>
        <li><Link to="https://dygo454.itch.io"><img src={Itch}/></Link></li>
        <li><Link to="https://www.linkedin.com/in/diego-a-aguilar/"><img src={LinkedIN}/></Link></li>
    </ul>
  );
}

export default Footer;