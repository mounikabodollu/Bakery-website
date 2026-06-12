import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Gallery.css";

function Gallery() {

  const galleryImages = [
    {
      img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
      className: "big-card",
    },

    {
      img: "https://images.unsplash.com/photo-1464306076886-da185f6a9d05?q=80&w=1200&auto=format&fit=crop",
      className: "small-card",
    },

    {
      img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop",
      className: "small-card",
    },

    {
      img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
      className: "wide-card",
    },
  ];

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

          <div className={item.className} key={index}>

            <img src={item.img} alt={`Gallery ${index + 1}`} />

          </div>

        ))}

      </div>

      {/* Footer */}

      <Footer />

    </div>
  );
}

export default Gallery;