import AboutCont from "../include/AboutCont";
import TitleEn from "../common/Text/TitleEn";
import SubTitle from "../common/Text/SubTitle";
import { useEffect, useState } from "react";

interface AboutProps {
  ContainerRef: React.LegacyRef<HTMLDivElement>;
  TargetRef: React.LegacyRef<HTMLDivElement>;
}

function About(props: AboutProps) {
  return (
    <div
      className="w-full pt-[200px] pb-[250px] rounded-b-[100px] flex flex-col items-center bg-primary z-30"
      ref={props.ContainerRef}
    >
      <div className="w-[1040px]">
        <TitleEn title="About us" color="text-white"></TitleEn>
        <SubTitle
          title="field S는 다양한 기술을 통해 이런 일들을 하고 있어요."
          size="text-[35px]"
          delay={0.6}
        ></SubTitle>
      </div>

      <div
        className={`overflow-hidden w-full flex mt-[150px] gap-40 px-[calc((100vw-1040px)/2)]`}
        ref={props.TargetRef}
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
