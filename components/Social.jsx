import React from 'react'
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa';

function Social() {
  return (
    <div className='social__container'>
        <div className="links">
            <div className="link facebook">
                <a href="https://www.facebook.com/FizzEnergySolutions">
                    <FaFacebookF className='social__icon'/>
                    {/* <span className='social__title'>Facebook</span> */}
                </a>
            </div>

          
            <div className="link twitter">
                <a href="https://twitter.com/FizzEnergy">
                    <FaTwitter className='social__icon'/>
                    {/* <span className='social__title'>Twitter</span> */}
                </a>
            </div>

            <div className="link insta">
                <a href="https://instagram.com/fizzenergysolutions">
                    <FaInstagram className='social__icon'/>
                    {/* <span className='social__title'>Instagram</span> */}
                </a>
            </div>

            <div className="link linked">
                <a href="https://www.linkedin.com/company/fizz-energy-solutions/">
                    <FaLinkedinIn className='social__icon'/>
                    {/* <span className='social__title'>LinkedIn</span> */}
                </a>
            </div>
        </div>
    </div>
  )
}

export default Social