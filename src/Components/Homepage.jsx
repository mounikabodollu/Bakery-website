import { NavLink, Link } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="home">

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Navbar */}

      <nav className="navbar">

        <div className="logo-section">

          <div className="logo-circle">V</div>

          <div>
            <h2>Sri Vinayaka</h2>
            <p>BAKERY & FAST FOOD</p>
          </div>

        </div>

        <ul className="nav-links">

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

        
      </nav>

      {/* Hero Section */}

      <div className="hero-section">

        <div className="hero-content">

          <div className="tag">
            <span className="dot"></span>
            FRESHLY BAKED DAILY
          </div>
<h1 className="hero-title bounce-title">
  Sri Vinayaka
</h1>

<h2 className="hero-subtitle bounce-subtitle">
  Bengaluru Bakery
</h2>

<h3 className="hero-third-title bounce-third">
  & Fast Food Center
</h3>
          <p>
            Fresh Cakes, Bakery Delights & Delicious Fast Food
            Under One Roof
          </p>

          <div className="hero-buttons">

            <Link to="/menu">
              <button className="menu-btn">
                View Menu →
              </button>
            </Link>

          </div>

        </div>

      </div>

      {/* Categories */}

    

      {/* Celebration Section */}

      <section className="celebration-section">

        <div className="celebration-overlay">

          <div className="celebration-content">

            <span className="celebration-tag">
              ✨ CELEBRATIONS
            </span>

            <h2>
              Birthday, Anniversary
              <br />
              & All Types Of
              <br />
              Decoration Items
              <br />
              Available
            </h2>

            <p>
              Make your celebrations extra special with custom
              Photo Cakes, Cartoon Cakes and beautiful decoration items.
              We handle everything for your perfect party!
            </p>

            <a
              href="https://wa.me/919908808421"
              target="_blank"
              rel="noreferrer"
            >
              <button className="party-btn">
                📞 Plan Your Party
              </button>
            </a>

          </div>

        </div>

      </section>

      {/* Customer Reviews */}

      <section className="reviews-section">

        <h2>What Our Customers Say</h2>

        <div className="reviews-container">

          <div className="review-card">

            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>

            <p>
              Amazing cakes and fresh bakery items.
              The taste is excellent and prices are reasonable.
            </p>

            <h4>
              - Rajesh Kumar
            </h4>

          </div>

          <div className="review-card">

            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>

            <p>
              Best bakery in the area. Birthday cake was beautifully
              designed and delivered on time.
            </p>

            <h4>
              - Priya Reddy
            </h4>

          </div>

          <div className="review-card">

            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>

            <p>
              Fast food and bakery items are delicious.
              Highly recommended for family celebrations.
            </p>

            <h4>
              - Sai Teja
            </h4>

          </div>

        </div>

      </section>

      {/* Footer */}

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-about">

            <div className="footer-logo">

              <div className="logo-circle">V</div>

              <div>

                <h3>Sri Vinayaka</h3>

                <p>BENGALURU BAKERY</p>

              </div>

            </div>

            <p>
              Fresh Cakes, Bakery Delights & Delicious Fast Food
              Under One Roof. Serving happiness every day.
            </p>

          </div>

          <div className="footer-links">

            <h3>Quick Links</h3>

            <Link to="/">Home</Link>

            <Link to="/menu">
              Full Menu
            </Link>

            <Link to="/gallery">
              Gallery
            </Link>

            <Link to="/contact">
              Contact Us
            </Link>

          </div>

          <div className="footer-contact">

            <h3>Visit Us</h3>

            <p>
              📞 +91 99088 08421
            </p>

            <p>
              💬 WhatsApp Orders
            </p>

            <p>
              📍 Bongloor X Road,
              Ibrahimpatnam,
              Telangana
            </p>

            <p>
              🕒 Open Daily:
              7:00 AM - 10:00 PM
            </p>

          </div>

        </div>

        <div className="footer-bottom">

          © 2026 Sri Vinayaka Bakery &
          Fast Food Center.
          All rights reserved.

        </div>

      </footer>

    </div>
  );
}

export default Homepage;