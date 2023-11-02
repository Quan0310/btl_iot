import React, { useState } from 'react';
import './publisher.css';
// import mqtt from 'mqtt';

const Subscribe = () => {
//   const [receivedData, setReceivedData] = useState('');
//   const [mqttClient, setMqttClient] = useState(null);

//   const connectToMqttBroker = () => {
//     const newMqttClient = mqtt.connect('ws://192.168.0.101:1883/mqtt'); // Thay đổi URL MQTT broker nếu cần
//     setMqttClient(newMqttClient);

//     newMqttClient.on('connect', () => {
//       console.log('Kết nối thành công đến MQTT broker.');
//       newMqttClient.subscribe('topic_name'); // Thay 'topic_name' bằng tên topic bạn muốn subscribe
//     });

//     newMqttClient.on('message', (topic, message) => {
//       console.log(`Nhận dữ liệu từ ${topic}: ${message.toString()}`);
//       setReceivedData(message.toString());
//     });
//   };

  return (
    <div>
    <script src="https://unpkg.com/mqtt/dist/mqtt.min.js"></script>

      <h1>Subscribe to MQTT Data</h1>
      <button >Kết nối MQTT</button>
      <p>Dữ liệu nhận được:</p>
    </div>
  );
};

export default Subscribe;
