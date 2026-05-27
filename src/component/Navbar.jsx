import React, { useState } from "react";
import { IoSearchOutline, IoPersonOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RiArrowDropDownLine } from "react-icons/ri";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    if (openMenu === menu) {
      setOpenMenu(null);
    } else {
      setOpenMenu(menu);
    }
  };

  return (
    <>
      <div className="navcontainer">

        <div>
          <span className="logo">miniture</span>
        </div>

        <ul className="navlink">

          
          <li className="list">
            <div
              className="nav-item"
              onClick={() => toggleMenu("home")}
            >
              Home
              <RiArrowDropDownLine />
            </div>

            {openMenu === "home" && (
              <div className="dropdown">
                <p>Home 1</p>
                <p>Home 2</p>
                <p>Home 3</p>
              </div>
            )}
          </li>

         
          <li className="list">
            <div
              className="nav-item"
              onClick={() => toggleMenu("catalog")}
            >
              Catalog
              <RiArrowDropDownLine />
            </div>

            {openMenu === "catalog" && (
              <div className="dropdown">
                <p>Sofas</p>
                <p>Chairs</p>
                <p>Tables</p>
              </div>
            )}
          </li>

          
          <li className="list">
            <div
              className="nav-item"
              onClick={() => toggleMenu("pages")}
            >
              Pages
              <RiArrowDropDownLine />
            </div>

            {openMenu === "pages" && (
              <div className="dropdown">
                <p>About</p>
                <p>FAQ</p>
                <p>Services</p>
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