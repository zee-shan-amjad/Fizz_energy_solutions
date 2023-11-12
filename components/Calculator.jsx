import React, { useState } from "react";
import Link from "next/link";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa';

const Calculator = () => {
  const [bulbs, setBulbs] = useState(0);
  const [fans, setFans] = useState(0);
  const [tv, setTv] = useState(0);
  const [fridge, setFridge] = useState(0);
  const [ac, setAc] = useState(0);
  const [washing, setWasshing] = useState(0);
  const [iron, setIron] = useState(0);
  const [totalWatts, setTotalWatts] = useState(null);
  const [totalKv, setTotalKv] = useState(null);
  const [popup, setPopup] = useState(false);

  const handleLightsChange = (e) => {

    setBulbs(e.target.value);
  };

  const handleFanChange = (e) => {

    setFans(e.target.value);
  };

  const handleTVChange = (e) => {

    setTv(e.target.value);
  };

  const handleFridgeChange = (e) => {

    setFridge(e.target.value);
  };

  const handleACChange = (e) => {

    setAc(e.target.value);
  };

  const handleWashingChange = (e) => {

    setWasshing(e.target.value);
  };

  const handleIronChange = (e) => {

    setIron(e.target.value);
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();

    let totalBulbsPower = parseInt(bulbs) * 20;
    let totalFansPower = parseInt(fans) * 80;
    let totalTvPower = parseInt(tv) * 150;
    let totalFridgePower = parseInt(fridge) * 500;
    let totalAcPower = parseInt(ac) * 1500;
    let totalWashingPower = parseInt(washing) * 500;
    let totalIronPower = parseInt(iron) * 1500;

    let totalWattsRequired = totalBulbsPower + totalFansPower + totalTvPower + totalFridgePower + totalAcPower + totalWashingPower + totalIronPower;

    setTotalWatts(totalWattsRequired);

    let kv = (totalWattsRequired + 1000) / 1000

    console.log('kv', kv)


    let decimal = kv.toString().split('.')[1];


    
    if (decimal) {
      
      decimal = decimal[0]
    }
    
    console.log('decimal', decimal)

    if (decimal >= 5) {

      setTotalKv(Math.ceil(kv))
    } else {
      setTotalKv(Math.floor(kv))
    }

    //setTotalKv((totalWattsRequired + 1000) / 1000);

    
  };

  const closePopup = () => {

    setPopup(false)

  }

  const openPopup = () => {

    setPopup(true)
  }

  const sendQuery = (e) => {

    e.preventDefault();
    console.log('hello')
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

  }

  return (
    <div className="calculator__section">
      <div className={ popup ? 'popup' : 'popup hidden'}>

        <div className="popup__overlay" >
          <div className="popup__content">


            <div className="close" onClick={closePopup}>&times;</div>

            <div className="popup__heading">
              <h4>Please fill the form below and sends us the query. We will get back to you with our recommended solutions according to your requirements. </h4>
            </div>
            <div className="customer__query_details">
              <div className="equipment"><h3>No of Bulbs: {bulbs}</h3></div>
           
              <div className="equipment"><h3>No of Fans: {fans}</h3></div>
           
              <div className="equipment"><h3>No of Televisions: {tv}</h3></div>
          
              <div className="equipment"><h3>No of Refregerators: {fridge}</h3></div>
           
              <div className="equipment"><h3>No of Air Conditioners: {ac}</h3></div>
           
              <div className="equipment"><h3>No of Washing Machines: {washing}</h3></div>
           
              <div className="equipment"><h3>No of Irons: {iron}</h3></div>
            </div>
          

            <div className="form">
              <form onSubmit={(e) => sendQuery(e)}>

                <div className="details">
                 
                  <textarea id='message' name='Message' placeholder="Enter your message" required readOnly value={`Bulbs: ${bulbs}, Fans: ${fans}, Televisions: ${tv}, Refregerators: ${fridge}, Air Conditioners: ${ac}, Washing Machines: ${washing}, Irons: ${iron}}`} />
                </div>

                <div className="input">
                  <label htmlFor="name">Please Enter Your Name:</label>
                  <input  id='name' name='Name' type="text" placeholder="Enter your Name" required />
                </div>
                <div className="input">
                  <label htmlFor="email">Please Enter Your Mobile Number:</label>
                  <input  id='number' name='Mobile' type="number" placeholder="Enter your mobile number" required />
                </div>


                  <button className="btn btn__green">Send Query</button>


              </form>
            </div>

          </div>



        </div>


      </div>
      <div className="calculator__container">
        <div className="calculator__section__heading">
          <h2>Want A More Customized Solution?</h2>
        </div>

        <div className="calculator__heading">
          <h3>
            Select The Type And Number of Appliances From The following
            calculator that you want to run simultaneously on solar.
          </h3>
        </div>

        <div className="appliances__container">
          <form className="calculator__form" onSubmit={handleFormSubmit}>
            <div className="appliance lights">
              <div className="title">
                <h5>
                  LED Bulbs{" "}
                  <span>
                    (14W<span>/bulb</span>)
                  </span>
                </h5>
              </div>

              <div className="form__group">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="lights 0"
                    value="0"
                    name="bulb"
                    onChange={handleLightsChange}
                  />
                  <label htmlFor="lights 0" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>0</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="lights 1"
                    value="1"
                    name="bulb"
                    onChange={handleLightsChange}
                  />
                  <label htmlFor="lights 1" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>1</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="lights 3"
                    value="3"
                    name="bulb"
                    onChange={handleLightsChange}
                  />
                  <label htmlFor="lights 3" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>3</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="lights 5"
                    value="5"
                    name="bulb"
                    onChange={handleLightsChange}
                  />
                  <label htmlFor="lights 5" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>5</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="lights 10"
                    value="10"
                    name="bulb"
                    onChange={handleLightsChange}
                  />
                  <label htmlFor="lights 10" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>10</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="lights 15"
                    value="15"
                    name="bulb"
                    onChange={handleLightsChange}
                  />
                  <label htmlFor="lights 15" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>15</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="lights 20"
                    value="20"
                    name="bulb"
                    onChange={handleLightsChange}
                  />
                  <label htmlFor="lights 20" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>20</p>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="appliance fans">
              <div className="title">
                <h5>
                  Ceiling Fans{" "}
                  <span>
                    (150W<span>/fan</span>)
                  </span>
                </h5>
              </div>

              <div className="form__group">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="fan 0"
                    value="0"
                    name="fan"
                    onChange={handleFanChange}
                  />
                  <label htmlFor="fan 0" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>0</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="fan 1"
                    value="1"
                    name="fan"
                    onChange={handleFanChange}
                  />
                  <label htmlFor="fan 1" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>1</p>
                    </span>
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="fan 2"
                    value="2"
                    name="fan"
                    onChange={handleFanChange}
                  />
                  <label htmlFor="fan 2" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>2</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="fan 3"
                    value="3"
                    name="fan"
                    onChange={handleFanChange}
                  />
                  <label htmlFor="fan 3" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>3</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="fan 5"
                    value="5"
                    name="fan"
                    onChange={handleFanChange}
                  />
                  <label htmlFor="fan 5" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>5</p>
                    </span>
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="fan 8"
                    value="8"
                    name="fan"
                    onChange={handleFanChange}
                  />
                  <label htmlFor="fan 8" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>8</p>
                    </span>
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="fan 10"
                    value="10"
                    name="fan"
                    onChange={handleFanChange}
                  />
                  <label htmlFor="fan 10" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>10</p>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="appliance tv">
              <div className="title">
                <h5>
                  LED TV{" "}
                  <span>
                    (150W<span>/tv</span>)
                  </span>
                </h5>
              </div>

              <div className="form__group">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="tv 0"
                    value="0"
                    name="tv"
                    onChange={handleTVChange}
                  />
                  <label htmlFor="tv 0" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>0</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="tv 1"
                    value="1"
                    name="tv"
                    onChange={handleTVChange}
                  />
                  <label htmlFor="tv 1" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>1</p>
                    </span>
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="tv 2"
                    value="2"
                    name="tv"
                    onChange={handleTVChange}
                  />
                  <label htmlFor="tv 2" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>2</p>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="appliance fridge">
              <div className="title">
                <h5>
                  Refrigerators{" "}
                  <span>
                    (500W<span>/inverter refrigerator</span>)
                  </span>
                </h5>
              </div>

              <div className="form__group">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="frige 0"
                    value="0"
                    name="fridge"
                    onChange={handleFridgeChange}
                  />
                  <label htmlFor="frige 0" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>0</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="frige 1"
                    value="1"
                    name="fridge"
                    onChange={handleFridgeChange}
                  />
                  <label htmlFor="frige 1" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>1</p>
                    </span>
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="fridge 2"
                    value="2"
                    name="fridge"
                    onChange={handleFridgeChange}
                  />
                  <label htmlFor="fridge 2" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>2</p>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="appliance ac">
              <div className="title">
                <h5>
                  1.5 Ton Air Conditioners{" "}
                  <span>
                    (1500W<span>/DC inverter</span>)
                  </span>
                </h5>
              </div>

              <div className="form__group">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="ac 0"
                    value="0"
                    name="ac"
                    onChange={handleACChange}
                  />
                  <label htmlFor="ac 0" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>0</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="ac 1"
                    value="1"
                    name="ac"
                    onChange={handleACChange}
                  />
                  <label htmlFor="ac 1" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>1</p>
                    </span>
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="ac 2"
                    value="2"
                    name="ac"
                    onChange={handleACChange}
                  />
                  <label htmlFor="ac 2" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>2</p>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="appliance washing">
              <div className="title">
                <h5>
                  Washing Machines{" "}
                  <span>
                    (500W<span>/automatic machine</span>)
                  </span>
                </h5>
              </div>

              <div className="form__group">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="washing 0"
                    value="0"
                    name="washing"
                    onChange={handleWashingChange}
                  />
                  <label htmlFor="washing 0" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>0</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="washing 1"
                    value="1"
                    name="washing"
                    onChange={handleWashingChange}
                  />
                  <label htmlFor="washing 1" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>1</p>
                    </span>
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="washing 2"
                    value="2"
                    name="washing"
                    onChange={handleWashingChange}
                  />
                  <label htmlFor="washing 2" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>2</p>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="appliance iron">
              <div className="title">
                <h5>
                  Iron{" "}
                  <span>
                    (1500W<span>/iron</span>)
                  </span>
                </h5>
              </div>

              <div className="form__group">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="iron 0"
                    value="0"
                    name="iron"
                    onChange={handleIronChange}
                  />
                  <label htmlFor="iron 0" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>0</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="iron 1"
                    value="1"
                    name="iron"
                    onChange={handleIronChange}
                  />
                  <label htmlFor="iron 1" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>1</p>
                    </span>
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="iron 2"
                    value="2"
                    name="iron"
                    onChange={handleIronChange}
                  />
                  <label htmlFor="iron 2" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>2</p>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="form__button">
              <button className="btn btn__green"> Submit</button>
            </div>
          </form>

          <div className="totalPowerRequired">
            <h3>
              {totalWatts ? (
                <p>
                  You Require To Generate <span>{totalWatts}</span> watts of
                  energy. For this amount of energy we recommend that you will need a <span>{totalKv} Kv</span> unit.
                </p>
              ) : null}
            </h3>
          </div>


          {totalWatts ? (<div className="custom__query">
            <button className="btn btn__green" onClick={openPopup}>Send Query For More Details</button>
          </div>) : null }
        </div>
      </div>
    </div>
  );
};

export default Calculator;
