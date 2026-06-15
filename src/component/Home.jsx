import React from "react";
import { TbArmchair } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import "../assets/Style/Home.css";
import { FaInstagram } from "react-icons/fa";




const products = [
  {
    id: 1,
    name: "Ana Grey Dining Chair",
    price: 299.99,
    rating: 5.0,
    img: "/Images/chair1.png",
  },
  {
    id: 2,
    name: "Natural Wood Dining Chair",
    price: 300.99,
    rating: 5.0,
    img: "/Images/chair2.png",
  },
  {
    id: 3,
    name: "Paolo Black Wood Dining Chair",
    price: 139.99,
    rating: 5.0,
    img: "/Images/chair3.png",
  },
  {
    id: 4,
    name: "Curved Back Dining Chair",
    price: 129.99,
    oldPrice: 159.99,
    sale: 19,
    img: "/Images/chair4.png",
  },

  {
    id: 5,
    name: "Pali Black Hardwood Dining Chair",
    price: 139.99,
    img: "/Images/chair5.png",
  },

  {
    id: 6,
    name: "Muirfield Sculptural Metal Accent Chair",
    price: 299.99,
    img: "/Images/chair7.png",
  },
  {
    id: 7,
    name: "Wells Renew Vegan Leather Chair",
    price: 299.99,
    img: "/Images/chair7.png",
  },

    {
    id: 8,
    name: "Wells Renew Vegan Leather Chair",
    price: 299.99,
    img: "/Images/chair8.png",
  },

];

