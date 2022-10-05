import Skills from "./skills"

function Content() {
    return (

        <div className="contentPage" data-spy="scroll" data-target="#navbar-menubar" data-offset="0">
            <div className="aboutMe">
                <h4>About me</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            <div className="skills">
                <h4>Skills</h4>
                <p><Skills /></p>
            </div>
            <div className="funFacts">
                <h4>Fun Facts!</h4>
                <ol>
                    <li> Morbi eget turpis a velit finibus ultrices et vel justo.</li>
                    <li> Maecenas porttitor felis quis enim facilisis cursus.</li>
                    <li> Proin vel sapien quis justo aliquam interdum.</li>
                    <li> Donec efficitur lorem tristique dolor posuere, vel semper neque tempor.</li>
                    <li> Proin vitae justo bibendum felis faucibus lobortis non eget odio.</li> 
               </ol>
            </div>
        </div>
    )
}
export default Content