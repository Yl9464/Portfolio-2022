import {  Link } from "react-router-dom"

function Header() {
    return (
        <div className="header_section">
            <nav id="menubar" class="navbar navbar-expand-lg custom_nav-container ">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="about">
                            <Link exact to="/">Home</Link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="portfolio.html">
                            <Link to="/resume">Resume</Link>
                        </a>
                    </li>
        
                    <li class="nav-item">
                        <a class="nav-link" href="contact">
                            <Link to="/contact">Contact</Link>
                        </a>
                     </li>
                    </ul>
            </nav>
            
        </div>
           
    )
}
export default Header