import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const BarChart = ({ isDashboard = false }) => {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
  ];

  const COLORS = ['#2D8029', '#94CD91', '#8DFF87'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        ffontSize={isDashboard ? 12 : 23} // Ajuste o tamanho da fonte conforme necessário
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="30%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={isDashboard ? 80 : 90} // Ajuste o raio externo conforme necessário
          fill="#8884d8"
          dataKey="value"
          justifyContent={'center'}
          alignContent={'center'}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
