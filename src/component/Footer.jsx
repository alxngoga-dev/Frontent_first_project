
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GrFormNextLink } from "react-icons/gr";
import "../assets/Style/Footer.css";
import { PiGlobeHemisphereWestLight } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaGlobe, FaChevronDown } from "react-icons/fa";
import { MdCurrencyExchange } from "react-icons/md";


function Footer() {
    return (
        <>
            <div className="ALL-FOOTER-CONTENTS"  >
                <div className="Footer_container">
                    <div className="content_icons">
                        <div className="footer_tit">
                            <h3>Our story</h3>
                        </div>
                        <div className="Footer_icons">
                            <p>Miniture is one of the biggest international <br />
                                fashion companies, one of the world’s <br />
                                largest distribution groups.</p>
                        </div>


                        <div className="Footer_icons">
                            <div className="icon1">
                                <FaFacebookF />
                            </div>
                            <div className="icon1">
                                <FaXTwitter />
                            </div>
                            <div className="icon1">
                                <FaInstagram />
                            </div>

                            <div className="icon1">
                                <FaYoutube />
                            </div>



                        </div>

                    </div>

                    <div className="Footer_between">
                        <div className="footer_tit">
                            <h3>Quick links</h3>
                        </div>
                        <div className="Footer_btn" >
                            <p>Accent Chairs</p>
                            <p>Dinning Chair</p>
                            <p> Dining Room</p>
                            <p>Kid's Furniture</p>
                        </div>

                    </div>

                    <div className="Footer_between">
                        <div className="footer_tit">
                            <h3>Information</h3>
                        </div>
                        <div className="Footer_btn">
                            <p>Privacy policy</p>
                            <p>Shipping & Return</p>
                            <p>Shipping & Return</p>
                            <p>Term & conditions</p>
                        </div>

                    </div>

                    <div className="newsletter-section">
                        <div className="footer_tit">
                            <h3>Let’s get in touch</h3>
                        </div>

                        <div className="email-box">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="email-input"
                            />
                            <button className="send-btn">→</button>
                        </div>
                    </div>

                </div>

                <footer className="footer">
                    <div className="footer-left">
                        <p>© 2026 Miniture. Powered by Shopify</p>
                    </div>

                    <div className="footer-right">
                        <div className="footer-box">
                            <FaGlobe className="icon" />
                            <span>English</span>
                            <FaChevronDown className="arrow" />
                        </div>

                        <div className="footer-box">
                            <MdCurrencyExchange className="icon" />
                            <span>Rwanda (USD $)</span>
                            <FaChevronDown className="arrow" />
                        </div>
                    </div>
                </footer>





            </div>


        </>






    )
}
export default Footer