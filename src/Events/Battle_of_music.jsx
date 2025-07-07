import React from 'react';
// Assuming SecondSection is not needed on this specific page based on the structure
// import SecondSection from '../EventComponents/SecondSection';
import VerticalCompetitionCards from '../EventComponents/VerticalCompetitionCards';

const Battle_of_music = () => {
  return (
    <div style={styles.container}>
      {/* Fullscreen Banner Section */}
      <div style={styles.banner}>
        <img
          src="/images/wave-haikei.png" // Corrected path assumption
          alt="Battle of Music Banner"
          style={styles.bannerImage}
        />
        <div style={styles.bannerOverlay}></div> {/* Added for better text readability */}
        <div style={styles.bannerContent}> {/* Changed to content for more flexibility */}
          <h1 style={styles.bannerTitle}>Unleash Your Sound!</h1> {/* Stronger heading */}
          <p style={styles.bannerSubtitle}>Join the ultimate music battles and showcase your talent.</p> {/* Engaging subtitle */}
          {/* Optional: Add a call to action button here for the main event */}
          {/* <button style={styles.bannerButton}>Register Now</button> */}
        </div>
      </div>

      {/* Vertical Competition Cards Section */}
      <VerticalCompetitionCards />
    </div>
  );
};

const styles = {
  container: {
    margin: 0,
    padding: 0,
    color: '#fff',
    backgroundColor: '#0a0a0a', // Darker background for consistency with cards
    fontFamily: "'Inter', sans-serif", // Consistent font
    minHeight: '100vh', // Ensures the container takes at least full viewport height
    display: 'flex',
    flexDirection: 'column',
  },
  banner: {
    position: 'relative',
    width: '100%',
    height: '100vh', // Full screen height
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensures the image covers entire space
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1, // Ensure image is behind overlay and text
  },
  bannerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Darker overlay for text contrast
    zIndex: 2, // Above image, below text
  },
  bannerContent: { // Renamed from bannerText for more semantic clarity
    position: 'relative', // Relative to banner, but zIndex 3 makes it on top
    zIndex: 3,
    color: '#ffffff',
    padding: '1rem 2rem',
    borderRadius: '10px',
    maxWidth: '80%', // Limit width for better readability on large screens
  },
  bannerTitle: {
    fontSize: '4.5rem', // Larger, more impactful title
    fontWeight: '800', // Extra bold
    marginBottom: '1rem',
    textShadow: '0 0 20px rgba(255, 77, 166, 0.8)', // Stronger glow effect
    color: '#ff4da6', // Vibrant pink
    letterSpacing: '0.08em',
    lineHeight: '1.1',
  },
  bannerSubtitle: {
    fontSize: '1.8rem', // Good size for a strong subtitle
    fontWeight: '400',
    color: '#e0e0e0', // Slightly off-white for contrast
    marginBottom: '2rem',
    maxWidth: '700px', // Constrain width
    margin: '0 auto 2rem auto', // Center and add bottom margin
  },
  bannerButton: {
    display: 'inline-block',
    padding: '1rem 3rem',
    backgroundColor: '#f81a6b', // Matching button color
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '50px',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
    boxShadow: '0 6px 20px rgba(248, 26, 107, 0.6)',
    cursor: 'pointer',
    border: 'none',
    '&:hover': {
      backgroundColor: '#e6005c',
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 25px rgba(248, 26, 107, 0.8)',
    },
  },
};

export default Battle_of_music;