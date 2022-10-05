import {  Link } from "react-router-dom"

function Header() {
    return (
        <div className="header-section">
             <nav class="navbar navbar-expand-lg">
            <span class="navbar-brand">Ying Lu</span>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

            <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="home">
                            <Link exact to="/">Home</Link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="resume">
                            <Link to="/resume">Resume</Link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact">
                            <Link to="/contact">Contact</Link>
                        </a>
                     </li>
                    </ul>
                    </div>
                </nav>
            </div> 
    )
}
export default Header