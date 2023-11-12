import React from "react";
import Link from 'next/link';
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">

      <div className="footer__container">
        <div className="footer__component">
          <div>
            <h3>About Us</h3>
          </div>
          <div>
            <a href="">Support</a>
            <a href="">License Agreement</a>
            <a href="">Terms and Condition</a>
            <a href="">Privacy Policy</a>
          </div>
        </div>

        <div className="footer__component">
          <div>
            <div>
              <h3>Information</h3>
            </div>
            <div>
              <a href="">Plans And Pricing</a>
              <a href="">1KV</a>
              <a href="">5KV</a>
              <a href="">15KV</a>
            </div>
          </div>
        </div>

        <div className="footer__component">
          <div>
            <div>
              <h3>Careers</h3>
            </div>
            <div>
              <Link href="/careers">
                <a >Careers</a>
              </Link>
             
            
            </div>
          </div>
        </div>
        
        <div className="footer__component">
          <div>
            <div>
              <h3>Social Networks</h3>
            </div>
            <div className="footer__links--container">
              <a href="https://www.facebook.com/FizzEnergySolutions"><FaFacebookF className="footer__icons facebook"></FaFacebookF></a>
              <a href="https://twitter.com/FizzEnergy"><FaTwitter className="footer__icons twitter"></FaTwitter></a>
              <a href="https://instagram.com/fizzenergysolutions"><FaInstagram className="footer__icons insta"></FaInstagram></a>
              <a href="https://www.linkedin.com/company/fizz-energy-solutions/"><FaLinkedinIn className="footer__icons linked"></FaLinkedinIn></a>
            </div>
          </div>
        </div>
      </div>
      <div className="websoft">
        <p>Powered by <span><Link href="https://www.websoft24.com"><a> websoft24</a></Link></span></p>
      </div>
    </div>
  );
};

export default Footer;
