
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";



const ImgDesc = ({title, logo, imgSide = "right", children}) => {
    return (
        <div className="row px-5 py-4 border border-danger align-items-center">
            {imgSide === "left" &&
              <div className="col-5">
                <img src={logo} alt="" className="img-fluid"/>
              </div>
            }

          <div className="col-7">
            <div className="display-4 mb-4">{title}</div>
            {children}
            
          </div>
          {imgSide === "right" &&
              <div className="col-5">
                <img src={logo} alt="" />
              </div>
            }
        </div>
    );
};

export default ImgDesc;