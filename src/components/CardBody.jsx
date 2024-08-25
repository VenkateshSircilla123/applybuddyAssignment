import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { IoMdGlobe } from "react-icons/io";
import { LuFileBadge } from "react-icons/lu";
const CardBody = ({ title, value, percentage, img }) => {
  return (
    <div className="flex items-center justify-between shadow-xl p-5 gap-5 rounded-md">
      <div>
        <h4>{title}</h4>
        <div>
          <b>{value}</b> <small>{percentage}</small>
        </div>
      </div>
      <div className="w-[48px] h-[48px] flex justify-center items-center bg-gradient-to-r from-[#f12089] to-[#970697] rounded-lg">
        {img}
      </div>
    </div>
  );
};

export default CardBody;
