import React from "react";
import "../assets/Style/Contact.css";
import { ImFacebook } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { FaYoutube } from "react-icons/fa6";

function Contact() {
  return (
    <div className="All_contains_container">
      <section className="support">
        <h1>We're here for you</h1>
        <p>Our friendly team is always here to chat.</p>
      </section>

      <div className="map-container">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b"
          alt="Map"
          className="map-image"
        />

      </div>



      <div>

      </div>
      <div className="placehoders_container">
        <div className=" inplace_holder">
          <div>
            <input className="Name_holder" type="text" placeholder="Name" />
            <input className="Email_holder" type="text" placeholder="Email" />
          </div>
          <div>
            <input className="Number_holder" type="Number" placeholder="Phone Number" />
            <input className="Subject_holder" type="text" placeholder="Subject" />
          </div>

          <div>
            <input className="Message_holder" type="text" placeholder="Message" />
          </div>
          <div>
            <button className="Send_button">Send Message</button>
          </div>
          <p className="prahraphy_holders">This site is protected by hCaptcha and the hCaptcha Privacy Policy and Terms of Service apply.</p>

        </div>

        <div className="contains">
          <div>
            <p className="ADDRESS">ADDRES</p>
            <p>12/A, New Boston Tower, New York<br/>
              United States, NY</p>
          </div>

          <div>
            <p className="EMAIL">EMAIL</p>
            <p>contact@yourstore.com <br/>
              sales@yourstore.com</p>
          </div>
          <div className="phone_number">
            <span className="PHONE">PHONE</span>
            <p>+888 999 777 66</p>
            <p>+999 555 666 00</p>
          </div>
          <div>
            <div className="icons_follow_container">
              <p className="follow" >FOLLOW US</p>
              <div className="icons_contact">
                <span><ImFacebook /></span>
                <span>< FaXTwitter /></span>
                <span>< SiInstagram /></span>
                <span><FaYoutube /></span>
              </div>
            </div>



          </div>
        </div>

      </div>

    </div>






  );
}

export default Contact;