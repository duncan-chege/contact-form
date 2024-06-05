/* Pay particular attention to making this form accessible. Building accessible forms is a key skill for front-end
developers. */

import "./Styles.css"

export default function ContactForm(){
return (
<main role="main">
    <h2> Contact Us </h2>
    <form>
        <div className="names-bloc">
            <div>
                <label htmlFor="fname" className="">First Name</label><br />
                <input type="text" id="fname" name="first-name" className="" />
            </div>
            <div>
                <label htmlFor="lname" className="">Last Name</label><br />
                <input type="text" id="lname" name="last-name" className="" />
            </div>
        </div>
        <div>
            <label htmlFor="email" className="">Email</label><br />
            <input type="email" id="email" name="email" className="" />
        </div>
        <div>
            <p className="">Query Type</p>
            <div className="radio-bloc">
                <div>
                    <input type="radio" id="general" name="queryType" value="General Enquiry" />
                    <label htmlFor="general">General Enquiry</label>
                </div>
                <div>
                    <input type="radio" id="support" name="queryType" value="Support Request" />
                    <label htmlFor="support">Support Request</label>
                </div>
            </div>
        </div>
    </form>
</main>
);
}