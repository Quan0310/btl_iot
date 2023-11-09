import React, { useEffect, useState } from 'react';
import axios from 'axios';
import io from "socket.io-client";
import './light.css';

const socket = io("http://localhost:8888");
const Light = () => {
  const lightSwitch = document.getElementById('togBtn');
  const [isChecked, setIsChecked] = useState(false);
  socket.on("updateLedStatus2", (message) => {
    setIsChecked(message === "ON" ? true : false);
    console.log(message);
  });
  useEffect(() => {
    axios.get('http://localhost:8888/api/lastStatusLed2')
      .then(response => {
        setIsChecked(response.data.status === 'ON' ? true : false);
        // console.log(data);
      })
      .catch(error => console.error(error));
  }, []);
  const handleCheckboxChange = async () => {
    try {
      // Gửi yêu cầu đến máy chủ
      await axios.post("http://localhost:8888/api/toggleLed2", { isEnabled: !isChecked });

      // Cập nhật trạng thái checkbox
      // setIsChecked(!isChecked);
      socket.on("updateLedStatus2", (message) => {
        setIsChecked(message === "ON" ? true : false);
        console.log(message);
      });
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu:", error);
    }
  }
  return (
    <>
      <div className="TaskItem2">
        <div className="TaskChart">
          <label className="switch">
            <input type="checkbox" id="togBtn" checked={isChecked}
              onChange={handleCheckboxChange} />
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