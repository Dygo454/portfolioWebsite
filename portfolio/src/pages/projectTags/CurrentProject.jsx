import { Link } from "react-router-dom";
import './CurrentProject.css';

function CurrentProject(attributes) {
    let GHid = attributes['data-GHid'];
    let title = attributes['data-title'];
    let desc = attributes['data-desc'];
    let state = attributes['data-state'];
    let img = attributes['data-img'];
    let link = attributes['data-link'];
    let currStyle = {
        backgroundColor: '#333333',
        backgroundImage: img ? `url(${img})`:'none',
    };
    if (GHid) {
        let link = "/api/GHidData";
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
            link = "http://localhost:5000/GHidData";
        }
        const request = new Request(link, {
            method: "POST",
            body: "{\"GHid\": \""+GHid+"\"}",
          });
        fetch(request).then((response) => {
            if (response.status/100 === 4) {
                response.json().then(jsonResponse => {
                    document.querySelector("#"+(GHid ? GHid : title)).querySelector(".CurrTitle").innerText = title ? title : GHid;
                    document.querySelector("#"+(GHid ? GHid : title)).querySelector(".CurrDesc").innerText = jsonResponse["msg"];
                    document.querySelector("#"+(GHid ? GHid : title)).querySelector(".CurrState").innerText = "Could not get state from GitHub.";
                });
            }
            else {
                response.json().then(jsonResponse => {
                    document.querySelector("#"+(GHid ? GHid : title)).querySelector(".CurrTitle").innerText = title ? title : jsonResponse["title"];
                    document.querySelector("#"+(GHid ? GHid : title)).querySelector(".CurrDesc").innerText = jsonResponse["desc"];
                    document.querySelector("#"+(GHid ? GHid : title)).querySelector(".CurrState").innerText = state ? state : jsonResponse["state"];
                });
            }
        });
    }
    if (!(GHid || (title && desc && state))) {
        throw new Error("Need to provide a GitHub project id or project info. Neither were recieved.");
    }
    if (!(GHid || link)) {
        return (
            <div
                className="CurrentProject"
                id={GHid ? GHid : title}
                style={currStyle}
            >
                <h3 className="CurrTitle">{title ? title : GHid}</h3>
                <p className="CurrDesc">{GHid ? "Loading project description..." : desc}</p>
                <p className="CurrState">{GHid ? "Loading project state..." : state}</p>
            </div>
        );
    }
    return (
        <Link
            className="CurrentProject"
            id={GHid ? GHid : title}
            style={currStyle}
            to={link ? link : "https://github.com/Dygo454/"+GHid}
            target="_blank" rel="noopener noreferrer"
        >
            <h3 className="CurrTitle">{title ? title : GHid}</h3>
            <p className="CurrDesc">{GHid ? "Loading project description..." : desc}</p>
            <p className="CurrState">{GHid ? "Loading project state..." : state}</p>
        </Link>
    );
}

export default CurrentProject;