import React from 'react';

const SecondSection = () => {
  return (
    <div style={styles.container}>
      {/* Left Image Section */}
      <div style={styles.leftSection}>
        <img
          src="/chaos.png" // Replace with your actual path or import
          alt="Tomorrowland Account Preview"
          style={styles.image}
        />
      </div>

      {/* Right Content Section */}
      <div style={styles.rightSection}>
        <p style={styles.label}>ALL EVENT INFO IN ONE PLACE</p>
        <h2 style={styles.heading}>Your Tomorrowland Account</h2>
        <p style={styles.description}>
          Your Tomorrowland Account underwent some changes. A new design and an improved user experience — 
          ready for the future, is waiting for you.
        </p>
        <button style={styles.button}>DISCOVER MORE →</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '4rem 2rem',
    backgroundColor: '#000',
    color: '#fff',
    flexWrap: 'wrap',
    gap: '2rem',
  },
  leftSection: {
    flex: 1,
    minWidth: '300px',
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '600px',
    height:'302px',
    borderRadius: '20px',
  },
  rightSection: {
    flex: 1,
    minWidth: '300px',
  },
  label: {
    fontSize: '0.9rem',
    color: '#aaa',
    letterSpacing: '2px',
    marginBottom: '1rem',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.1rem',
    color: '#ccc',
    marginBottom: '2rem',
    maxWidth: '500px',
  },
  button: {
    backgroundColor: '#B91C55',
    color: '#fff',
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
  },
};

export default SecondSection;
