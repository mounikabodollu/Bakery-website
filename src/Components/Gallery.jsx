import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Gallery.css";

function Gallery() {
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/36169944/pexels-photo-36169944.jpeg",
      alt: "Bakery counter display",
      span: "col-span-2 row-span-2",
    },
    {
      src: "https://media.base44.com/images/public/6a29246ed762f5bdb84d5233/82984b1f5_generated_b9fad466.png",
      alt: "Black Forest Cake",
      span: "",
    },
    {
      src: "https://media.base44.com/images/public/6a29246ed762f5bdb84d5233/83e236ea4_generated_4038fa7a.png",
      alt: "Chocolate Cake",
      span: "",
    },
    {
      src: "https://media.base44.com/images/public/6a29246ed762f5bdb84d5233/e87dbfe65_generated_e43f4222.png",
      alt: "Fresh bakery items",
      span: "col-span-2",
    },
    {
      src: "https://media.base44.com/images/public/6a29246ed762f5bdb84d5233/8a3c590e7_generated_c2fa1989.png",
      alt: "Fast food dishes",
      span: "",
    },
    {
      src: "https://media.base44.com/images/public/6a29246ed762f5bdb84d5233/08a3219ce_generated_9ceb9e78.png",
      alt: "Manchurian",
      span: "",
    },
    {
      src: "https://media.base44.com/images/public/6a29246ed762f5bdb84d5233/fb8b9b869_generated_9d3278fe.png",
      alt: "Butterscotch Cake",
      span: "",
    },
    {
      src: "https://media.base44.com/images/public/6a29246ed762f5bdb84d5233/2701702c2_generated_733a38fd.png",
      alt: "White Forest Cake",
      span: "",
    },
    {
      src: "https://media.base44.com/images/public/6a29246ed762f5bdb84d5233/f92e5bf0f_generated_467d966c.png",
      alt: "Cream rolls and pastries",
      span: "col-span-2",
    },
    {
      src: "https://media.base44.com/images/public/6a29246ed762f5bdb84d5233/fad542463_generated_93fe9339.png",
      alt: "Celebration setup",
      span: "col-span-2",
    },
    {
      src: "https://media.base44.com/images/public/6a29246ed762f5bdb84d5233/1087ef131_generated_a68d8f45.png",
      alt: "Chicken fried rice",
      span: "",
    },
    {
      src: "https://media.base44.com/images/public/6a29246ed762f5bdb84d5233/9e774d251_generated_cf41e924.png",
      alt: "Pineapple cake",
      span: "",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1
    );
  };

  const showNext = (e) => {
    e.stopPropagation();
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
        </div>
      </nav>

      {/* Header */}
      <div className="gallery-header">
        <p>A GLIMPSE INTO</p>

        <h1>Our Gallery</h1>

        <span>
          Explore our freshly baked creations and mouthwatering fast food
          specialties
        </span>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {galleryImages.map((item, index) => (
          <button
            key={index}
            type="button"
            className={`gallery-card ${item.span}`}
            onClick={() => openLightbox(index)}
            aria-label={`Open image ${index + 1}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="lightbox-frame"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={closeLightbox}
            >
              ×
            </button>

            <button
              className="lightbox-arrow lightbox-prev"
              onClick={showPrev}
            >
              ‹
            </button>

            <img
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
            />

            <button
              className="lightbox-arrow lightbox-next"
              onClick={showNext}
            >
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