import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const CustomBarchart = () => {
  const data = [
    {
      month: "Apr",
      sales: 450,
    },
    {
      month: "May",
      sales: 200,
    },
    {
      month: "Jun",
      sales: 100,
    },
    {
      month: "Jul",
      sales: 220,
    },
    {
      month: "Aug",
      sales: 500,
    },
    {
      month: "Sep",
      sales: 100,
    },
    {
      month: "Oct",
      sales: 400,
    },
    {
      month: "Nov",
      sales: 230,
    },
    {
      month: "Dec",
      sales: 500,
    },
  ];

  return (
    <div className="h-[170px] bg-gradient-to-tl from-[#141727] to-[#3a416f] py-5 pr-5 rounded-lg sm:h-52">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} innerRadius={50}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="month" hide={true} />
          <YAxis axisLine={false} />
          <Tooltip
            content={({ payload }) => {
              // const { name, value } = payload[0];
              return (
                <div className="bg-black rounded-md text-white p-3">
                  <p>Month: {payload[0]?.name}</p>
                  <p>Sales: {payload[0]?.value}</p>
                </div>
              );
            }}
          />
          <Bar dataKey="sales" fill="#ffffff" radius={50} barSize={10} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
