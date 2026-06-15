import React, { useState } from "react";
import { IoSearchOutline, IoPersonOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RiArrowDropDownLine } from "react-icons/ri";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className="navcontainer">
        <div>
          <span className="logo">miniture</span>
        </div>

        <ul className={`navlink ${mobileMenu ? "active" : ""}`}>
          
          <li
            className="list"
             onMouseEnter={() => setOpenMenu("Home")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <div className="nav-item">
              Home
              <RiArrowDropDownLine />
            </div>

            {openMenu === "home" && (
              <div className="dropdown">
                <a href="/home-v1">Home v1 — Modern Elegance</a>
                <a href="/home-v2">Home v2 — Rustic Comfort</a>
                <a href="/home-v3">Home v3 — Minimalist Chic</a>
                <a href="/home-v4">Home v4 — Industrial Vibes</a>
                <a href="/home-v5">Home v5 — Vintage Revival</a>
                <a href="/home-v6">Home v6 — Kid’s Playland</a>
              </div>
            )}
          </li>

       
          <li
            className="list"
            onMouseEnter={() => setOpenMenu("catalog")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <div className="nav-item">
              Catalog
              <RiArrowDropDownLine />
            </div>

            {openMenu === "catalog" && (
              <div className="dropdown-section">
                <a href="/product/1" className="product-card">
                  <img src="/Images/chairp1.png" alt="Chair" />
                  <h4>Ana Grey Dining Chair</h4>
                  <p>$299.99</p>
                </a>

                <a href="/product/2" className="product-card">
                  <img src="/Images/image.22.webp" alt="Sofa" />
                  <h4>Axis 2-Piece Sectional Sofa</h4>
                  <p>$339.99</p>
                </a>

                <a href="/product/3" className="product-card">
                  <img src="/Images/img23.png" alt="Sofa" />
                  <h4>Axis 2-Seat Sofa</h4>
                  <p>$239.99</p>
                </a>

                <a href="/product/4" className="product-card">
                  <img src="/Images/img24.png" alt="Chair" />
                  <h4>Curved Back Dining Chair</h4>
                  <p>$129.99</p>
                </a>
              </div>
            )}
          </li>

      
          <li
            className="list"
            onMouseEnter={() => setOpenMenu("pages")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <div className="nav-item">
              Pages
              <RiArrowDropDownLine />
            </div>

            {openMenu === "pages" && (
              <div className="dropdown">
                <a href="/about">About Us</a>
                <a href="/faqs">FAQs</a>
                <a href="/contact-page">Contact Us</a>
              </div>
            )}
          </li>

          <li>
            <a href="/blog">Blog</a>
          </li>

          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

        <div className="nav-icons">
          <IoSearchOutline />
          <IoPersonOutline />
          <LiaShoppingBagSolid />
        </div>
      </div>
    </>
  );
}

export default Navbar;