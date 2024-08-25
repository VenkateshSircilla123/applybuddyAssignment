import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Apr",
    mobile_apps: 50,
    websites: 30,
  },
  {
    name: "May",
    mobile_apps: 40,
    websites: 90,
  },
  {
    name: "Jun",
    mobile_apps: 300,
    websites: 40,
  },
  {
    name: "Jul",
    mobile_apps: 220,
    websites: 140,
  },
  {
    name: "Aug",
    mobile_apps: 500,
    websites: 290,
  },
  {
    name: "Sep",
    mobile_apps: 250,
    websites: 290,
  },
  {
    name: "Oct",
    mobile_apps: 400,
    websites: 340,
  },
  {
    name: "Nov",
    mobile_apps: 230,
    websites: 230,
  },
  {
    name: "Dec",
    mobile_apps: 500,
    websites: 400,
  },
];

export default class CustomLineGraph extends PureComponent {
  render() {
    return (
      <div className="h-[250px] mt-7">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
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
            <Line
              type="monotone"
              dataKey="websites"
              stroke="#262527"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="mobile_apps" stroke="#b410ac" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
