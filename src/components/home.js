import Content from "./content"
import Header from "./header";
import Pictures from "./pictures";

function Home() {
    return (
        <div className="homePage">
            <Header />
            <div className="homePage-flex-container">
            <Pictures />        
            <Content />
            </div>
      
        </div>
    )
}

export default Home