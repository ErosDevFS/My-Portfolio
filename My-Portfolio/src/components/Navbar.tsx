import { useState } from "react"

function Navbar() {

    const [activeLink, setActiveLink] = useState("jsbrand")

    const decoration = "</>"
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">

                <a className={`nav-brand ${activeLink === "jsbrand" ? "active" : ""}`} onClick={()=> setActiveLink("jsbrand")} href="#" style={{textDecoration: "none"}}><span style={{color: "#f5f7fa", fontWeight: "600"}}>JS | Portfolio</span> {decoration}</a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarText">
                    <ul className="navbar-nav gap-5">
                        <li className="nav-item">
                            <a className={`nav-link ${activeLink === "about" ? "active" : ""}`} onClick={()=> setActiveLink("about")} href="#about">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeLink === "skills" ? "active" : ""}`} onClick={()=> setActiveLink("skills")} href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeLink === "projects" ? "active" : ""}`} onClick={()=> setActiveLink("projects")} href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeLink === "contact" ? "active" : ""}`} onClick={()=> setActiveLink("contact")} href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar