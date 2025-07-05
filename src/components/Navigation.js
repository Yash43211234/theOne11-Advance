// src/components/Navigation.js
import React, { useState } from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);


    const competitionItems = [
        { title: "Battle of Bands", slug: "battle-of-bands" },
        { title: "Singer/Songwriter Battle", slug: "singer-songwriter-battle" },
        { title: "Musicians (Instrumental)", slug: "musicians-instrumental" },
        { title: "Battle of Rappers", slug: "battle-of-rappers" },
        { title: "Battle of DJs", slug: "battle-of-djs" },
        { title: "48-Hours Music Making Challenge", slug: "48-hours-music-making" },
        { title: "Upcoming Competitions", slug: "upcoming-competitions" },
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
                        <Link to="/" className={styles.navLinks} onClick={toggleMenu}>
                            Home
                        </Link>

                    </li>
                    <li
                        className={styles.navItem}
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <a className={styles.navLinks} onClick={toggleMenu}>
                            Competitions
                        </a>
                        {dropdownOpen && (
                            <ul className={styles.dropdown}>
                                {competitionItems.map((item, index) => (
                                    <li key={index} className={styles.dropdownItem}>
                                        <Link
                                            to={`/register/${item.slug}`}
                                            state={{
                                                title: item.title,
                                                imgSrc: `https://placehold.co/600x400/333333/00ffff?text=${encodeURIComponent(item.title.replace(/\s+/g, '+'))}`,
                                                description: "Competition Details", // Optional default
                                            }}
                                            className={styles.navLinks}
                                            onClick={toggleMenu}
                                        >
                                            {item.title}
                                        </Link>
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
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;