import React, { useState, useRef } from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [eventsDropdown, setEventsDropdown] = useState(false);

  // refs to store timeout IDs
  const homeTimeoutRef = useRef(null);
  const eventsTimeoutRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const homeItems = [
    { title: "About Us", path: "/about" },
    { title: "Our Mission", path: "/mission" },
    { title: "Team", path: "/team" },
    { title: "FAQs", path: "/faqs" },
    { title: "Support", path: "/support" },
    { title: "Privacy Policy", path: "/privacy" },
    { title: "Terms Of Service", path: "/terms" },
  ];

  const competitionItems = [
    { title: "Battle of Bands", slug: "battle-of-bands" },
    { title: "Singer/Songwriter Battle", slug: "singer-songwriter-battle" },
    { title: "Musicians (Instrumental)", slug: "musicians-instrumental" },
    { title: "Battle of Rappers", slug: "battle-of-rappers" },
    { title: "Battle of DJs", slug: "battle-of-djs" },
    { title: "48-Hours Music Making Challenge", slug: "48-hours-music-making" },
    { title: "Upcoming Competitions", slug: "upcoming-competitions" },
  ];

  // Handlers for Home
  const handleHomeEnter = () => {
    clearTimeout(homeTimeoutRef.current);
    setHomeDropdown(true);
  };

  const handleHomeLeave = () => {
    homeTimeoutRef.current = setTimeout(() => setHomeDropdown(false), 200); // Increased delay for smoother exit
  };

  // Handlers for Events
  const handleEventsEnter = () => {
    clearTimeout(eventsTimeoutRef.current);
    setEventsDropdown(true);
  };

  const handleEventsLeave = () => {
    eventsTimeoutRef.current = setTimeout(() => setEventsDropdown(false), 100); // Increased delay for smoother exit
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <a href="#hero" className={styles.navbarLogo}>
          ONE11 Show
        </a>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          {/* Using text characters for hamburger/close for simplicity as per original,
              but an SVG icon is generally preferred for better styling/semantics. */}
          <i>{isOpen ? '✖' : '☰'}</i> 
        </div>

        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          {/* HOME DROPDOWN */}
          <li
            className={styles.navItem}
            onMouseEnter={handleHomeEnter}
            onMouseLeave={handleHomeLeave}
          >
            <span className={styles.navLinks}>
              HOME <span className={styles.arrow}><img src='bottom-line.png' alt="arrow" /></span> {/* Added alt text for accessibility */}
            </span>
            {/* Conditionally apply dropdownVisible class */}
            {homeDropdown && (
              <ul className={`${styles.dropdown1} ${homeDropdown ? styles.dropdownVisible : ''}`} 
                  onMouseEnter={handleHomeEnter} 
                  onMouseLeave={handleHomeLeave}>
                {homeItems.map((item, idx) => (
                  <li key={idx} className={styles.dropdownItem}>
                    <Link to={item.path} className={styles.dropdownLink} onClick={() => setIsOpen(false)}> {/* Close mobile menu on click */}
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* EVENTS DROPDOWN */}
          <li
            className={styles.navItem}
            onMouseEnter={handleEventsEnter}
            onMouseLeave={handleEventsLeave}
          >
            <span className={styles.navLinks}>
              EVENTS <span className={styles.arrow}><img src='bottom-line.png' alt="arrow" /></span> {/* Added alt text */}
            </span>
            {/* Conditionally apply dropdownVisible class */}
            {eventsDropdown && (
              <ul className={`${styles.dropdown} ${eventsDropdown ? styles.dropdownVisible : ''}`} 
                  onMouseEnter={handleEventsEnter} 
                  onMouseLeave={handleEventsLeave}>
                {competitionItems.map((item, idx) => (
                  <li key={idx} className={styles.dropdownItem}>
                    <Link
                      to={`/register/${item.slug}`}
                      state={{
                        title: item.title,
                        imgSrc: `https://placehold.co/600x400/333333/00ffff?text=${encodeURIComponent(item.title)}`,
                        description: "Competition Details",
                      }}
                      className={styles.dropdownLink}
                      onClick={() => setIsOpen(false)} // Close mobile menu on click
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Other Nav Items */}
          <li className={styles.navItem}>
            <a href="#updates" className={styles.navLinks} onClick={() => setIsOpen(false)}>UPDATES</a> {/* Use actual IDs or routes */}
          </li>

          <li className={styles.navItem}>
            <a href="#contact" className={styles.navLinks} onClick={() => setIsOpen(false)}>CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;