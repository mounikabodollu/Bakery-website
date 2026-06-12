import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu() {

  const [category, setCategory] = useState("all");

  const menuItems = [

    // 1 KG Cakes
    { category: "cakes1kg", name: "Pine Apple Cake (1 KG)", price: "₹480" },
    { category: "cakes1kg", name: "Strawberry Cake (1 KG)", price: "₹480" },
    { category: "cakes1kg", name: "Butterscotch Cake (1 KG)", price: "₹480" },
    { category: "cakes1kg", name: "White Forest Cake (1 KG)", price: "₹500" },
    { category: "cakes1kg", name: "Chocolate Cake (1 KG)", price: "₹500" },
    { category: "cakes1kg", name: "Black Forest Cake (1 KG)", price: "₹500" },

    // 1/2 KG Cakes//
    
    { category: "cakeshalf", name: "Pine Apple Cake (½ KG)", price: "₹280" },
    { category: "cakeshalf", name: "Strawberry Cake (½ KG)", price: "₹280" },
    { category: "cakeshalf", name: "Butterscotch Cake (½ KG)", price: "₹280" },
    { category: "cakeshalf", name: "White Forest Cake (½ KG)", price: "₹300" },
    { category: "cakeshalf", name: "Chocolate Cake (½ KG)", price: "₹300" },
    { category: "cakeshalf", name: "Black Forest Cake (½ KG)", price: "₹300" },

    // Special Cakes
    { category: "specialcakes", name: "Photo Cake (1 KG)", price: "₹650" },
    { category: "specialcakes", name: "Cartoon Cake (1 KG)", price: "₹750" },

    // Bakery Special
    { category: "bakery", name: "Veg Puffs", price: "₹20" },
    { category: "bakery", name: "Chicken Puffs", price: "₹25" },
    { category: "bakery", name: "Egg Puffs", price: "₹20" },
    { category: "bakery", name: "Dil Pasand", price: "₹20" },
    { category: "bakery", name: "Dil Kush", price: "₹20" },
    { category: "bakery", name: "Cream Bun", price: "₹20" },
    { category: "bakery", name: "Cream Roll", price: "₹20" },
    { category: "bakery", name: "Sweet Puffs", price: "₹20" },
    { category: "bakery", name: "Fruit Roll", price: "₹20" },
    { category: "bakery", name: "Cool Cake Piece", price: "₹40" },
    { category: "bakery", name: "Normal Cake Piece", price: "₹20" },
    { category: "bakery", name: "Bakery Cookies (250g)", price: "₹90" },

    // Regular Items
    { category: "regular", name: "Chips", price: "Market Price" },
    { category: "regular", name: "Mixture", price: "Market Price" },
    { category: "regular", name: "Cool Drinks", price: "Varies" },
    { category: "regular", name: "Ice Cream", price: "Varies" },

    // Fast Food
    { category: "fastfood", name: "Veg Fried Rice", price: "₹60" },
    { category: "fastfood", name: "Veg Noodles", price: "₹60" },
    { category: "fastfood", name: "Veg Manchurian", price: "₹60" },
    { category: "fastfood", name: "Veg Manchurian Rice", price: "₹70" },
    { category: "fastfood", name: "Veg Manchurian Noodles", price: "₹70" },
    { category: "fastfood", name: "Egg Fried Rice", price: "₹70" },
    { category: "fastfood", name: "Egg Noodles", price: "₹70" },
    { category: "fastfood", name: "Egg Manchurian Fried Rice", price: "₹80" },
    { category: "fastfood", name: "Egg Manchurian Noodles", price: "₹80" },
    { category: "fastfood", name: "Egg Manchurian", price: "₹80" },
    { category: "fastfood", name: "Double Egg Fried Rice", price: "₹80" },
    { category: "fastfood", name: "Double Egg Noodles", price: "₹80" },
    { category: "fastfood", name: "Chicken Fried Rice", price: "₹80" },
    { category: "fastfood", name: "Chicken Noodles", price: "₹80" },
    { category: "fastfood", name: "Double Egg Chicken Fried Rice", price: "₹90" },
    { category: "fastfood", name: "Double Egg Chicken Noodles", price: "₹90" },
    { category: "fastfood", name: "Chicken Manchurian", price: "₹100" },
  ];

  const filteredItems =
    category === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === category);

  return (
    <div className="menu-page">

      <nav className="menu-navbar">
        <div className="logo-section">
          <div className="logo-circle">V</div>

          <div>
            <h2>Sri Vinayaka</h2>
            <p>BAKERY & FAST FOOD</p>
          </div>
        </div>

        <ul className="menu-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/menu">Menu</NavLink></li>
          <li><NavLink to="/gallery">Gallery</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        <div className="menu-icons">
          <span>📞</span>
          <span>🛒</span>
        </div>
      </nav>

      <div className="menu-header">
        <p>OUR COMPLETE</p>
        <h1>Menu</h1>
      </div>

      <div className="categories">
        <button onClick={() => setCategory("all")}>All Items</button>
        <button onClick={() => setCategory("cakes1kg")}>Cakes (1 KG)</button>
        <button onClick={() => setCategory("cakeshalf")}>Cakes (½ KG)</button>
        <button onClick={() => setCategory("specialcakes")}>Special Cakes</button>
        <button onClick={() => setCategory("bakery")}>Bakery Special</button>
        <button onClick={() => setCategory("regular")}>Regular Items</button>
        <button onClick={() => setCategory("fastfood")}>Fast Food</button>
      </div>

      <div className="menu-items">

        {filteredItems.map((item, index) => (

          <div className="menu-card" key={index}>

            <div className="left">

              <div className="green-dot"></div>

              <div>
                <h2>{item.name}</h2>
              </div>

            </div>

            <h3>{item.price}</h3>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Menu;