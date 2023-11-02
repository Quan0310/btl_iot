import React, { useState, useEffect } from 'react';
import axios from 'axios';
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function generateRandomData() {
//   return {
//     time: getRandomInt(0, 1),
//     temperature: getRandomInt(0, 50),
//     humidity: getRandomInt(20, 90),
//     light: getRandomInt(100, 200)
//   };
// }

export default function Data() {


  // const [data, setData] = useState({
  //   time: ' ',
  //   temperature: 0,
  //   humidity: 0,
  //   light: 0,
  // });
  const [data, setData] = useState([]);
  // const [temperature, setTemperature] = useState(0);
  // const [humidity, setHumidity] = useState(0);
  // const [light, setLight] = useState(0);

  // const latestData = data.length > 0 ? data[data.length - 1].temperature : 0;
  useEffect(() => {
    const interval = setInterval(() => {
      // Gọi API để lấy dữ liệu từ máy chủ Node.js
      axios.get('http://localhost:8888/api/latestData')
        .then(response => {
          setData(response.data);
          // console.log(data);
        })
        .catch(error => console.error(error));
    }, 2000);

    return () => clearInterval(interval);
  }, [data]);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8888/api/latestData');
  //       response.data.forEach(item => {
  //         const { id, time, temperature, humidity } = item;
  //         // setData({
  //         //   time,
  //         //   temperature,
  //         //   humidity,
  //         //   id,
  //         // });
  //         console.log("item1:" + item);
  //       });


  //       // const { light, time, temperature, humidity } = response.data;
  //       // setData({
  //       //   time,
  //       //   temperature,
  //       //   humidity,
  //       //   light,
  //       // });
  //       // console.log('quan181');
  //     } catch (error) {
  //       console.error('Lỗi khi gọi API:', error);
  //     }
  //   };

  //   const intervalId = setInterval(fetchData, 6000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);
  return data;
}