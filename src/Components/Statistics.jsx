import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const Statistics = () => {
  const data = [
    {
      name: "Assignment 1",
      mark: 59,
    },
    {
      name: "Assignment 2",
      mark: 60,
    },
    {
      name: "Assignment 3",
      mark: 49,
    },
    {
      name: "Assignment 4",
      mark: 39,
    },
    {
      name: "Assignment 5",
      mark: 55,
    },
    {
      name: "Assignment 6",
      mark: 58,
    },
    {
      name: "Assignment 7",
      mark: 51,
    },
    {
      name: "Assignment 8",
      mark: 41,
    },
    
  ];
  return (
    <div className="flex justify-center my-8">
      <div>
        <h2 className="font-bold text-3xl text-center my-5">
          Assignment Marks in Area chart
        </h2>
        <AreaChart
          width={1100}
          height={350}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </div>
    </div>
  );
};

export default Statistics;
