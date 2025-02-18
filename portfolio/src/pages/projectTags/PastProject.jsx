import { Link } from "react-router-dom";
import './PastProject.css';

function PastProject(attributes) {
    let title = attributes['data-title'];
    let desc = attributes['data-desc'];
    let link = attributes['data-link'];
    let img = attributes['data-img'];
    let pastStyle = {
        backgroundColor: '#333333',
        backgroundImage: img ? `url(${img})`:'none',
    };
    if (!(title && desc && link)) {
        throw new Error("Need to provide project info.");
    }
    return (
        <Link
            className="PastProject"
            style={pastStyle}
            to={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <h3 className="pastTitle">{title}</h3>
            <p className="pastDesc">{desc}</p>
        </Link>
    );
}

export default PastProject;