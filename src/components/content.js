import Skills from './skills'
function Content() {
    return (
        <div className="contentSection">
            <div className="aboutMe">
                <h4>About me</h4>
                <p>
                    I am a Junior Full Stack developer and received a certification in web development from Framingham State University.
                    During my program I realized my unique mindset allowed me to view problems in a way that could establish resolutions
                    in effective and creative ways. My entire life I have loved spending time and working with dogs, so I took my lifelong
                    passion and became a dog trainer. After 3 years in the field, I had accomplished as much I could from that world and
                    decided to move onto to something more challenging that could better utilize my skills. During my time at Framingham State,
                    I realized the many parallels between dog training and coding. They both require perseverance, motivation, an adaptive mindset, 
                    and a strong passion for the role. As I make the transition into the tech world, I bring a diverse perspective along with the patience
                     and devotion that brought me success as a dog trainer.                                       
                </p>
            </div>
            <div className="aspirations">
                <h4>My Aspirations:</h4>
                <p>
                    Technology is the future; every day new and amazing products are being developed to strengthen and advance society.
                    My goal is to be a part of the teams who are creating these cutting-edge technologies, between my professional skills
                    and strong mindset I know I will reach that goal.
                </p>
            </div> 
                <Skills />
        </div> 
    )
}
export default Content