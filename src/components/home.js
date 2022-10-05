import Content from "./content"
import Header from "./header";
import Pictures from "./pictures";

function Mainpage() {
    return (
        <div className="mainpage">
            <Header />
            <div className="homePage-flex-container">
            <Pictures />        
            <Content />
            </div>
      
        </div>
    )
}

export default Mainpage