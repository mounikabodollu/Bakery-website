import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Gallery.css";

function Gallery() {
  const galleryImages = [
    {
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop",
      alt: "Freshly baked cupcakes with rose frosting",
      className: "big-card",
    },
    {
      img: "https://images.unsplash.com/photo-1512058564366-c9e3ad7aad59?q=80&w=1200&auto=format&fit=crop",
      alt: "Golden croissants and artisan bread",
      className: "small-card",
    },
    {
      img: "https://images.unsplash.com/photo-1604908177549-62d7500d0f98?q=80&w=1200&auto=format&fit=crop",
      alt: "Colorful macarons and pastries",
      className: "small-card",
    },
    {
      img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop",
      alt: "Signature layered cake with fresh berries",
      className: "wide-card",
    },
    {
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200&auto=format&fit=crop",
      alt: "Warm bakery cookies on a wooden board",
      className: "small-card",
    },
    {
      img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
      alt: "Premium bakery special desserts plated elegantly",
      className: "small-card",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrev = (event) => {
    event.stopPropagation();
    setSelectedIndex((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1
    );
  };

  const showNext = (event) => {
    event.stopPropagation();
    setSelectedIndex((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="gallery-page">

      {/* Navbar */}

      <nav className="gallery-navbar">

        <div className="logo-section">

          <div className="logo-circle">V</div>

          <div>
            <h2>Sri Vinayaka</h2>
            <p>BAKERY & FAST FOOD</p>
          </div>

        </div>

        <ul className="gallery-links">

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/menu">Menu</Link>
          </li>

          <li className="active-link">
            <Link to="/gallery">Gallery</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

        </ul>

        <div className="gallery-icons">
          <span>📞</span>
          <span>🛒</span>
        </div>

      </nav>

      {/* Header */}

      <div className="gallery-header">

        <p>A GLIMPSE INTO</p>

        <h1>Our Gallery</h1>

        <span>
          Explore our freshly baked creations and mouthwatering
          fast food specialties
        </span>

      </div>

      {/* Gallery Grid */}

      <div className="gallery-grid">

        {galleryImages.map((item, index) => (

          <button
            type="button"
            className={`gallery-card ${item.className}`}
            key={index}
            onClick={() => openLightbox(index)}
            aria-label={`Open image ${index + 1} in lightbox`}
          >
            <img src={item.img} alt={item.alt} />
          </button>

        ))}

      </div>

      {selectedIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-frame" onClick={(event) => event.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
              ×
            </button>
            <button className="lightbox-arrow lightbox-prev" onClick={showPrev} aria-label="Previous image">
              ‹
            </button>
            <img src={galleryImages[selectedIndex].img} alt={galleryImages[selectedIndex].alt} />
            <button className="lightbox-arrow lightbox-next" onClick={showNext} aria-label="Next image">
              ›
            </button>
            <div className="lightbox-caption">
              {selectedIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}

      <Footer />

    </div>
  );
}

export default Gallery;