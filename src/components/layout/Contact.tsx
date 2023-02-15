import React from "react";
import Location from "../../assets/location.png";

function Contact() {
  return (
    <div className="pt-[200px] pb-[200px] w-full flex flex-col items-center">
      <div className="mb-[150px] font-semibold text-[50px]">
        저희와 이야기 하고 싶으신가요?
      </div>
      <div className="h-[720px] flex space-x-[60px]">
        <img src={Location} alt="" />
        <div className="flex flex-col items-center justify-between w-[600px]">
          <div className="font-semibold text-[40px]">Contact us</div>
          <input
            className="w-full font-sans bg-inputColor appearance-none border-none rounded-[10px] py-[16px] px-[20px] text-opacity-20 font-medium text-[24px] text-gray focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="이름"
          />
          <input
            className="w-full font-sans bg-inputColor appearance-none border-none rounded-[10px] py-[16px] px-[20px] text-opacity-20 font-medium text-[24px] text-gray focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="이메일 주소"
          />
          <input
            className="w-full font-sans bg-inputColor h-[350px] appearance-none border-none rounded-[10px] py-[16px] px-[20px] text-opacity-20 font-medium text-[24px] text-gray focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="문의 사항을 남겨주세요"
          />
          <button className="w-full h-[68px] bg-primary text-white font-semibold text-[30px] rounded-[50px] hover:bg-secondary transition-all duration-300 ease-out">
            문의하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
