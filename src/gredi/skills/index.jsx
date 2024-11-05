import React from "react";
import skillsProgress from "./skillsProgress";
const GrediSkills = () => {
  React.useEffect(() => {
    skillsProgress();
  }, []);
  return (
    <div
      className="skills-sec section-padding pt-100"
      style={{ backgroundColor: "#181818" }}
    >
      <div className="container">
        <div className="section-head">
          <h3>Konum</h3>
        </div>
        <div className="row">
          <div className="col-lg-6 valign  md-mb50">
            <div className="skills-box full-width">
              <div className="skill-item">
                <h6>Merkez</h6>
                <div className="skill-progress">
                  <div
                    className="progres custom-font"
                    data-value="65%"
                    data-name="1 km"
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <h6>Mini Market</h6>
                <div className="skill-progress">
                  <div
                    className="progres custom-font"
                    data-value="45%"
                    data-name="300 m"
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <h6>Otobüs Durakları</h6>
                <div className="skill-progress">
                  <div
                    className="progres custom-font"
                    data-value="55%"
                    data-name="700 m"
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <h6>Dalaman Havalimanı</h6>
                <div className="skill-progress">
                  <div
                    className="progres custom-font"
                    data-value="80%"
                    data-name="120 km"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="skills-box full-width">
              <div className="skill-item">
                <h6>Hastane</h6>
                <div className="skill-progress">
                  <div
                    className="progres custom-font"
                    data-value="65%"
                    data-name="1 km"
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <h6>Deniz (Plaj)</h6>
                <div className="skill-progress">
                  <div
                    className="progres custom-font"
                    data-value="65%"
                    data-name="1 km"
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <h6>Restaurant</h6>
                <div className="skill-progress">
                  <div
                    className="progres custom-font"
                    data-value="45%"
                    data-name="300 m"
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <h6>Antalya Havalimanı</h6>
                <div className="skill-progress">
                  <div
                    className="progres custom-font"
                    data-value="100%"
                    data-name="220 km"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrediSkills;
