import React from "react";
import Profile from "../../assets/profile_1.png";

function TeamProfile() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-[100px] mt-[100px] justify-center lg:grid-cols-3 ">
        <div className="col-start-2 col-end-2... bg-footprint w-[280px] h-[280px] rounded-[20px]">
          <img src={Profile} alt="" />
        </div>
        <div className="col-start-1 ...  bg-footprint w-[280px] h-[280px] rounded-[20px]">
          <img src={Profile} alt="" />
        </div>
        <div className="...  bg-footprint w-[280px] h-[280px] rounded-[20px]">
          <img src={Profile} alt="" />
        </div>
        <div className="...  bg-footprint w-[280px] h-[280px] rounded-[20px]">
          <img src={Profile} alt="" />
        </div>
        <div className="...  bg-footprint w-[280px] h-[280px] rounded-[20px]">
          <img src={Profile} alt="" />
        </div>
        <div className="...  bg-footprint w-[280px] h-[280px] rounded-[20px]"></div>
        <div className="...  bg-footprint w-[280px] h-[280px] rounded-[20px]"></div>
        <div className="...  bg-footprint w-[280px] h-[280px] rounded-[20px]"></div>
        <div className="...  bg-footprint w-[280px] h-[280px] rounded-[20px]"></div>
      </div>
    </div>
  );
}

export default TeamProfile;
