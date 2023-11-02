import React, { useState } from 'react';
import Data from '../homepageitems/data';
function History() {
  const data = Data();
  const itemsPerPage = 10;
    const pages = [];
    for (let i = 0; i < data.length; i += itemsPerPage) {
      pages.push(data.slice(i, i + itemsPerPage));
      }
    const [currentPage, setCurrentPage] = useState(0); // Bắt đầu ở trang 0
    const currentData = pages[currentPage]; // Dữ liệu của trang hiện tại
    return (
        <>
          <table>
        <thead>
            <tr>
                <th>Thời gian</th>
                <th>Nhiệt độ</th>
                <th>Độ ẩm</th>
                <th>Ánh sáng</th>
            </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              <td>{item.time}</td>
              <td>{item.temperature}</td>
              <td>{item.humidity}</td>
              <td>{item.light}</td>
            </tr>
          ))}
        </tbody>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0}>Trang trước</button>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === pages.length - 1}>Trang tiếp theo</button>
      </table>
      </>
    );

}

export default History;

