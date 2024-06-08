import './contact.scss';

function Contact(){
    return(
        <div className="contact" id="contact">
            <div className="contact-heading">
                <h1>Contact</h1>
            </div>
            <div className="contact-content">
                <div className="contact-details">
                    <h2>Personal details:</h2>
                    <i className="fa-solid fa-address-card"></i>
                    <h4 className="contact-name">Thomas N. Jensen</h4>
                    <i className="fa-solid fa-envelope"></i>
                    <h4 className="contact-email">thomasnorupjensen@gmail.com</h4>
                </div>
                <div className="contact-form">
                    <h3>Send me a message:</h3>
                    <form id="contactForm">
                        <input type="hidden" id="postId" value="{POST_ID}" />
                        <label htmlFor="fullName">Name</label>
                        <input type="text" id="fullName" placeholder="Full Name" />
                        <div className="form-error" id="fullName-error">Please enter your full name</div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" />
                        <div className="form-error" id="email-error">Please enter a valid email address</div>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" name="subject" id="subject" placeholder="Subject" />
                        <div className="form-error" id="subject-error">Please enter a subject, minimum 15 characters</div>
                        <label htmlFor="message">Message</label>
                        <textarea cols="30" rows="5" id="message" name="message" placeholder="Message"></textarea>
                        <div className="form-error" id="message-error">Please enter a message, minimum 15 characters</div>
                        <input type="submit" name="submit" id="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>  
    )
}
export default Contact;