import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu() {

  const [category, setCategory] = useState("all");

  const descriptions = {
    cakes1kg: "Premium layered cake baked fresh with velvety cream.",
    cakeshalf: "A rich half-kg treat with soft sponge and silky frosting.",
    specialcakes: "Signature special cakes made to celebrate every occasion.",
    bakery: "Freshly baked bakery classics crafted with care.",
    regular: "Everyday favorites that pair perfectly with any meal.",
    fastfood: "Savory, satisfying fast food made with bakery-quality flair.",
  };

  const getDescription = (item) => {
    return item.description || descriptions[item.category] || "Delicious bakery flavor in every bite.";
  };

  const menuItems = [

    // 1 KG Cakes
    { category: "cakes1kg", name: "Pine Apple Cake (1 KG)", price: "₹480", type: "veg" },
    { category: "cakes1kg", name: "Strawberry Cake (1 KG)", price: "₹480", type: "veg" },
    { category: "cakes1kg", name: "Butterscotch Cake (1 KG)", price: "₹480", type: "veg" },
    { category: "cakes1kg", name: "White Forest Cake (1 KG)", price: "₹500", type: "veg" },
    { category: "cakes1kg", name: "Chocolate Cake (1 KG)", price: "₹500", type: "veg" },
    { category: "cakes1kg", name: "Black Forest Cake (1 KG)", price: "₹500", type: "veg" },

    // 1/2 KG Cakes//
    { category: "cakeshalf", name: "Pine Apple Cake (½ KG)", price: "₹280", type: "veg" },
    { category: "cakeshalf", name: "Strawberry Cake (½ KG)", price: "₹280", type: "veg" },
    { category: "cakeshalf", name: "Butterscotch Cake (½ KG)", price: "₹280", type: "veg" },
    { category: "cakeshalf", name: "White Forest Cake (½ KG)", price: "₹300", type: "veg" },
    { category: "cakeshalf", name: "Chocolate Cake (½ KG)", price: "₹300", type: "veg" },
    { category: "cakeshalf", name: "Black Forest Cake (½ KG)", price: "₹300", type: "veg" },

    // Special Cakes
    { category: "specialcakes", name: "Photo Cake (1 KG)", price: "₹650", type: "veg" },
    { category: "specialcakes", name: "Cartoon Cake (1 KG)", price: "₹750", type: "veg" },

    // Bakery Special
    { category: "bakery", name: "Veg Puffs", price: "₹20", type: "veg" },
    { category: "bakery", name: "Chicken Puffs", price: "₹25", type: "nonveg" },
    { category: "bakery", name: "Egg Puffs", price: "₹20", type: "nonveg" },
    { category: "bakery", name: "Dil Pasand", price: "₹20", type: "veg" },
    { category: "bakery", name: "Dil Kush", price: "₹20", type: "veg" },
    { category: "bakery", name: "Cream Bun", price: "₹20", type: "veg" },
    { category: "bakery", name: "Cream Roll", price: "₹20", type: "veg" },
    { category: "bakery", name: "Sweet Puffs", price: "₹20", type: "veg" },
    { category: "bakery", name: "Fruit Roll", price: "₹20", type: "veg" },
    { category: "bakery", name: "Cool Cake Piece", price: "₹40", type: "veg" },
    { category: "bakery", name: "Normal Cake Piece", price: "₹20", type: "veg" },
    { category: "bakery", name: "Bakery Cookies (250g)", price: "₹90", type: "veg" },

    // Regular Items
    { category: "regular", name: "Chips", price: "Market Price", type: "veg" },
    { category: "regular", name: "Mixture", price: "Market Price", type: "veg" },
    { category: "regular", name: "Cool Drinks", price: "Varies", type: "veg" },
    { category: "regular", name: "Ice Cream", price: "Varies", type: "veg" },

    // Fast Food
    { category: "fastfood", name: "Veg Fried Rice", price: "₹60", type: "veg" },
    { category: "fastfood", name: "Veg Noodles", price: "₹60", type: "veg" },
    { category: "fastfood", name: "Veg Manchurian", price: "₹60", type: "veg" },
    { category: "fastfood", name: "Veg Manchurian Rice", price: "₹70", type: "veg" },
    { category: "fastfood", name: "Veg Manchurian Noodles", price: "₹70", type: "veg" },
    { category: "fastfood", name: "Egg Fried Rice", price: "₹70", type: "nonveg" },
    { category: "fastfood", name: "Egg Noodles", price: "₹70", type: "nonveg" },
    { category: "fastfood", name: "Egg Manchurian Fried Rice", price: "₹80", type: "nonveg" },
    { category: "fastfood", name: "Egg Manchurian Noodles", price: "₹80", type: "nonveg" },
    { category: "fastfood", name: "Egg Manchurian", price: "₹80", type: "nonveg" },
    { category: "fastfood", name: "Double Egg Fried Rice", price: "₹80", type: "nonveg" },
    { category: "fastfood", name: "Double Egg Noodles", price: "₹80", type: "nonveg" },
    { category: "fastfood", name: "Chicken Fried Rice", price: "₹80", type: "nonveg" },
    { category: "fastfood", name: "Chicken Noodles", price: "₹80", type: "nonveg" },
    { category: "fastfood", name: "Double Egg Chicken Fried Rice", price: "₹90", type: "nonveg" },
    { category: "fastfood", name: "Double Egg Chicken Noodles", price: "₹90", type: "nonveg" },
    { category: "fastfood", name: "Chicken Manchurian", price: "₹100", type: "nonveg" },
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
        <button
          className={category === "all" ? "category-btn active-category" : "category-btn"}
          onClick={() => setCategory("all")}
        >
          All Items
        </button>
        <button
          className={category === "cakes1kg" ? "category-btn active-category" : "category-btn"}
          onClick={() => setCategory("cakes1kg")}
        >
          Cakes (1 KG)
        </button>
        <button
          className={category === "cakeshalf" ? "category-btn active-category" : "category-btn"}
          onClick={() => setCategory("cakeshalf")}
        >
          Cakes (½ KG)
        </button>
        <button
          className={category === "specialcakes" ? "category-btn active-category" : "category-btn"}
          onClick={() => setCategory("specialcakes")}
        >
          Special Cakes
        </button>
        <button
          className={category === "bakery" ? "category-btn active-category" : "category-btn"}
          onClick={() => setCategory("bakery")}
        >
          Bakery Special
        </button>
        <button
          className={category === "regular" ? "category-btn active-category" : "category-btn"}
          onClick={() => setCategory("regular")}
        >
          Regular Items
        </button>
        <button
          className={category === "fastfood" ? "category-btn active-category" : "category-btn"}
          onClick={() => setCategory("fastfood")}
        >
          Fast Food
        </button>
      </div>

      <div className="menu-items">

        {filteredItems.map((item, index) => (

          <div className="menu-card" key={index}>
            <div className="menu-card-content">
              <span
                className={`indicator-dot ${item.type === "veg" ? "indicator-veg" : "indicator-nonveg"}`}
                aria-label={item.type === "veg" ? "Vegetarian" : "Non-Vegetarian"}
              />

              <div>
                <h2>{item.name}</h2>
                <p>{getDescription(item)}</p>
              </div>
            </div>

            <div className="item-price">{item.price}</div>
          </div>

        ))}

      </div>

    </div>
  );
}

export default Menu;