function Home() {
  return (
    <>
      <div>
        <div className="HomeContent">
          <div className="home-content">
            <div className="hero-section1">
              <div className="butoon1">
                <TbArmchair className="Home_icon" />
              </div>

              <p className="text-1">Elevate Your Lifestyle</p>
            </div>

            <p className="text-1">with Our Furniture</p>

            <div className="hero-section2">
              <p className="text-1">Creations</p>

              <button className="home-btn2">Shop now</button>
            </div>
          </div>
        </div>

        
        <div className="image_contents">
          <div>
            <img
              className="img-class1"
              src="/img/image1.png"
              alt=""
            />
          </div>

          <div className="img_class">
            <div className="image-card">
              <img
                className="img-co1"
                src="/img/m1_b_01.webp"
                alt=""
              />
              <div className="image-text-left">
                <h2>Living Room</h2>
              </div>
            </div>

            <div className="image-card">
              <img
                className="img-co2"
                src="/img/m1_b_02.webp"
                alt=""
              />
              <div className="image-text-right">
                <h2>Kitchen</h2>
              </div>
            </div>

            <div className="img_group">
              <div className="image-card">
                <img
                  className="img-co3"
                  src="/img/m1_b_03.webp"
                  alt=""
                />
                <div className="image-text-left">
                  <h2>Bedroom</h2>
                </div>
              </div>

              <div className="image-card">
                <img
                  className="img-co4"
                  src="/img/m1_b_05.webp"
                  alt=""
                />
                <div className="image-text-right">
                  <h2>Office</h2>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="location_contains">
          <div className="location_container">
            <h1 className="text_gray">
              You are in <span className="text_brack">Kitchen</span>
            </h1>

            <RiArrowDropDownLine className="drop-icon" />
          </div>
        </div>


        <div className="product-grid">
          {products.map((item) => (
            <div className="product-card" key={item.id}>
              <div className="product-image">


                {item.rating && (
                  <div className="rating-badge">
                    ⭐ {item.rating}
                  </div>
                )}


                {item.sale && (
                  <div className="sale-badge">
                    Save {item.sale}%
                  </div>
                )}


                <button className="search-btn">
                  <FiSearch />
                </button>


                <button className="cart-btn">
                  <FiShoppingBag />
                </button>

                <img className="imageMap1" src={item.img} alt={item.name}/>
              </div>

              <div className="product-info">
                <h3>{item.name}</h3>

                <div className="price-section">
                  <span className="new-price">
                    ${item.price}
                  </span>

                  {item.oldPrice && (
                    <span className="old-price">
                      ${item.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="shop-btn-container">
          <button className="shop-btn">
            Shop all products
          </button>
        </div>

        <div className="ferhtrwug">
          <div className="promo-section">
            <div className="image-container">

              <img
                src="./Images/bigimage.webp"
                alt="Minimalist living room showcase"
                className="promo-image"
              />

              <div className="text-card">
                <span className="tagline">TOP DEAL TODAY</span>
                <h2 className="heading">Up to 30% off The Living Room Event</h2>
              </div>
            </div>
          </div>

          <div className="all_content">
              <section className="sale-section">
      <p className="small-title">LIMITED TIME ONLY</p>

      <h1 className="sale-title">
        The living room event up to <br />
        30% off
      </h1>

      <p className="sale-description">
        Use this text to share information about your brand with your
        customers. Describe a product, share announcements, or welcome
        customers to your store.
      </p>

      <div className="countdown">
        <div className="time-box">
          <h2>218</h2>
          <span>Days</span>
        </div>

        <div className="time-box">
          <h2>5</h2>
          <span>Hours</span>
        </div>

        <div className="time-box">
          <h2>55</h2>
          <span>Mins</span>
        </div>

        <div className="time-box">
          <h2>41</h2>
          <span>Secs</span>
        </div>
      </div>

      <button className="sale-btn">Shop the sale</button>
    </section>


           

          </div>

        </div>


      </div >
      <div className="dining-section">
        <div className="dining-container">
         
          <img
            src="/Images/img10.png"
            alt="Modern dining room setup"
            className="dining-image"
          />


          <div className="dining-card">
            <span className="dining-tagline">CRAFT OWN FURNITURE</span>
            <h2 className="dining-heading">Your new forever favorites are here</h2>
          </div>


          <button className="hotspot-dot dot-lamp" aria-label="View Lamp"></button>
          <button className="hotspot-dot dot-left-chair" aria-label="View Left Chair"></button>
          <button className="hotspot-dot dot-table" aria-label="View Dining Table"></button>
        </div>
      </div>

      <div className="top-sellers-section">
        <h2 className="section-title">Top Sellers</h2>

        <div className="carousel-wrapper">
          <div className="products-grid">


            <div className="product-card">
              <div className="product-image-wrapper">
                <img src="https://miniture-demo.myshopify.com/cdn/shop/files/m2_p07_1_e166b033-801f-4b45-a754-54662cc1ba72.jpg?v=1737441100&width=1200" alt="Lounge Deep Chaise Lounge" className="product-image" />
              </div>
              <h3 className="product-name">Lounge Deep Chaise Lounge</h3>
              <span className="product-price">$299.99</span>
            </div>


            <div className="product-card">
              <div className="product-image-wrapper">
                <img src="https://miniture-demo.myshopify.com/cdn/shop/files/m2_p08_1_92b178f0-99cc-49dd-a78c-3a1c0f3e7667.jpg?v=1737441078&width=1200" alt="Polly Sand Brown Accent Chair" className="product-image" />
              </div>
              <h3 className="product-name">Polly Sand Brown Accent Chair</h3>
              <span className="product-price">$439.99</span>
            </div>


            <div className="product-card">
              <div className="product-image-wrapper">
                <span className="rating-badge">★ 5.0</span>
                <img src="https://miniture-demo.myshopify.com/cdn/shop/files/m2_p06_1_1668e554-53e3-49b9-bdd9-2c9ab1191165.jpg?v=1737441069&width=1200" alt="Axis 2-Seat Sofa" className="product-image" />
              </div>
              <h3 className="product-name">Axis 2-Seat Sofa</h3>
              <span className="product-price">$239.99</span>
            </div>


            <div className="product-card">
              <div className="product-image-wrapper">
                <img src="https://miniture-demo.myshopify.com/cdn/shop/files/m2_p05_1_ef0d3c37-36cb-4523-9977-5cb1eb31a4f3.jpg?v=1737441058&width=1200" alt="Medoc Swivel Chair" className="product-image" />
              </div>
              <h3 className="product-name">Medoc Swivel Chair</h3>
              <span className="product-price">$299.99</span>
            </div>

          </div>


          <button className="slider-arrow-btn" aria-label="Next products">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor" />
            </svg>
          </button>
        </div>

        <div className="promo-grid-section">
          <div className="promo-grid-container">


            <div className="grid-banner-card left-banner">
              <img
                src="https://miniture-demo.myshopify.com/cdn/shop/files/m1_collection_01.jpg?v=1776220704&width=600"
                alt="Personalization shop showcase"
                className="grid-banner-image"
              />
              <div className="grid-text-box box-top-left">
                <span className="grid-tagline">EVEN MORE SPECIAL</span>
                <h3 className="grid-heading">The Personalization Shop</h3>
              </div>
            </div>


            <div className="grid-banner-card right-banner">
              <img
                src="https://miniture-demo.myshopify.com/cdn/shop/files/m1_collection_02.jpg?v=1776220805&width=600"
                alt="Crate exclusive desk workspace"
                className="grid-banner-image"
              />
              <div className="grid-text-box box-bottom-left">
                <span className="grid-tagline">CRATE EXCLUSIVE</span>
                <h3 className="grid-heading">New thyme hue from le creuset</h3>
              </div>
            </div>

          </div>
        </div>

        <div className="features-section">
          <div className="features-container">

            
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <div className="feature-text">
                <h3 className="feature-title">Free Shipping</h3>
                <p className="feature-desc">Free Shipping for orders</p>
              </div>
            </div>

          
            <div className="feature-item">
              <div className="feature-icon-wrapper">
               
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
              </div>
              <div className="feature-text">
                <h3 className="feature-title">Money Guarantee</h3>
                <p className="feature-desc">Within 30 days</p>
              </div>
            </div>

            
            <div className="feature-item">
              <div className="feature-icon-wrapper">
               
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div className="feature-text">
                <h3 className="feature-title">Online Support</h3>
                <p className="feature-desc">24 hours a day, 7 days a week</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-wrapper">
               
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="4" width="22" height="16" rx="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
              </div>
              <div className="feature-text">
                <h3 className="feature-title">Flexible Payment</h3>
                <p className="feature-desc">Pay with Multiple Credit Cards</p>
              </div>
            </div>

          </div>
        </div>

        <div className="instagram-section">
  <div className="instagram-main-container">
    
  
    <div className="instagram-info-panel">
      <h2 className="insta-main-title">Instagram Shop</h2>
      <p className="insta-main-desc">
        Tag @miniture in your Instagram photos for a chance to be featured here.
      </p>
      <button className="insta-visit-btn">Visit Our Instagram</button>
    </div>

    
    <div className="instagram-grid-gallery">
      
     
      <div className="insta-grid-item item-tall-left">
        <img src="https://miniture-demo.myshopify.com/cdn/shop/files/m_ins_01.jpg?v=1776352023&width=400" alt="Instagram furniture inspiration 1" className="insta-img" />
        <span><FaInstagram className="insta-badge"/></span>
      </div>

      
      <div className="insta-grid-item item-top-small">
        <img src="https://miniture-demo.myshopify.com/cdn/shop/files/m_ins_04.jpg?v=1776352023&width=400" alt="Instagram furniture inspiration 2" className="insta-img" />
        <span><FaInstagram className="insta-badge"/></span>
      </div>

     
      <div className="insta-grid-item item-bottom-small">
        <img src="https://miniture-demo.myshopify.com/cdn/shop/files/m_ins_02.jpg?v=1776352023&width=400" alt="Instagram furniture inspiration 3" className="insta-img" />
       <span><FaInstagram className="insta-badge"/></span>
      </div>

      
      <div className="insta-grid-item item-center-giant">
        <img src="https://miniture-demo.myshopify.com/cdn/shop/files/m_ins_05.jpg?v=1776352023&width=400" alt="Instagram furniture inspiration 4" className="insta-img" />
        <span><FaInstagram className="insta-badge"/></span>
      </div>

      
      <div className="insta-grid-item item-right-top">
        <img src="https://miniture-demo.myshopify.com/cdn/shop/files/m_ins_05.jpg?v=1776352023&width=400" alt="Instagram furniture inspiration 5" className="insta-img" />
       <span><FaInstagram className="insta-badge"/></span>
      </div>

      
      <div className="insta-grid-item item-right-bottom">
        <img src="https://miniture-demo.myshopify.com/cdn/shop/files/m_ins_06.jpg?v=1776352023&width=400" alt="Instagram furniture inspiration 6" className="insta-img" />
        <span><FaInstagram className="insta-badge"/></span>
      </div>

    </div>

  </div>
</div>
      </div>

    </>

  );
}
export default Home;
