"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import DropdownMenu from "./DropdownMenu";

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="bg-[#F0F1F1] flex w-full px-[280px] py-2 justify-between">
      <div className="flex items-center gap-7">
        <div className="relative">
          {/* Dropdown trigger */}
          <div
            className="flex items-center  justify-center  text-center cursor-pointer"
            onClick={toggleDropdown}
            style={{
              fontFamily: "Inter",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "15.6px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            <span className="text-[#F97316] font-[400px] text-[12px]">English</span>
            <FaChevronDown className="ml-2 text-[#F97316]" />
          </div>

          {/* Dropdown menu */}
          <DropdownMenu isOpen={isOpen} />
        </div>
        <span className="text-[#434343] font-[400px] text-[12px] cursor-pointer">
        Help Center
        </span>
        <span className="text-[#434343] font-[400px] text-[12px]">
        Helpline: 0964781656
        </span>
      </div>
      <div className=" flex items-center gap-7">
      <span className="text-[#434343] font-[400px] text-[12px] cursor-pointer">
      Become a Seller
        </span>
        <span className="text-[#434343] font-[400px] text-[12px] cursor-pointer">
        Order Track
        </span>
        <span className="text-[#F97316] font-[400px] text-[12px] cursor-pointer">
        Sign up / Login
        </span>
      </div>
    </div>
  );
};

export default TopNav;
