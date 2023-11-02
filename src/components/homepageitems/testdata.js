import React, { useState, useEffect } from 'react';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomData() {
    return {
        time: getRandomInt(0, 1),
        temperature: getRandomInt(0, 50),
        humidity: getRandomInt(20, 90),
        light: getRandomInt(100, 200)
    };
}

export default function HomeRightBar() {

    const [data, setData] = useState([]);
    const [temperature, setTemperature] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [light, setLight] = useState(0);

    const latestData = data.length > 0 ? data[data.length - 1].temperature : 0;
    useEffect(() => {
        const interval = setInterval(() => {
            // Tạo dữ liệu ngẫu nhiên mới
            const newData = generateRandomData();
            // const tempcolorcss  = document.getElementById('tempcolor');
            // const tempcolor = `hsl(${255 - 5 * newData.temperature}, 100%, 50%)`;
            // tempcolorcss.style.color = tempcolor;

            // Cập nhật dữ liệu hiện tại bằng cách thêm newData vào mảng data
            setData((prevData) => [...prevData, newData]);

            // Giới hạn số lượng mẫu dữ liệu trong mảng data
            if (data.length > 10) {
                setData((prevData) => prevData.slice(1));

            }
        }, 2000);

        return () => clearInterval(interval);
    }, [data]);
    return data;
}