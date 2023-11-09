import React, { useEffect, useState } from 'react';
import './historycss.css';
import axios from 'axios';

function filterData(data, start, end) {
    return data.slice(start, end + 1);
}

const Historytest = () => {
    const [lastData, setlastData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8888/api/latestDataLed')
            .then(response => {
                setlastData(response.data);
                // console.log(data);
            })
            .catch(error => console.error(error));
    }, []);



    const itemsPerPage = 10;
    const [data, setData] = useState([]);
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
    const pagefilter = [];

    for (let i = 0; i < data.length; i += itemsPerPage) {
        pagefilter.push(data.slice(i, i + itemsPerPage));
    }

    const [currentPage, setCurrentPage] = useState(0); // Bắt đầu ở trang 0
    const currentData = pagefilter[currentPage]; // Dữ liệu của trang hiện tại

    const datafilter = filterData(data, startTime, endTime);
    const searchByTimestamp = () => {
        // Chuyển đổi thời gian từ định dạng ngày giờ thành timestamp Unix hoặc định dạng MySQL
        const startTimeUnix = new Date(startTime).getTime() / 1000;
        const endTimeUnix = new Date(endTime).getTime() / 1000;
        console.log(startTimeUnix);
        console.log(endTimeUnix);
        // Gửi yêu cầu tìm kiếm dựa trên khoảng thời gian
        axios.get(`http://localhost:8888/api/data/historyLed?startTime=${startTimeUnix}&endTime=${endTimeUnix}`)
            .then(response => {
                // Xử lý dữ liệu tìm kiếm ở đây
                setData(response.data);
                setCurrentPage(0);
                console.log(data);
            })
            .catch(error => console.error(error));
    };

    // const datafilter = filterData(data, pageStart, pageEnd);
    return (
        <>
            <h1>Lịch sử</h1>
            <div className='filter'>
                <label>Từ</label>
                <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} step="1" />
                <label>Đến</label>
                <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} step="1" />
                <button onClick={searchByTimestamp}>Tìm kiếm</button>
            </div>

            <table className='custom-table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Thiết bị</th>
                        <th>Trạng thái</th>
                        <th>Thời gian</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData ? (
                        currentData.length > 0 ? (
                            currentData.map((item, index) => (

                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.led}</td>
                                    <td>{item.status}</td>
                                    <td>{item.timestamp}</td>
                                </tr>

                            ))
                        ) : (

                            <tr>
                                <td colSpan="4">Không tìm thấy kết quả</td>
                            </tr>

                        )
                    ) : (
                        // <tr>
                        //   <td colSpan="4">Đang tìm kết quả</td>
                        // </tr>
                        lastData.map((item, index) => (

                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.led}</td>
                                <td>{item.status}</td>
                                <td>{item.timestamp}</td>
                            </tr>

                        ))
                    )}
                </tbody>


                {
                    (currentData && currentData.length > 0) ? (
                        <>
                            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0}>Trang trước</button>
                            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === pagefilter.length - 1}>Trang tiếp theo</button>
                        </>
                    ) : (<></>)
                }
            </table>
        </>
    );
}
export default Historytest;