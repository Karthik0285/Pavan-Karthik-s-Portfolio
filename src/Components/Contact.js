import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    useEffect(() => {
        emailjs.init("2s6vGQg_-5W0cUUe5"); 
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formData = {
            from_name: event.target.elements.name.value,
            from_email: event.target.elements.email.value,
            message: event.target.elements.message.value
        };

        emailjs.send("service_whuidmb", "template_2wt3jdx", formData)
            .then((response) => {
                console.log("Email sent successfully", response);
                setShowSuccessMessage(true);
                setShowFailureMessage(false);
                event.target.reset();
            })
            .catch((error) => {
                console.error("Error sending email", error);
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
            });
    };

    return (
        <div>
            {showSuccessMessage && <div className="success-message">Your response is submitted!</div>}
            {showFailureMessage && <div className="failure-message">Submission failed. Please try again later.</div>}
            <div id="Contact-Heading">
                <h1 style={{ color: 'rgb(30, 128, 0)' }} align="center">Contact</h1>
            </div>

            <div id="Contact">
                <pre></pre>
                <b><p id="Info">If you have any questions or want to get in touch, feel free to reach out to me:</p></b>
                <pre></pre>
                <h2 id="Talk">Talk to me :</h2>
                
                <div id="Details">
                    <div id="Email-Info">
                        <i id="Email-Logo" className="fa-solid fa-envelope fa-2x"></i>
                        <h4 id="Email-Heading" style={{ whiteSpace: 'pre' }}>Email  : pavankarthik634@gmail.com</h4>
                    </div>

                    <div id="Phone-Info">
                        <i id="Phone-Logo" className="fa-solid fa-phone fa-2x"></i>
                        <h4 id="Phone-Heading">Phone : 7386810583</h4>
                    </div>
                </div>

                <h2 id="Social-Media">Social Media :</h2>
                <div id="Social-Links">
                    <div id="Linkedin-Info">
                        <i id="Linkedin-Logo" className="fa-brands fa-linkedin fa-2x"></i>
                        <h4 id="Linkedin-Heading" style={{ whiteSpace: 'pre' }}>LinkedIn   : Pavan Karthik Udayagiri</h4>
                    </div>

                    <div id="Twitter-Info">
                        <i id="Twitter-Logo" className="fa-brands fa-twitter fa-2x"></i>
                        <h4 id="Twitter-Heading" style={{ whiteSpace: 'pre' }}>Twitter     : PavanKarthik_85</h4>
                    </div>

                    <div id="Instagram-Info">
                        <i id="Instagram-Logo" className="fa-brands fa-instagram fa-2x"></i>
                        <h4 id="Instagram-Heading" style={{ whiteSpace: 'pre' }}>Instagram : pavan_karthik85</h4>
                    </div>

                    <div id="Facebook-Info">
                        <i id="Facebook-Logo" className="fa-brands fa-facebook fa-2x"></i>
                        <h4 id="Facebook-Heading" style={{ whiteSpace: 'pre' }}>Facebook : pavankarthik565</h4>
                    </div>
                </div>

                <h2 id="Write" style={{ whiteSpace: 'pre' }}>Write about your requirement :</h2>
                <div id="Requirement">
                    <form onSubmit={handleSubmit}>
                        <h4 id="Name-Of-User">Name :</h4>
                        <h5><input name="name" id="Enter-Your-Name" style={{ whiteSpace: 'pre' }} type="text" placeholder="Enter Your Name" required/><i id="User-Icon" className="fa-solid fa-user"></i></h5>
                        
                        <h4 id="Name-Of-Email-User" style={{ whiteSpace: 'pre' }}>Email  :</h4>
                        <h5><input name="email" id="Enter-Your-Email" style={{ whiteSpace: 'pre' }} type="email" placeholder="Enter Your Email" required/><i id="Envelope-Icon" className="fa-solid fa-envelope"></i></h5>

                        <h4 id="User-Project">Project :</h4>
                        <h5><textarea name="message" cols="29" rows="8" id="Project-Details" style={{ whiteSpace: 'pre' }} placeholder="Write Your Project" required></textarea><i id="Project-Icon" className="fa-brands fa-product-hunt"></i></h5>
                        
                        <button id="Send-Message-Button" type="submit">Send Message  <i style={{ color: 'white' }} className="fa-brands fa-telegram fa-1x"></i></button>
                    </form>
                </div>
            </div>

            <div id="Rights">
                <h4>© Pavan Karthik Udayagiri. All rights reserved</h4>
            </div>
        </div>
    );
}

export default Contact;
