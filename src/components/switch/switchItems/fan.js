import "./fan.css";
const Fan = () => {
    return(
        <>
        <div className="TaskItem1">
              <div className="TaskChart">
                <label className="switch">
                  <input type="checkbox" id="togBtn" />
                  <div className="slider round">
                    <img
                      src={require("../../Icons/air_tag.png")}
                      className="airTaskChart itembtn"
                      alt=""
                    />
                    {/* <!--ADDED HTML --> */}
                    <span className="on">ON</span>
                    <span className="off">OFF</span>
                    {/* <!--END--> */}
                  </div>
                </label>
              </div>
              <div className="MonthlyEarning"></div>
            </div>
        </>
    );
}
export default Fan;