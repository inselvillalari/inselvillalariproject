import React from "react";

const WorkHeader = ({ title, content, center }) => {
  return (
    <header
      className="bg-img valign"
      style={{
        backgroundImage: "url(/assets/img/patern.png)",
        minHeight: "43vh",
        backgroundSize: "auto",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container">
        <div className={`row ${center ? "justify-content-center" : ""}`}>
          <div className="col-lg-9">
            <div className={`cont ${center ? "text-center" : ""}`}>
              <h2
                style={{
                  marginTop: "120px",
                  letterSpacing: "2px",
                  marginBottom: "30px",
                  fontFamily: "Jost, sans-serif",
                  fontWeight: "500px",
                  fontSize: "40px",
                }}
              >
                {typeof title == "object" ? (
                  <>
                    {title.first} <br /> {title.second}
                  </>
                ) : (
                  title
                )}
              </h2>

              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WorkHeader;
