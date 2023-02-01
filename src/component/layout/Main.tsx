import React from "react";
import Button from "../common/Btn/Button";
import TitleKo from "../common/Text/TitleKo";
import GIF from "../../assets/04.gif";

function Main(props) {
  return (
    <div
      className="w-full h-screen pl-52"
      style={{
        backgroundImage: `url(${GIF})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
      }}
    >
      <div className="pt-[450px]">
        <TitleKo title="몰입감 있는 경험"></TitleKo>
        <div className="text-3xl text-white mt-[30px] mb-[50px]">
          사실같은 경험을 할 수 있는 서비스를 만들고 있어요.
        </div>
        <Button size="lg" title="더 알아보기"></Button>
      </div>
    </div>
  );
}

export default Main;
