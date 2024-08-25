import React from "react";

const BuiltDevCard = () => {
  return (
    <div className="bwc flex gap-20 p-3 shadow-xl rounded-md">
      <div className="grid justify-between max-w-80">
        <div className="">
          <h3 className=" text-gray-500">Built by Developers</h3>
          <h2 className="font-bold">Soft UI Dashboard</h2>
          <p>
            From colors, cards, typography to complex elements, you will find
            the full documentation.
          </p>
        </div>
        <span className="text-gray-600">Read more</span>
      </div>

      <div className="flex justify-center items-center bg-gradient-to-r from-[#f12089] to-[#970697] p-5 rounded-md">
        <img
          src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/illustrations/rocket-white.png"
          alt=""
          className="w-[245px]"
        />
      </div>
    </div>
  );
};

export default BuiltDevCard;
