import React, { PureComponent, Fragment, useEffect, useState } from "react";
import { BarChart, Area, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Legend, ResponsiveContainer, } from "recharts";
import Data from '../data';

const MainChart = () => {
  const data = Data();
  return (
    <>
      <div className="MiddleTaskChart">
        <h3 className="TaskCretedvsCompleted">CHARTS</h3>
        <AreaChart data={data}
          width={900}
          height={450}
          margin={{ top: 20, right: 10, left: 0, bottom: 20 }}>
          <defs>
            <linearGradient id="nhietdo" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="doam" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="anhsang" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="temperature" stroke="#8884d8" fillOpacity={0.7} fill="url(#nhietdo)" />
          <Area type="monotone" dataKey="humidity" stroke="#82ca9d" fillOpacity={0.7} fill="url(#doam)" />
          <Area type="monotone" dataKey="light" stroke="#82ca9d" fillOpacity={0.7} fill="url(#anhsang)" />
        </AreaChart>
      </div>
    </>
  );
}
export default MainChart;