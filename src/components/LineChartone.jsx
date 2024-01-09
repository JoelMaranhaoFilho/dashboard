import { AlignHorizontalCenter } from '@mui/icons-material';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const LineChartone = () => {
  const data = [
    { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 300, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 200, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 278, pv: 3908, amt: 2000 },
    { name: 'May', uv: 189, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 239, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 349, pv: 4300, amt: 2100 },
  ];

  const responsiveContainerStyles = {
    width: 650, 
    height: 270,
    margin: 5,
    padding: 20
     
  };

  return (
    <div style={responsiveContainerStyles}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#256CB3" />
          <Line type="monotone" dataKey="uv" stroke="#A74E96" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartone;
