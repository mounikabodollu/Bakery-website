import { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!review.trim()) {
      return;
    }

    setShowSuccess(true);
    setName("");
    setReview("");
  };

  const closeSuccess = () => setShowSuccess(false);

  return (
    <div className="contact-root">
      <div className="contact-page">

      {/* NAVBAR */}

      <nav className="contact-navbar">

        <div className="logo-section">

          <div className="logo-circle">V</div>

          <div>
            <h2>Sri Vinayaka</h2>
            <p>BAKERY & FAST FOOD</p>
          </div>

        </div>

        <ul className="contact-links">

          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>

          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>

        </ul>

        <div className="contact-icons">
        </div>

      </nav>

      {/* HEADER */}

      <div className="contact-header">

        <p>GET IN TOUCH</p>

        <h1>Contact Us</h1>

      </div>

      {/* CONTENT */}

      <div className="contact-container">

        {/* LEFT */}

        <div className="contact-left">

          <div className="info-grid">

            {/* CALL */}

            <a
              href="tel:+919908808421"
              className="info-card"
            >
              <h3>Call Us</h3>
              <p>+91 99088 08421</p>
            </a>

            {/* WHATSAPP */}

            <a
              href="https://wa.me/919908808421"
              target="_blank"
              rel="noreferrer"
              className="info-card"
            >
              <h3>WhatsApp</h3>
              <p>Order Online</p>
            </a>

            {/* LOCATION */}

            <a
              href="https://maps.google.com/?q=Bongloor+X+Road+Ibrahimpatnam+Telangana"
              target="_blank"
              rel="noreferrer"
              className="info-card"
            >
              <h3>Visit Us</h3>

              <p>
                Bongloor X Road, Opposite HP Petrol Pump,
                Ibrahimpatnam Mandal, Telangana
              </p>
            </a>

            {/* HOURS */}

            <div className="info-card">
              <h3>🕒 Hours</h3>
              <p>7:00 AM - 10:00 PM</p>
            </div>

          </div>

          {/* GOOGLE MAP */}

          <div className="map-box">

            <iframe
              src="https://www.google.com/maps?q=Bongloor+X+Road+Ibrahimpatnam+Telangana&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>

          </div>

        </div>

        {/* RIGHT */}

        <div className="review-box">

          <h2>Leave a Review</h2>

          <p>Share your experience with us.</p>

          <form className="review-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <textarea
              placeholder="Write your review..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>

            <button type="submit">
              Submit Review
            </button>
          </form>

        </div>

      </div>

      <Footer />

      {showSuccess && (
        <div className="success-popup-overlay">
          <div className="success-popup">
            <div className="success-icon">✓</div>
            <h3>Review Submitted Successfully!</h3>
            <p>Thank you for sharing your feedback.</p>
            <button className="success-ok-btn" onClick={closeSuccess}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>

    </div>
  );
}

export default Contact;