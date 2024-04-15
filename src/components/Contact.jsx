import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';


function Contact() {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === "email") {
            setEmail(inputValue);
        } else if (inputType === "userName") {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };


    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !userName) {
            setErrorMessage("Email or Name is invalid");
            return;
        }

        if (!setMessage(message)) {
            setErrorMessage(`Message is required.`);
            return;
        }

        setUserName("");
        setEmail("");
        setMessage("");
    };

    return (
        <section>
            <div className="projects-section" id="contact-section">
                <p className="projects-banner">Contact</p>
            </div>
            <div className="form-div" >
                <form className="form-card">
                    <div className="name-div">
                        <img className="contact-me" src="./Images/contact-me.svg" alt="Phone Icon Image" />
                    </div>
                    <div className="input-div">
                        <div className="name-div">
                            <input className="name-input" type="text" placeholder="Name" value={userName}
                                name="userName" onChange={handleInputChange} />
                            <label className="form-label" ></label>
                        </div>
                        <div className="name-div">
                            <input className="name-input" type="email" placeholder="Email" value={email} name="email" onChange={handleInputChange} />
                            <label className="form-label"></label>
                        </div>
                        <div className="name-div">
                            <textarea className="message-input" value={message} type="message" placeholder="Message" name="message" onChange={handleInputChange} />
                            <label className="form-label"></label>
                        </div>
                    </div>
                    <div className="btn-div">
                        <button className="send-btn" onClick={handleFormSubmit}>Send</button>
                    </div>
                    {errorMessage && (
                        <div className='error-div'>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </form>
            </div>
            <div className="contact-slider" id="contact-slider">
                <div className="contact-div">
                    <a href="tel: 713-679-0177" title="713-679-0177">
                        <img id="phone-img" src="./Images/phone-icon.svg" alt="Phone Icon Image" /></a>
                    <span className="phone-text" />
                </div>
                <div className="contact-div">
                    <a href="https://www.linkedin.com/in/efren-leal/" target="_blank">
                        <img id="github-img" src="./Images/linkedin-logo.svg" alt="Github Logo" /></a>
                    <span className="git-hub"></span>
                </div>
                <div className="contact-div">
                    <a href="mailto:efrenleal19@gmail.com" title="efrenleal19@gmail.com" target="_blank">
                        <img id="email-img" src="./Images/mail-icon.svg" alt="Mail Icon Image" /></a>
                    <span className="e-mail"></span>
                </div>
            </div>
        </section>
    );
};

export default Contact;