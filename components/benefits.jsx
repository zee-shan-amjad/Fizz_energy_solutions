import React from "react";

const Benefits = () => {
  return (
    <div className="benefits_section">
      <div className="benefits_section-heading">
        <h1>BENEFITS OF SOLAR ENERGY</h1>
      </div>
      <div className="benefits_section-benefits">
        <div className="benefit">
          <img className="benefit-img" src="green energy icon.png " alt="" />
          <h3>ECONOMICAL ELECTRICITY</h3>
          <p>
          Generating your own electricity means that you will be using less from the utility supplier. This will immediately translate to savings on your energy bill. Plus, you can also make money by selling the unused electricity, which you have generated, back to the grid.
          </p>
        </div>

        <div className="benefit">
          <img className="benefit-img" src="solar-panel.png " alt="" />
          <h3>ZERO LOADSHEDDING</h3>
          <p>
            With installation of solar system you can get rid of loadshedding.
            
          </p>
        </div>

        <div className="benefit">
          <img className="benefit-img" src="save the planet.png" alt="" />
          <h3>SAVE THE PLANET</h3>
          <p>
          Solar energy has the least negative impact on the environment compared to any other energy source. It does not produce greenhouse gases and does not pollute the water.
          </p>
        </div>
        <div className="benefit">
          <img className="benefit-img" src="natural energy.webp" alt="" />
          <h3>NATURAL RESOURCES</h3>
          <p>
          As long as there is sunshine, solar energy can be deployed anywhere. Solar system use sunlight to generate electricity. This
          allows us to save natural resources like oil and gas which are being currently used to produce
            electricity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
