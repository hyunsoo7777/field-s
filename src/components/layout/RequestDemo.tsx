import React from "react";
import Button from "../common/Btn/Button";
import TitleKo from "../common/Text/TitleKo";

function RequestDemo(props) {
  return (
    <div className="w-full bg-primary pt-[250px] pb-[240px] flex flex-col items-center justify-center rounded-[100px]">
      <TitleKo title="저희 서비스가 궁금하신가요?"></TitleKo>
      <Button
        title="데모 신청하기"
        size="lg"
        delay={0.3}
        duration={0.3}
        initial="hidden"
      ></Button>
    </div>
  );
}

export default RequestDemo;
