import Content from "./content";
import Header from "./header";
import Pictures from "./pictures";

function Mainpage() {
    return (
        <div>
            <header class="header_section">
                <Header />
            </header>

            <div className="pictures">
               <Pictures />
            </div>
                    
            <div className="pageContent" data-spy="scroll" data-target="#navbar-menubar" data-offset="0">
            <Content />
            </div>      
        </div>
    )
}

export default Mainpage