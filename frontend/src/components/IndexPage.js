// src/components/IndexPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StepsSection from './StepsSection';
import styles from './Indexpage.module.css'; // Ensure correct file name

// Array of car images with captions
const carSlides = [
  {
    image: '/images/car2.avif',
    title: 'Luxury Cars',
    description: 'Drive the best luxury cars at affordable prices.',
  },
  {
    image: '/images/car2.avif',
    title: 'SUV Collection',
    description: 'Spacious SUVs for family and adventure trips.',
  },
  {
    image: '/images/car1.png',
    title: 'Economy Cars',
    description: 'Budget-friendly cars for daily use.',
  },
];

const IndexPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [location, setLocation] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  // Auto-slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carSlides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // Handle location selection
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // Toggle the menu (for mobile view)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.indexContainer}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>🚗 Cars-Go</div>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
          <li>
            <select
              value={location}
              onChange={handleLocationChange}
              className={styles.locationSelect}
            >
              <option value="">Select Location</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
              <option value="bangalore">Bangalore</option>
              <option value="hyderabad">Hyderabad</option>
            </select>
          </li>
          <li><Link to="/" className={styles.navLink} onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/cars" className={styles.navLink} onClick={toggleMenu}>Car List</Link></li>
          <li><Link to="/login" className={styles.navLink} onClick={toggleMenu}>Login</Link></li>
          <li><Link to="/about" className={styles.navLink} onClick={toggleMenu}>About</Link></li>
        </ul>
      </nav>

      {/* Car Slideshow */}
      <div className={styles.slideshowContainer}>
        <div
          className={styles.slidesWrapper}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carSlides.map((slide, index) => (
            <div key={index} className={styles.slide}>
              <img src={slide.image} alt={`Slide ${index + 1}`} />
              <div className={styles.slideContent}>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <Link to="/cars" className={styles.btn}>Explore Cars</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Steps Section */}
      <StepsSection />

      {/* About Us Section */}
      <section className={styles.aboutUs}>
        <p>Cars-Go: Book your car from anywhere in India. Make your ride memorable!</p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2025 Cars-Go. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default IndexPage;
