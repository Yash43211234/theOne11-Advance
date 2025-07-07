import React, { useEffect, useRef, useState } from 'react';

export const DotNavigation = ({ sectionIds = [] }) => {
  const [activeId, setActiveId] = useState(null);
  const [activeDotPosition, setActiveDotPosition] = useState({ top: 0, height: 0 });
  const dotRefs = useRef({});
  const observer = useRef(null);
  const [hoveredDot, setHoveredDot] = useState(null);

  useEffect(() => {
    const handleIntersect = (entries) => {
      let newActiveId = null;
      const viewportMid = window.innerHeight / 2;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= viewportMid && rect.bottom >= viewportMid) {
            newActiveId = id;
            break;
          }
        }
      }

      if (newActiveId && newActiveId !== activeId) {
        setActiveId(newActiveId);
      }
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      threshold: Array.from({ length: 11 }, (_, i) => i / 10),
    });

    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.current.observe(section);
    });

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [sectionIds, activeId]);

  useEffect(() => {
    if (activeId && dotRefs.current[activeId]) {
      const activeDot = dotRefs.current[activeId];
      const parentRect = activeDot.parentElement.getBoundingClientRect();
      const dotRect = activeDot.getBoundingClientRect();
      const topOffset = dotRect.top - parentRect.top;
      setActiveDotPosition({ top: topOffset, height: dotRect.height });
    }
  }, [activeId]);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const formatTitle = (id) =>
    id.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div style={styles.container}>
      <div style={styles.baseLine} />
      <div
        style={{
          ...styles.activeLine,
          top: `${activeDotPosition.top}px`,
          height: `${activeDotPosition.height}px`,
        }}
      />
      {sectionIds.map((id) => (
        <div
          key={id}
          ref={(el) => (dotRefs.current[id] = el)}
          onClick={() => scrollTo(id)}
          onMouseEnter={() => setHoveredDot(id)}
          onMouseLeave={() => setHoveredDot(null)}
          role="button"
          aria-label={`Scroll to ${id}`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') scrollTo(id);
          }}
          style={{
            ...styles.dotWrapper,
            transform: hoveredDot === id && activeId !== id ? 'scale(1.1)' : 'scale(1)',
          }}
        >
          <div
            style={{
              ...styles.dot,
              ...(activeId === id
                ? styles.activeDot
                : hoveredDot === id
                ? styles.hoverDot
                : {}),
            }}
          >
            {activeId === id && <span style={styles.innerDot} />}
          </div>
          <span
            style={{
              ...styles.title,
              ...(activeId === id ? styles.activeTitle : {}),
            }}
          >
            {formatTitle(id)}
          </span>
        </div>
      ))}

      <style>{`
        @keyframes pulseGlow {
          0% { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(1.2); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

// 💡 CSS-in-JS styles
const styles = {
  container: {
    position: 'fixed',
    top: '50%',
    right: '5px',
    transform: 'translateY(-50%)',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '36px',
    padding: '20px 16px',
    background: 'linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(255,255,255,0.03))',
    borderRadius: '30px',
    backdropFilter: 'blur(10px) saturate(180%)',
    border: '1px solid rgba(255,255,255,0.2)',
    boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
  },
  baseLine: {
    position: 'absolute',
    left: '18px',
    top: '20px',
    bottom: '20px',
    width: '3px',
    backgroundColor: 'rgba(255,255,255,0.2)',
    transform: 'translateX(-50%)',
    zIndex: -1,
    borderRadius: '2px',
  },
  activeLine: {
    position: 'absolute',
    left: '18px',
    width: '4px',
    backgroundColor: '#6366f1',
    transform: 'translateX(-50%)',
    zIndex: 0,
    borderRadius: '2px',
    transition: 'all 0.4s cubic-bezier(0.86, 0, 0.07, 1)',
  },
  dotWrapper: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    gap: '10px',
    transition: 'transform 0.3s ease',
  },
  dot: {
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    backgroundColor: '#a7b4c2',
    border: '1px solid rgba(255,255,255,0.5)',
    transition: 'all 0.3s ease',
    position: 'relative',
    boxShadow: 'none',
  },
  hoverDot: {
    backgroundColor: '#cbd5e1',
  },
  activeDot: {
    backgroundColor: '#818cf8',
    border: '3px solid white',
    boxShadow: '0 0 20px rgba(129, 140, 248, 0.8), 0 0 8px white',
  },
  innerDot: {
    position: 'absolute',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'white',
    opacity: '0.8',
    animation: 'pulseGlow 1.5s infinite alternate ease-in-out',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  title: {
    fontSize: '0.7rem',
    color: '#bbb',
    fontWeight: 400,
    transition: 'color 0.3s ease',
  },
  activeTitle: {
    color: '#fff',
    fontWeight: 600,
    textShadow: '0 0 10px #7a83ff',
  },
};
