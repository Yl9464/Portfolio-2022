import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import Header from "./header"

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="contactPage">
            <Header />

            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>Name</label>
                        <input type="text" name="user_name" />
                    </div>
                    <div class="form-group col-md-6">
                        <label>Email</label>
                        <input type="email" name="user_email" />
                    </div>
                    <div class="form-group">
                        <div class="form-group col-md-6">
                            <label>Message</label>
                            <textarea name="message" />
                        </div>
                    </div>
                    <input type="submit" value="Send" />
                </div>
            </form>

        </div>
    )
}

export default Contact