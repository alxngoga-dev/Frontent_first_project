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
            onMouseEnter={() => setOpenMenu("home")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <div className="nav-item">
              Home
              <RiArrowDropDownLine />
            </div>

            {openMenu === "home" && (
              <div className="dropdown">
                <p>Home v1 — Modern Elegance</p>
                <p>Home v2 — Rustic Comfort</p>
                <p>Home v3 — Minimalist Chic</p>
                <p>Home v4 — Industrial Vibes</p>
                <p>Home v5 — Vintage Revival</p>
                <p>Home v6 — Kid’s Playland</p>
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
              <div className="dropdown">
                <p>Sofas</p>
                <p>Chairs</p>
                <p>Tables</p>
                <p>Lighting</p>
                <p>Office</p>
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
                <p>About</p>
                <p>FAQ</p>
                <p>Services</p>
                <p>Wishlist</p>
                <p>Checkout</p>
              </div>
            )}
          </li>

      
          <li>
            <a href="/Blog">Blog</a>
          </li>

          
          <li>
            <a href="/Contact">Contact</a>
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