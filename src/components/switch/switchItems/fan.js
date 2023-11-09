import React, { useEffect, useState } from 'react';
import axios from 'axios';
import io from "socket.io-client";
import "./fan.css";

const socket = io("http://localhost:8888");
const Fan = () => {
  const bs = `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`;
  const lightSwitch = document.getElementById('togBtn');
  const [isChecked, setIsChecked] = useState(false);

  socket.on("updateLedStatus1", (message) => {
    setIsChecked(message === "ON" ? true : false);
    console.log(message);
  });
  useEffect(() => {
    axios.get('http://localhost:8888/api/lastStatusLed1')
      .then(response => {
        setIsChecked(response.data.status === 'ON' ? true : false);
        // console.log(data);
      })
      .catch(error => console.error(error));
  }, []);
  const handleCheckboxChange = async () => {
    try {
      // Gửi yêu cầu đến máy chủ
      await axios.post("http://localhost:8888/api/toggleLed1", { isEnabled: !isChecked });

      // Cập nhật trạng thái checkbox
      socket.on("updateLedStatus1", (message) => {
        setIsChecked(message === "ON" ? true : false);
        console.log(message);
      });
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu:", error);
    }
  }
  return (
    // box - shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    <>
      <div className="TaskItem1" style={{ boxShadow: bs }}>
        <div className="TaskChart">
          <label className="switch">
            <input type="checkbox" id="togBtn" checked={isChecked}
              onChange={handleCheckboxChange} />
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
      </div >

    </>
  );
}
export default Fan;