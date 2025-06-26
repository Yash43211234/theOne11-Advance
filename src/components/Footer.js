// src/components/Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.linksGroup}>
                    <a href="https://www.creatouscollective.media" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Creatous Collective Media</a>
                    <a href="mailto:info@theone11.show" className={styles.footerLinkRed}>info@theone11.show</a>
                    <a href="tel:+917477785294" className={styles.footerLink}>+91 7477785294</a>
                </div>
                <div className={styles.socialIcons}>
                    <a href="#" className={styles.socialLink}><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className={styles.socialLink}><i className="fab fa-twitter"></i></a>
                    <a href="#" className={styles.socialLink}><i className="fab fa-instagram"></i></a>
                    <a href="#" className={styles.socialLink}><i className="fab fa-youtube"></i></a>
                </div>
                <div className={styles.legalLinks}>
                    <a href="#" className={styles.footerLinkSmall}>Privacy Policy</a>
                    <a href="#" className={styles.footerLinkSmall}>Terms of Service</a>
                    <a href="#" className={styles.footerLinkSmall}>Brand Guidelines</a>
                </div>
                <p className={styles.copyright}>&copy; {new Date().getFullYear()} The One11 Show. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;