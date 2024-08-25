import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-wrap justify-between">
      <div>
        <small className="text-base text-gray-500">
          Pages / <b>Dashboard</b>
        </small>
        <h3>
          <b>Dashboard</b>
        </h3>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          name=""
          id=""
          placeholder="Type here..."
          className="border-gray-300 rounded-xl placeholder-gray-300 w-28 h-9 lg:w-64 lg:h-12"
        />
        <button className="border border-pink-600 text-pink-600 rounded-xl px-5 py-1 ">
          <b>Online Builder</b>
        </button>
        <button className="mr-2 text-gray-600">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
