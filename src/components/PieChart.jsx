import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#8DFF87', '#8DFF87', '#8DFF87'];

const data = [
  {
    name: 'Page A',
    uv: 10,
    pv: 1,
    amt: 0,
  },
  {
    name: 'Page B',
    uv: 9,
    pv: 2,
    amt: 0,
  },
  {
    name: 'Page C',
    uv: 8,
    pv: 3,
    amt: 0,
  },
  
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 4} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function CustomBarChart() {
  return (
    <div style={{ width: 'auto', height: '200px',}}>
    <BarChart
    display="flex"
      width={450}
      height={230}
      data={data}
      
            
    >
     
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </div>
  );
}

