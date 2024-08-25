import React from "react";
import { data } from "../assets/data";
const AvatarGroup = ({ arr }) => {
  return (
    <div class="flex -space-x-2">
      {arr.map((index) => (
        <div class="hs-tooltip inline-block">
          <img
            class="hs-tooltip-toggle relative inline-block size-[20px] rounded-full ring-2 ring-white hover:z-10"
            src={data[index].img}
            alt="Avatar"
          />
          <span
            class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg"
            role="tooltip"
          >
            {data[index].name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
