import React from "react";
import Navbar from "./Navbar";
import CardBody from "./CardBody";
import { FaCartShopping } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { IoMdGlobe } from "react-icons/io";
import { LuFileBadge } from "react-icons/lu";
import BuiltDevCard from "./BuiltDevCard";
import WorkWithRocketsCard from "./WorkWithRocketsCard";
import { CustomBarchart } from "./CustomBarchart";
import CustomLineGraph from "./CustomLineGraph";
import { svg } from "../constants/constants";
import Projects from "./Projects";
import OrderOverview from "./OrderOverview";
// import { svg } from "../constants/index.js";
const DashboardBody = () => {
  const icons = {
    users: (
      <svg
        width="100px"
        height="100px"
        viewBox="0 0 40 44"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <title>document</title>
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g
            transform="translate(-1870.000000, -591.000000)"
            fill="#FFFFFF"
            fill-rule="nonzero"
          >
            <g transform="translate(1716.000000, 291.000000)">
              <g transform="translate(154.000000, 300.000000)">
                <path
                  class="color-background"
                  d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                  opacity="0.603585379"
                ></path>
                <path
                  class="color-background"
                  d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),
  };
  return (
    <div className="p-4 mr-3 max-w-[1990px] w-full md:ml-56 ">
      {/* dashboard navbar */}
      <Navbar />
      {/* bashboard body  */}
      <div className="w-full md:flex justify-between mt-7 flex-wrap">
        <CardBody
          title="Today's Money"
          value="$53000"
          percentage="55%"
          img={<GrMoney />}
        />
        <CardBody
          title="Today's Users"
          value="2,300"
          percentage="3%"
          img={<IoMdGlobe />}
        />
        <CardBody
          title="New Clients"
          value="+3,462"
          percentage="-2%"
          img={<LuFileBadge />}
        />
        <CardBody
          title="Sales"
          value="$103,430"
          percentage="5%"
          img={<FaCartShopping />}
        />
      </div>

      {/* built by dev and work cards */}
      <div className="dev_work mt-6  lg:flex gap-12 ">
        <BuiltDevCard />
        <WorkWithRocketsCard />
      </div>

      {/* active users and sales overview */}
      <div className="graphs mt-6 sm:grid sm:w-full lg:flex lg:justify-between gap-6">
        <div className=" shadow-xl p-4 rounded-md lg:max-w-[430px] w-[100%] sm:w-full">
          <CustomBarchart />
          <div className="mt-4 mb-4">
            <h3>Active Users</h3>
            <p className="text-gray-500">
              <b>(+23%)</b> than last week
            </p>
          </div>
          <div className=" flex justify-between">
            <div>
              <div className="flex gap-2 mb-3">
                <div className="flex justify-center items-center bg-gradient-to-tl from-[#7928ca] to-[#ff0080] w-5 h-5 rounded-md">
                  {svg.users}
                </div>
                <small>Users</small>
              </div>
              <h2>36K</h2>

              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-[#344767] h-2.5 rounded-full w-[60%]"></div>
              </div>
            </div>
            <div>
              <div className="flex gap-2 mb-3">
                <div className="flex justify-center items-center bg-gradient-to-tl from-[#2152ff] to-[#21d4fd] w-5 h-5 rounded-md">
                  {svg.clicks}
                </div>
                <small>Clicks</small>
              </div>
              <h2>2m</h2>

              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-[#344767] h-2.5 rounded-full w-[75%]"></div>
              </div>
            </div>
            <div>
              <div className="flex gap-2 mb-3">
                <div className="flex justify-center items-center bg-gradient-to-tl from-[#f53939] to-[#fbcf33] w-5 h-5 rounded-md">
                  {svg.sales}
                </div>
                <small>Sales</small>
              </div>
              <h2>435$</h2>

              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-[#344767] h-2.5 rounded-full w-[25%]"></div>
              </div>
            </div>
            <div>
              <div className="flex gap-2 mb-3">
                <div className="flex justify-center items-center bg-gradient-to-tl from-[#ea0606] to-[#ff667c] w-5 h-5 rounded-md">
                  {svg.items}
                </div>
                <small>Items</small>
              </div>
              <h2>43</h2>

              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-[#344767] h-2.5 rounded-full w-[49%]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[650px] w-full shadow-xl p-5 rounded-md sm:w-full">
          <h3>Sales Overview</h3>
          <small>
            <b>4% more </b>in 2021
          </small>

          <CustomLineGraph />
        </div>
      </div>

      <div className="mt-7 lg:flex justify-between gap-5 ">
        <Projects />
        <OrderOverview />
      </div>
    </div>
  );
};

export default DashboardBody;
