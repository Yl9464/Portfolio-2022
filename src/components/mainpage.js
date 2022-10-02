import Content from "./content";
import Header from "./header";
import Pictures from "./pictures";

function Mainpage() {
    return (
        <div>
            <Header />
            <div className="flex-container">
            <Pictures />        
            <Content />
            </div>
      
        </div>
    )
}

export default Mainpage