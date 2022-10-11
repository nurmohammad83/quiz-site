import React, { useContext } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { Mycontext } from './Root';

const Statistics = () => {
  const total = useContext(Mycontext)
  console.log(total);
  return (
    
    <LineChart
          width={500}
          height={400}
          data={total}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
         <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
         
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
        </LineChart>
  );
};

export default Statistics;