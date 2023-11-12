import React from "react";

function Team() {
  return (
    <div className="section__team">
      <div className="heading">
        <h2>Our Team</h2>
      </div>

      <div className="members">
        <div className="member member_1">
          <div className="member__img">
            <img src="./team/Bilal_Alvi2.jpg" alt="" />
          </div>

          <div className="member__name">
            <h3>Mohammad Bilal Alvi</h3>
          </div>

          <div className="member__designation">
            <p>
              Charmain Alvi Services <span>Import/Export Head</span>
            </p>
          </div>
        </div>

        <div className="member member_2">
          <div className="member__img fizz">
            <img src="./team/Faizan.jpg" alt="" />
          </div>

          <div className="member__name">
            <h3>Faizan Ahmed</h3>
          </div>

          <div className="member__designation">
            <p>Managing Director</p>
          </div>
        </div>

        <div className="member member_3">
          <div className="member__img">
            <img src="./team/A.Rehman.jpg" alt="" />
          </div>

          <div className="member__name">
            <h3>Abdul Rehman</h3>
          </div>

          <div className="member__designation">
            <p>Technician Head</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
