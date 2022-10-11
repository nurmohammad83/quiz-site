import React, { useContext } from "react";
import {
  CartesianGrid, Legend,Line, LineChart,Tooltip, XAxis,YAxis,} from "recharts";
import { Mycontext } from "./Root";

const Statistics = () => {
  const total = useContext(Mycontext);
  console.log(total);
  return (
    <div className="pt-5">
      <LineChart width={400} height={300} data={total}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Statistics;
