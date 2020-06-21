import React from 'react';
import { useSelector } from 'react-redux';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import './Trends.component.scss';

const Trends = () => {
  const news = useSelector((state) => state.news);
  const chartData = news.map(({ objectID, points }) => ({
    name: objectID,
    Votes: points,
  }));

  return (
    <div className="trends">
      {chartData.length !== 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={chartData}
            syncId="anyId"
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            background="#ffffff"
          >
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="Votes"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <h6 className="t-h6">No Data Available!</h6>
      )}
    </div>
  );
};

export default Trends;
