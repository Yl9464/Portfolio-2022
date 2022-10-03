

function Header() {
    return (
        <div className="header_section">
            <nav id="menubar" class="navbar navbar-expand-lg custom_nav-container ">
                <ul class="navbar-nav">

                    <li class="nav-item active">
                        <a class="nav-link" href="about"> About</a>
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

        </div>
    )
}
export default Header