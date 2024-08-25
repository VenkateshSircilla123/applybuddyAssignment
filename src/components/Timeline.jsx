import React from "react";
import { FaBell } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa";
import { MdKey } from "react-icons/md";
import { BsDatabaseFillAdd } from "react-icons/bs";

const Timeline = () => {
  return (
    <ol class="relative border-s border-gray-200 dark:border-gray-700 mt-5">
      <li class="mb-6 ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 ">
          <div className=" ">
            <FaBell color="green" />
          </div>
        </span>
        <h5 class="flex items-center mb-1 text-sm font-semibold text-gray-900 dark:text-white">
          $2400, Design changes{" "}
        </h5>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          22 DEC 7:20 PM
        </time>
      </li>
      <li class="mb-6 ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <FaHtml5 color="red" />
        </span>
        <h5 class="flex items-center mb-1 text-sm font-semibold text-gray-900 dark:text-white">
          New order #1832412{" "}
        </h5>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          21 DEC 11 PM
        </time>
      </li>
      <li class="mb-6 ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <IoCartSharp color="#17c1e8" />
        </span>
        <h5 class="flex items-center mb-1 text-sm font-semibold text-gray-900 dark:text-white">
          Server payments for April{" "}
        </h5>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          21 DEC 9:34 PM
        </time>
      </li>
      <li class="mb-6 ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <div>
            <FaCreditCard color="orange" />
          </div>
        </span>
        <h5 class="flex items-center mb-1 text-sm font-semibold text-gray-900 dark:text-white">
          New card added for order #4395133{" "}
        </h5>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          20 DEC 2:20 AM
        </time>
      </li>
      <li class="mb-6 ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <div>
            <MdKey color="purple" />
          </div>
        </span>
        <h5 class="flex items-center mb-1 text-sm font-semibold text-gray-900 dark:text-white">
          Unlock packages for development{" "}
        </h5>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          18 DEC 4:54 AM
        </time>
      </li>
      <li class="mb-6 ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <div>
            <BsDatabaseFillAdd />
          </div>
        </span>
        <h5 class="flex items-center mb-1 text-sm font-semibold text-gray-900 dark:text-white">
          New order #9583120{" "}
        </h5>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          17 DEC
        </time>
      </li>
    </ol>
  );
};

export default Timeline;
