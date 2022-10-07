import ContactForm from "./contactForm"
import Header from "../header"

function Contact() {

    return (
        <div className="contactPage">
            <Header />
            <div className="message">
                <p>Thank you for checking out my website. If you are looking for a new memeber for your team of web developers please send me an email message!  </p>
            </div>

            <ContactForm />

        </div>
    )
}

export default Contact