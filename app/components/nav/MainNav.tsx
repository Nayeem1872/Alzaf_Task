import React from "react";
import Searchbox from "./Searchbox";

const MainNav = () => {
  return (
    <div className=" flex w-full px-[280px] py-2 justify-between">
      <div>
<img src="/images/logo.png" alt="logo" className="w-[129px] h-[37.88px]" />

      </div>
      <div><Searchbox /></div>
      <div>

        <img src="/images/cloud.png" alt="cart" className="w-[177px] h-[44px] cursor-pointer" />
      </div>
    </div>
  );
};

export default MainNav;
