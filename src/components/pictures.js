import Bitmoji from "../images/bitmoji.png"
import Skills from "./skills"

function Pictures() {
    return (
        <div className="homeLeft">
           <img className="profilePic" src={Bitmoji} alt="profile pic"></img>
            <Skills />
        </div>
    )
}
export default Pictures