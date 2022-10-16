import ContactForm from "./contactForm"
import Header from "../header"
import Pictures from "../pictures"
// import NewForm from "./newForm"

function Contact() {

    return (
        <div>
            <Header />
            <div className='contact-flex-container'>
                <Pictures />
                <div className="contactPageRight">
                <p className="contactMessage">Thank you for checking out my website. If you are looking to expand your team  for your team please send me an email message!  </p>
                    <ContactForm />
                </div>
            </div>
        </div>

    )
}

export default Contact