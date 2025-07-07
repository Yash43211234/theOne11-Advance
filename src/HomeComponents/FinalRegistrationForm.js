// src/pages/FinalRegistrationForm.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './FinalRegistrationForm.module.css';

const FinalRegistrationForm = () => {
  const { state } = useLocation();
  const { title, description, imgSrc } = state || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  if (!title || !description || !imgSrc) {
    return <h2>No competition data received.</h2>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Register for: {title}</h2>
      <img src={imgSrc} alt={title} className={styles.poster} />
      <p className={styles.description}>{description}</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="tel" placeholder="Phone Number" required />
        <textarea placeholder="Any Message (optional)" rows="4" />
        <button type="submit" className={styles.submitBtn}>Submit</button>
      </form>
    </div>
  );
};

export default FinalRegistrationForm;
