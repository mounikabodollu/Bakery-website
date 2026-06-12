import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import "./Contact.css";

function Contact() {
  return (
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
          <span>📞</span>
          <span>🛒</span>
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
              <h3>📞 Call Us</h3>
              <p>+91 99088 08421</p>
            </a>

            {/* WHATSAPP */}

            <a
              href="https://wa.me/919908808421"
              target="_blank"
              rel="noreferrer"
              className="info-card"
            >
              <h3>💬 WhatsApp</h3>
              <p>Order Online</p>
            </a>

            {/* LOCATION */}

            <a
              href="https://maps.google.com/?q=Bongloor+X+Road+Ibrahimpatnam+Telangana"
              target="_blank"
              rel="noreferrer"
              className="info-card"
            >
              <h3>📍 Visit Us</h3>

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

          <input
            type="text"
            placeholder="Your Name"
          />

          <textarea
            placeholder="Write your review..."
          ></textarea>

          <button>
            Submit Review
          </button>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Contact;