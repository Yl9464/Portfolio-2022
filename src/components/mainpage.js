import About from "./about";
import Header from "./header";
import ProfilePic from "../images/profilePic.png"
import HarleyPic from "../images/harley.png"

function Mainpage() {
    return (
        <div>
            <header class="header_section">
                <nav id="menubar" class="navbar navbar-expand-lg custom_nav-container ">
                    <ul class="navbar-nav">

                    <li class="nav-item active">
                            <a class="nav-link" src="about"> About</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="skills">Skills<span class="sr-only"></span></a>
                    </li>
                        <li class="nav-item">
                            <a class="nav-link" href="portfolio.html">Resume</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact">Contact Me</a>
                        </li>
                    </ul>
                    <form class="form-inline">
                        <button class="btn nav_search-btn" type="submit"></button>
                    </form>
                </nav>
            </header>

            <div className="pictures">
                <img className="profilePic" src={ProfilePic} alt="profile pic"></img>
                <img className="harleyPic" src={HarleyPic} alt="Harley dog"></img>
            </div>
                    
            <div className="pageContent" data-spy="scroll" data-target="#navbar-menubar" data-offset="0">
                <div className="aboutMe">
                    <h4>About me</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
                <div className="resume">
                    <h4>Resume</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
                <div className="skills">
                    <h4>Skills</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
                <div className="contactMe">
                    <h4 id="contact">Contact me</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>
            </div>      
        </div>
    )
}

export default Mainpage