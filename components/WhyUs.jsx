import React from "react";

const WhyUs = () => {
  return (
    <div className="whyus__container">
      <div className="container__img">
        <img src="fizz-mobile.png" alt="Fizz Energies Mobile Logo" />
      </div>
      <div className="container__main">
        <div className="container__heading">
          <h1>Why Choose Us</h1>
        </div>
        <div className="benefit free-maintenance">
          <h2>6 Month Free Maintainance</h2>
          <p>We Provide 6 Month Free Maintanance After Installation.</p>
        </div>
        <div className="benefit delivery">
          <h2>Deliver Service On Time</h2>
          <p>
            We Have History Of Completing Projects And Services Within Specified
            Time Period.
          </p>
        </div>
        <div className="benefit staff">
          <h2>Co-Operative and Professional Staff</h2>
          <p>
            OUR Educated And Certified Team Complete Work In Professional Way
            And Provide 100% Customer Satisfaction.
          </p>
        </div>
        <div className="benefit mount">
          <h2>Mount With Latest Tools</h2>
          <p>
            We Deploy Systems At Right PLACE That Capture Maximum Output. We
            Keep Safety A High Priority.
          </p>
        </div>
        <div className="benefit response">
          <h2>Quick Response To Queries</h2>
          <p>
            Our Professional Staff Is Available For your Help And Resolving Your
            Queries Promptly.
          </p>
        </div>
        <div className="benefit quality">
          <h2>Efficient Quality Control</h2>
          <p>
            As We Dont Import/Export By Any Third Party Thats Why We Pride
            Ourself In Bringing Original And Best Quality Products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
