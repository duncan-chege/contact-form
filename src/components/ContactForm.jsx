/* Pay particular attention to making this form accessible. Building accessible forms is a key skill for front-end
developers. */

import "./Styles.css"
import { useState } from "react";

export default function ContactForm(){
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        query: "",
        message: "",
        consent: false,
    });

    const [emailError, setEmailError] = useState("");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const [valid, setValid] = useState(false);

    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (event) => {
        const {name, value, type, checked} = event.target;
        setValues((values) => ({
            ...values,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const handleEmailChange = (event) => {
        const emailValue = event.target.value;
        setValues((values) => ({
            ...values,
            email: emailValue,
        }))

        if (!emailPattern.test(emailValue)){
            setEmailError("Please enter a valid email address");
        } else {
            setEmailError("");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if(
            values.firstName &&
            values.lastName &&
            values.email &&
            emailPattern.test(values.email) &&
            values.query &&
            values.message &&
            values.consent
        ) {
            setValid(true);
        } else {
        setValid(false);
    }
}

    return (
    <main role="main">
        { valid && <div className="success-message" role="alert">
            <h5><i className="bi bi-check-circle"></i> Message Sent!</h5>
            <p>Thanks for completing the form. We'll be in touch soon!</p>
        </div> }
        <div className="form-bloc">
            <h2> Contact Us </h2>
            <form onSubmit={handleSubmit}>
                <div className="names-bloc">
                    <div>
                        <label htmlFor="fname" className="">First Name <i className="bi bi-asterisk"></i></label><br />
                        <input 
                            type="text"
                            id="fname"
                            name="firstName"
                            value={values.firstName}
                            onChange={handleInputChange}
                            className={submitted && !values.firstName ? "invalid-entry" : ""}
                            aria-required="true"
                        />
                        {submitted && !values.firstName && <span className="error" role="alert">This field is required</span>}
                    </div>
                    <div>
                        <label htmlFor="lname" className="">Last Name <i className="bi bi-asterisk"></i></label><br />
                        <input
                            type="text"
                            id="lname"
                            name="lastName"
                            value={values.lastName}
                            onChange={handleInputChange}
                            className={submitted && !values.lastName ? "invalid-entry" : ""}
                            aria-required="true"
                        />
                        {submitted && !values.lastName && <span className="error" role="alert">This field is required</span>}
                    </div>
                </div>
                <div className="email-bloc">
                    <label htmlFor="email" className="">Email <i className="bi bi-asterisk"></i></label><br />
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleEmailChange}
                        className={submitted && (!values.email || emailError) ? "invalid-entry" : ""}
                        aria-required="true"
                    />
                    {submitted && (!values.email || emailError) && <span className="error" role="alert">Please enter a valid email address</span>}
                </div>
                <fieldset>
                    <legend className="">Query Type <i className="bi bi-asterisk"></i></legend>
                    <div className="radio-bloc">
                        <div>
                            <input 
                                type="radio"
                                id="general"
                                name="query"
                                value="general"
                                checked={values.query === "general"}
                                onChange={handleInputChange}
                                aria-required="true"
                            />
                            <label htmlFor="general">General Enquiry</label>
                        </div>
                        <div>
                            <input 
                                type="radio"
                                id="support"
                                name="query"
                                value="support"
                                checked={values.query === "support"}
                                onChange={handleInputChange}
                                aria-required="true"
                            />
                            <label htmlFor="support">Support Request</label>
                        </div>
                        {submitted && !values.query && <span className="error" role="alert">Please select a query type</span>}
                    </div>
                </fieldset>
                <div className="message-bloc">
                    <label htmlFor="message" className="">Message <i className="bi bi-asterisk"></i></label><br />
                    <textarea 
                        id="message"
                        name="message"
                        rows="5"
                        value={values.message}
                        onChange={handleInputChange}
                        className={submitted && !values.message ? "invalid-entry" : ""}
                        aria-required="true"
                    >
                    </textarea>
                    {submitted && !values.message && <span className="error" role="alert">This field is required</span>}
                </div>
                <div className="consent-bloc">
                    <input 
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={values.consent}
                        onChange={handleInputChange}
                        aria-required="true"
                    />
                    <label htmlFor="consent">I consent to being contacted by the team</label>
                    {submitted && !values.consent && <span className="error" role="alert">To submit this form, please consent to being contacted</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </main>
    );
}