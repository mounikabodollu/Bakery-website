import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}

        <div className="footer-left">

          <div className="footer-logo">

            <div className="footer-circle">V</div>

            <div>
              <h2>Sri Vinayaka</h2>
              <p>BENGALURU BAKERY</p>
            </div>

          </div>

          <p className="footer-desc">
            Fresh Cakes, Bakery Delights & Delicious Fast Food
            Under One Roof. Serving happiness since day one.
          </p>

        </div>

        {/* CENTER */}

        <div className="footer-center">

          <h3>Quick Links</h3>

          <div className="footer-links">

            <NavLink to="/">Home</NavLink>

            <NavLink to="/menu">Full Menu</NavLink>

            <NavLink to="/gallery">Gallery</NavLink>

            <NavLink to="/contact">Contact Us</NavLink>

          </div>

        </div>

        {/* RIGHT */}

        <div className="footer-right">

          <h3>Visit Us</h3>

          <div className="footer-contact">

            <p>📞 +91 99088 08421</p>

            <p>💬 WhatsApp Order</p>

            <p>
              📍 Bongloor X Road, Opposite HP Petrol Pump,
              Ibrahimpatnam Mandal, Telangana
            </p>

            <p>🕒 Open Daily: 7:00 AM – 10:00 PM</p>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="footer-bottom">
        © 2026 Sri Vinayaka Bengaluru Bakery & Fast Food Center.
        All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;