import AboutCont from "../include/AboutCont";
import TitleEn from "../common/Text/TitleEn";
import SubTitle from "../common/Text/SubTitle";
import { useEffect, useRef } from "react";

function About() {
  const aboutTargetRef: React.LegacyRef<HTMLDivElement> = useRef(null);
  const aboutContainerRef: React.LegacyRef<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const aboutTarget = aboutTargetRef.current;
    const aboutContainer = aboutContainerRef.current;

    // 브라우저에 작용하는 스크롤을 아예 없애버리고 전체 페이지가 wheel로만 작용하게끔 설정
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      const nextScroll = window.scrollY + aboutTarget.scrollLeft + event.deltaY;
      const targetTotalScroll =
        aboutTarget.scrollWidth - aboutTarget.offsetWidth;
      console.log("nextScroll: " + nextScroll);
      console.log("scrollLeft:" + aboutTarget.scrollLeft);
      console.log("aboutContainer.offsetTop: " + aboutContainer.offsetTop);
      console.log("targetTotalScroll: " + targetTotalScroll);
      if (nextScroll < 0) {
        window.scrollTo({ left: 0, top: 0 });
      } else if (nextScroll < aboutContainer.offsetTop) {
        window.scrollTo({ left: 0, top: nextScroll, behavior: "auto" });
        aboutTarget.scrollTo({
          left: 0,
          top: 0,
          behavior: "auto",
        });
      } else if (
        nextScroll >= aboutContainer.offsetTop &&
        nextScroll < aboutContainer.offsetTop + targetTotalScroll
      ) {
        window.scrollTo({
          left: 0,
          top: aboutContainer.offsetTop,
          behavior: "auto",
        });
        aboutTarget.scrollTo({
          left: nextScroll - aboutContainer.offsetTop,
          top: 0,
          behavior: "auto",
        });
      } else if (nextScroll >= aboutContainer.offsetTop + targetTotalScroll) {
        window.scrollTo({
          left: 0,
          top: nextScroll - targetTotalScroll,
          behavior: "auto",
        });
        aboutTarget.scrollTo({
          left: targetTotalScroll,
          top: 0,
          behavior: "auto",
        });
      }
    };

    window.addEventListener("wheel", handleScroll, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
  return (
    <div
      className="w-full pt-[200px] pb-[250px] rounded-b-[100px] flex flex-col items-center bg-primary"
      ref={aboutContainerRef}
    >
      <div className="w-[1040px]">
        <TitleEn title="About us" color="text-white"></TitleEn>
        <SubTitle
          title="field S는 다양한 기술을 통해 이런 일들을 하고 있어요."
          size="text-[35px]"
          delay="0.6"
        ></SubTitle>
      </div>
      <div
        className={`overflow-hidden w-full flex mt-[150px] gap-40 px-[calc((100vw-1040px)/2)]`}
        ref={aboutTargetRef}
      >
        <AboutCont title="AI를 적용한 웹/모바일 앱 제작"></AboutCont>
        <AboutCont title="AI를 적용한 웹/모바일 앱 제작"></AboutCont>
        <AboutCont title="3D 모델링 & VR 제작"></AboutCont>
        <AboutCont title="VR과 AI를 연동한 서비스 제작"></AboutCont>
      </div>
    </div>
  );
}

export default About;
