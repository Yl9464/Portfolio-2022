import ProfilePic from "../images/profilePic.png"
import HarleyPic from "../images/harley.png"
import Bitmoji from "../images/bitmoji.png"

function Pictures() {
    return (
        <div className="pictures">
           <img className="profilePic" src={Bitmoji} alt="profile pic"></img>
            {/* <img className="harleyPic" src={HarleyPic} alt="Harley dog"></img>  */}
        </div>
    )
}
export default Pictures