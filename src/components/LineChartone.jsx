import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const ChartContainer = styled.div`
  width: 100%;
  height: 100px;

  @media (min-width: 600px) {
    height: ${({ isDashboard }) => (isDashboard ? '200px' : '150px')};
  }

  @media (min-width: 900px) {
    height: ${({ isDashboard }) => (isDashboard ? '200px' : '250px')};
    
  }
`;

const LineChartone = ({ isDashboard = false }) =>{
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

return (
  <ChartContainer isDashboard={isDashboard}>
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={isDashboard ? 500 : 300}
        height={isDashboard ? 200 : 250}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: -20,
          bottom: 0,
          
        }}
      >
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="60%" stopColor="#8DFF87" stopOpacity={0.8} />
            <stop offset="350%" stopColor="#94CD91" stopOpacity={0} />
          </linearGradient>
        </defs>
        
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip /> 
        <Area type="monotone" dataKey="uv" stackId="1" fill="url(#gradient)" />
      </AreaChart>
    </ResponsiveContainer>
  </ChartContainer>
);
};
export default LineChartone;
