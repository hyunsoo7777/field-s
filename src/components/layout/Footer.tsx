import React from "react";
import LogoAllwhite from "../../assets/fieldS_logo_allwhite.svg";
import Social from "../../assets/social_icons.svg";
import Up from "../../assets/Up.svg";

function Footer() {
  return (
    <div className="w-full py-[100px] bg-primary rounded-t-[100px] flex items-center justify-center">
      <div className="w-[1040px] text-white">
        <div className="flex justify-between">
          <img src={LogoAllwhite} alt="" />
          <img src={Social} alt="" />
        </div>
        <div className="w-[509px] mt-[30px] text-[18px] font-light flex space-x-[20px]">
          <span>회사 소개</span>
          <span>Our team</span>
          <span>서비스 소개</span>
          <span>문의하기</span>
          <span>Blog</span>
          <span>인재 영입</span>
        </div>
        <div className="mt-[47px] h-[93px] flex font-light flex-col justify-between text-[18px]">
          <div>
            <strong>Business</strong> &nbsp;&nbsp; info@field-s.co.kr
          </div>
          <div>
            <strong>본사</strong> &nbsp;&nbsp;서울특별시 송파구 삼전동 116-16,
            5층
          </div>
          <div>
            <strong>지사</strong> &nbsp;&nbsp; 광주광역시 동구 금남로 193-22
          </div>
        </div>
        <div className="w-full mt-[40px] font-light text-[18px] flex justify-between items-end">
          <div>© field S. All Rights Reserved.</div>
          <img src={Up} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
