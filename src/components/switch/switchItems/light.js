import './light.css';

const Light = () => {
    return(
        <>
            <div className="TaskItem2">
              <div className="TaskChart">
                <label className="switch">
                  <input type="checkbox" id="togBtn" />
                  <div className="slider round">
                    <img
                      src={require("../../Icons/lightoff.png")}
                      className="lightoffTaskChart itembtn"
                      alt=""
                    />
                    <img
                      src={require("../../Icons/lighton.png")}
                      className="lightonTaskChart itembtn"
                      alt=""
                    />
                    {/* <!--ADDED HTML --> */}
                    <span className="on">ON</span>
                    <span className="off">OFF</span>
                    {/* <!--END--> */}
                  </div>
                </label>
              </div>
            </div>
        </>
    )
}
export default Light;