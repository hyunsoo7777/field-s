import { useEffect, useState } from "react";
import Logo from "../../../assets/fieldS_logo.svg";
import Logo_white from "../../../assets/fieldS_logo_allwhite.svg";
import Button from "../Btn/Button";

interface NavProps {
  dark: boolean;
  aboutTargetRef: React.RefObject<HTMLDivElement>;
  aboutContainerRef: React.RefObject<HTMLDivElement>;
  historyTargetRef: React.RefObject<HTMLDivElement>;
  historyContainerRef: React.RefObject<HTMLDivElement>;
}
function Nav_dark(props: NavProps) {
  const [lang, setlang] = useState(true);

  return (
    <div className="fixed z-50 w-[1040px] mt-[30px] py-[20px] flex justify-between items-center">
      <img
        src={props.dark ? Logo_white : Logo}
        alt=""
        className="w-[140px] mr-[101px]"
      />
      <div className="w-[500px] box-border space-x-[30px] flex items-center justify-between font-medium text-[18px] mr-[30px] rounded-[100px] py-[9px] px-[32px] bg-white">
        <div
          className="hover:text-secondary cursor-pointer transition-all duration-300 ease-out"
          onClick={() => {
            window.scrollTo({
              top: props.aboutContainerRef.current.offsetTop,
              behavior: "smooth",
            });
            props.aboutTargetRef.current.scrollTo({
              left: 0,
              top: 0,
              behavior: "auto",
            });
            props.historyTargetRef.current.scrollTo({
              left: 0,
              top: 0,
              behavior: "auto",
            });
          }}
        >
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
        <Button size="sm" title="데모 신청하기"></Button>
      </div>
      <div className="pl-[16px] pr-[19px] pt-[7px] pb-[8px] rounded-[100px] flex items-center justify-center text-[20px] font-medium bg-white">
        <div
          className={`cursor-pointer mr-[15px] ${
            lang === true ? "text-primary" : "text-lang"
          }`}
          onClick={() => {
            setlang(true);
          }}
        >
          한
        </div>
        <div className="text-lang w-[1px] h-[28px] bg-lang mr-[18px]"></div>
        <div
          className={`cursor-pointer ${
            lang === false ? "text-primary" : "text-lang"
          }`}
          onClick={() => {
            setlang(false);
            console.log("bang");
          }}
        >
          E
        </div>
      </div>
    </div>
  );
}

export default Nav_dark;
