import React from "react";
import Button from "../Btn/Button";
import Logo_white from "../../../assets/fieldS_logo_white.png";

function Nav_White() {
  return (
    <div className="fixed z-20 w-full mt-[30px] py-[20px] flex items-center justify-center ">
      <img src={Logo_white} alt="" className="w-[140px] mr-[100px]" />
      <div className="space-x-[30px] flex items-center mr-[30px] text-lg rounded-[100px]  py-[9px] px-[32px] bg-white">
        <div className="hover:text-secondary cursor-pointer transition-all duration-300 ease-out">
          회사 소개
        </div>
        <div className="hover:text-secondary cursor-pointer transition-all duration-300 ease-out">
          Our team
        </div>
        <div className="hover:text-secondary cursor-pointer transition-all duration-300 ease-out">
          자체 서비스
        </div>
        <div className="hover:text-secondary cursor-pointer transition-all duration-300 ease-out">
          서비스/기술 소개
        </div>
      </div>
      <div className="flex items-center mr-[30px]">
        <Button size="sm" props="데모 신청하기"></Button>
      </div>
      <div className="pl-[16px] pr-[19px] py-[9px] rounded-[100px] flex items-center justify-center text-xl font-medium bg-white">
        <div className="hover:text-secondary mr-[15px]">한</div>
        <div className="hover:text-secondary text-lang mr-[18px]">|</div>
        <div className="hover:text-secondary text-lang">E</div>
      </div>
    </div>
  );
}

export default Nav_White;
