import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    };

    return (


        <div class="contact">
            <h1 class="nonop">Coming Soon - Not Currently Operational</h1>
            <h1 class="nonop">In the mean time, please consider contacting me here: ava.m.bullock@gmail.com</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                        <textarea className="textarea contact" defaultValue={message} onBlur={handleChange}></textarea>
                    </div>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}

                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
            </form>


        </div>

    )
}


export default Contact;