import React, { useState, useRef } from 'react';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [eventsDropdown, setEventsDropdown] = useState(false);

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
 { title: "Music Battles", slug: "battle-of-music" },
     { title: "FAQ", slug: "battle-of-music" },
      { title: "About Us", slug: "battle-of-music" },

    
  ];

  const handleHomeEnter = () => {
    clearTimeout(homeTimeoutRef.current);
    setHomeDropdown(true);
  };

  const handleHomeLeave = () => {
    homeTimeoutRef.current = setTimeout(() => setHomeDropdown(false), 200);
  };

  const handleEventsEnter = () => {
    clearTimeout(eventsTimeoutRef.current);
    setEventsDropdown(true);
  };

  const handleEventsLeave = () => {
    eventsTimeoutRef.current = setTimeout(() => setEventsDropdown(false), 200);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <NavLink to="/" className={styles.navbarLogo}>
          ONE11 Show
        </NavLink>

        <div className={styles.menuIcon} onClick={toggleMenu}>
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
              HOME <span className={styles.arrow}><img src='bottom-line.png' alt="arrow" /></span>
            </span>
            {homeDropdown && (
              <ul className={`${styles.dropdown} ${styles.dropdownVisible}`}
                  onMouseEnter={handleHomeEnter}
                  onMouseLeave={handleHomeLeave}>
                {homeItems.map((item, idx) => (
                  <li key={idx} className={styles.dropdownItem}>
                    <NavLink
                      to={item.path}
                      className={styles.dropdownLink}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </NavLink>
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
              EVENTS <span className={styles.arrow}><img src='bottom-line.png' alt="arrow" /></span>
            </span>
            {eventsDropdown && (
              <ul className={`${styles.dropdown} ${styles.dropdownVisible}`}
                  onMouseEnter={handleEventsEnter}
                  onMouseLeave={handleEventsLeave}>
                {competitionItems.map((item, idx) => (
                  <li key={idx} className={styles.dropdownItem}>
                    <NavLink
                      to={`/${item.slug}`}
                      className={styles.dropdownLink}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Other Nav Items */}
          <li className={styles.navItem}>
            <NavLink to="/updates" className={styles.navLinks} onClick={() => setIsOpen(false)}>UPDATES</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/contact" className={styles.navLinks} onClick={() => setIsOpen(false)}>CONTACT</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
