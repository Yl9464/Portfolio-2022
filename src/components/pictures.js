import ProfilePic from "../images/profilePic.png"
import HarleyPic from "../images/harley.png"

function Pictures() {
    return (
        <div className="pictures">
           <img className="profilePic" src={ProfilePic} alt="profile pic"></img>
            <img className="harleyPic" src={HarleyPic} alt="Harley dog"></img> 
        </div>
    )
}
export default Pictures