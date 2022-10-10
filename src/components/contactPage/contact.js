import ContactForm from "./contactForm"
import Header from "../header"
import Pictures from "../pictures"

function Contact() {

    return (
        <div>
            <Header />
            <div className='contact-flex-container'>
                <Pictures />
                <div className="contactPageContent">
                <p >Thank you for checking out my website. If you are looking for a new memeber for your team of web developers please send me an email message!  </p>
                    <ContactForm />
                </div>
            </div>
        </div>

    )
}

export default Contact