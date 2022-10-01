import About from "./about"

function Header() {
    return (
        <div>
            <header class="header_section">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-lg custom_nav-container ">
                                <ul class="navbar-nav  ">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="index.html">Home <span class="sr-only"></span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" src=<About /> > About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="portfolio.html">Resume</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="contact.html">Contact Me</a>
                                    </li>
                                </ul>
                                <form class="form-inline">
                                    <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                                </form>
                    </nav>
                </div>
            </header>
        </div>
    )
}
export default Header