// src/components/ContactSection.js
import React, { useState } from 'react';
import styles from './ContactSection.module.css';

const ContactSection = ({ showMessage }) => {
    // State for controlled form components
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // In a real app, you would send this data (name, email, message) to a backend
        console.log({ name, email, message }); // For demonstration
        showMessage('Your message has been sent successfully! We will get back to you soon.');

        // Reset form fields after submission
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section id="contact" className={styles.contactSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Get In Touch</h2>
                <p className={styles.sectionDescription}>
                    Have questions, partnership inquiries, or want to apply to be featured? Reach out to us!
                </p>
                <div className={styles.contactInfo}>
                    {/* Assuming Font Awesome is linked in your index.html for icons */}
                    <a href="mailto:info@theone11.show" className={styles.contactLink}>
                        <i className="fas fa-envelope"></i> info@theone11.show
                    </a>
                    <a href="tel:+917477785294" className={styles.contactLink}>
                        <i className="fas fa-phone"></i> +91 7477785294
                    </a>
                </div>
                <div className={styles.formWrapper}> {/* Changed from formContainer to formWrapper for specific styling */}
                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className={styles.formInput}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className={styles.formInput}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            className={styles.formTextarea}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                        <button type="submit" className={styles.submitButton}>Send Message</button> {/* Removed btn-primary for direct styling */}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;