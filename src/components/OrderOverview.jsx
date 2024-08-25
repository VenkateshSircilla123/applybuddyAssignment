import React from "react";
import Timeline from "./Timeline";
const OrderOverview = () => {
  return (
    <div className="max-w-[350px] w-full  shadow-xl p-3 rounded-md pl-8">
      <h3>Order OverView</h3>
      <small>
        <b>24%</b> this month
      </small>
      <Timeline />
    </div>
  );
};

export default OrderOverview;
