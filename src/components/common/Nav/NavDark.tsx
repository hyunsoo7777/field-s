import Logo from "../../../assets/fieldS_logo.svg";
import Logo_white from "../../../assets/fieldS_logo_allwhite.svg";
import Button from "../Btn/Button";
import LangBtn from "../Btn/LangBtn";

interface NavProps {
  dark: boolean;
  aboutTargetRef: React.RefObject<HTMLDivElement>;
  aboutContainerRef: React.RefObject<HTMLDivElement>;
  historyTargetRef: React.RefObject<HTMLDivElement>;
  historyContainerRef: React.RefObject<HTMLDivElement>;
  teamContainerRef: React.RefObject<HTMLDivElement>;
  productContainerRef: React.RefObject<HTMLDivElement>;
  techContainerRef: React.RefObject<HTMLDivElement>;
}

function Nav_dark(props: NavProps) {
  return (
    <div className="fixed z-50 w-[1040px] mt-[30px] py-[20px] flex justify-between items-center">
      <a href="/">
        <img
          src={props.dark ? Logo : Logo_white}
          alt=""
          className="w-[140px] mr-[101px]"
        />
      </a>
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
        <div
          className="hover:text-secondary cursor-pointer transition-all duration-300 ease-out"
          onClick={() => {
            window.scrollTo({
              top: props.teamContainerRef.current.offsetTop,
              behavior: "smooth",
            });
            props.aboutTargetRef.current.scrollTo({
              left:
                props.aboutTargetRef.current.scrollWidth -
                props.aboutTargetRef.current.offsetWidth,
              top: 0,
              behavior: "auto",
            });
            props.historyTargetRef.current.scrollTo({
              left:
                props.historyTargetRef.current.scrollWidth -
                props.historyTargetRef.current.offsetWidth,
              top: 0,
              behavior: "auto",
            });
          }}
        >
          Our team
        </div>
        <div
          className="hover:text-secondary cursor-pointer transition-all duration-300 ease-out"
          onClick={() => {
            window.scrollTo({
              top: props.productContainerRef.current.offsetTop,
              behavior: "smooth",
            });
            props.aboutTargetRef.current.scrollTo({
              left:
                props.aboutTargetRef.current.scrollWidth -
                props.aboutTargetRef.current.offsetWidth,
              top: 0,
              behavior: "auto",
            });
            props.historyTargetRef.current.scrollTo({
              left:
                props.historyTargetRef.current.scrollWidth -
                props.historyTargetRef.current.offsetWidth,
              top: 0,
              behavior: "auto",
            });
          }}
        >
          자체 서비스
        </div>
        <div
          className="hover:text-secondary cursor-pointer transition-all duration-300 ease-out"
          onClick={() => {
            window.scrollTo({
              top: props.techContainerRef.current.offsetTop,
              behavior: "smooth",
            });
            props.aboutTargetRef.current.scrollTo({
              left:
                props.aboutTargetRef.current.scrollWidth -
                props.aboutTargetRef.current.offsetWidth,
              top: 0,
              behavior: "auto",
            });
            props.historyTargetRef.current.scrollTo({
              left:
                props.historyTargetRef.current.scrollWidth -
                props.historyTargetRef.current.offsetWidth,
              top: 0,
              behavior: "auto",
            });
          }}
        >
          서비스/기술 소개
        </div>
      </div>
      <div className="flex items-center mr-[30px]">
        <Button size="sm" title="데모 신청하기" initial="false"></Button>
      </div>
      <LangBtn></LangBtn>
    </div>
  );
}

export default Nav_dark;
