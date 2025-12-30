
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import mainStyle from "../static/assets/css/main.module.css"


const ImgDesc = ({ title, logo, imgSide = "right", children }) => {
  return (
    <div className="row px-5 py-4 align-items-center">
      {imgSide === "left" && (
        <div className="col-5 d-flex justify-content-center">
          <img
            src={logo}
            alt=""
            className="img-fluid mw-100"
            style={{ maxHeight: "280px" }} // optional, see note below
          />
        </div>
      )}

      <div className="col-7">
        <div className={`display-4 mb-4 ${mainStyle.textPrimary}`}>{title}</div>
        {children}
      </div>

      {imgSide === "right" && (
        <div className="col-5 d-flex justify-content-center">
          <img
            src={logo}
            alt=""
            className="img-fluid mw-100"
            style={{ maxHeight: "280px" }} // optional
          />
        </div>
      )}
    </div>
  );
};


export default ImgDesc;