// src/components/Navigation.js
import React, { useState } from 'react';
import styles from './Navigation.module.css';
// The logo is now text, so no image import is needed.

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);


    const competitionItems = [
        { title: "Battle of Bands" },
        { title: "Singer/Songwriter Battle" },
        { title: "Musicians (Instrumental)" },
        { title: "Battle of Rappers" },
        { title: "Battle of DJs" },
        { title: "48-Hours Music Making Challenge" },
        { title: "Upcoming Competitions" }
    ];
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                {/* The logo is text, styled by .navbarLogo on the p tag */}
                <a href="#hero"> {/* Link the logo to the hero/home section (assuming #hero is your top section) */}
                    <p className={styles.navbarLogo}>ONE11 Show</p>
                </a>

                <div className={styles.menuIcon} onClick={toggleMenu}>
                    {/* Using simple text icons for the menu toggle */}
                    {/* For production, consider using a dedicated icon library like Font Awesome */}
                    <i className={isOpen ? styles.closeIcon : styles.hamburgerIcon}>
                        {isOpen ? '✖' : '☰'}
                    </i>
                </div>

                <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
                    <li className={styles.navItem}>
                        <a href="#home" className={styles.navLinks} onClick={toggleMenu}>
                            Home
                        </a>
                    </li>
                    <li
                        className={styles.navItem}
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <a href="#competitions" className={styles.navLinks} onClick={toggleMenu}>
                            Competitions
                        </a>
                        {dropdownOpen && (
                            <ul className={styles.dropdown}>
                                {competitionItems.map((item, index) => (
                                    <li key={index} className={styles.dropdownItem}>
                                        <a href="#competitions" onClick={toggleMenu}>
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                    <li className={styles.navItem}>
                        <a href="#episodes" className={styles.navLinks} onClick={toggleMenu}>
                            Episodes
                        </a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#events" className={styles.navLinks} onClick={toggleMenu}>
                            Events
                        </a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#register" className={styles.navLinks} onClick={toggleMenu}>
                            Register for Battles
                        </a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#contact" className={styles.navLinks} onClick={toggleMenu}>
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;