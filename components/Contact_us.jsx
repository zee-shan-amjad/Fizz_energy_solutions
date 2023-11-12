import React from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import {FaRegAddressCard, FaPhone} from 'react-icons/fa';
import {IoMdTime} from 'react-icons/io';
import {MdEmail} from 'react-icons/md';
import 'react-toastify/dist/ReactToastify.css';

const contact_us = () => {

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target)
    e.target[3].innerText = 'Sending ...'
    e.target[3].style.backgroundColor = 'grey'

    emailjs.sendForm(
        "service_qdm60xk",
        "template_gz53em4",
        
        e.target,
        "user_KGITFgaKwgk0uI96i7oZm"
      )
      .then(
        (result) => {
          e.target[3].innerText = 'Send Email';
          e.target[3].style.backgroundColor = '#EA3A60'
          toast.success("Email Sent!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact" id='contact'>
      <ToastContainer></ToastContainer>
      <div className="contact_heading">
        <h1> Contact</h1>
        <h4>ANY QUESTIONS, CONTACT US</h4>
      </div>
      <div className="address__info">

        <div>
          <i><FaRegAddressCard className="address__icons"></FaRegAddressCard></i> <h3>Suit # 07, Hakeem Plaza, Range Road, Rawalpindi Cantt. Pakistan</h3>
        </div>

        <div>
          <i><FaPhone className="address__icons"></FaPhone></i> <h3>+92-322-2267197</h3>
        </div>

         <div>
          <i><IoMdTime className="address__icons"></IoMdTime></i><h3>7 Days A Week From 9:00am To 8:00pm PST</h3>
         </div>

         <div>
          <i><MdEmail className="address__icons"></MdEmail></i><h3>info@fizzenergies.com</h3>
         </div>

      </div>
      <div className="in__touch">
        <h2>GET IN TOUCH</h2>
      </div>

      <div className="form__container">
        <form className='form' onSubmit={sendEmail}>

          <div className="form_input-container">
            <input className='form_input' id='name' name='Name' placeholder="Enter your name" required />
          </div>

          <div className="form_input-container">
            <input className='form_input' id='number' name='Mobile' type="number" placeholder="Enter your mobile number" required/>
          </div>

          <div className="form_input-container">
            <textarea className='form_input' id='message' name='Message' placeholder="Enter your message" required/>
          </div>

          <div className="contact__btn">
            <button className="btn btn__green">Send Message</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default contact_us;
