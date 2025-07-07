import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './RegisterPage.module.css';

const RegisterPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { title, description, imgSrc } = state || {};

  if (!title || !description || !imgSrc) {
    return (
      <div className={styles.registerContainer}>
        <h2 className={styles.title}>No Competition Selected</h2>
        <p className={styles.description}>Please go back and choose a competition.</p>
        <button className={styles.submitBtn} onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  const handleNavigate = () => {
    navigate('/final-registration', {
      state: { title, description, imgSrc }
    });
  };

  return (
    <div className={styles.registerContainer}>
      <h2 className={styles.title}>{title}</h2>
      <img src={imgSrc} alt={title} className={styles.poster} />
      <p className={styles.description}>{description}</p>

      <button className={styles.submitBtn} onClick={handleNavigate}>
        Go for Registration
      </button>
    </div>
  );
};

export default RegisterPage;
