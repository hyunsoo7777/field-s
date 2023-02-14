import React, { useEffect, useRef } from "react";
import TitleEn from "../common/Text/TitleEn";
import HistoryFootprint from "../include/HistoryFootprint";

function History(props) {
  const historyTargetRef: React.LegacyRef<HTMLDivElement> = useRef(null);
  const historyContainerRef: React.LegacyRef<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const historyTarget = historyTargetRef.current;
    const historyContainer = historyContainerRef.current;

    // 브라우저에 작용하는 스크롤을 아예 없애버리고 전체 페이지가 wheel로만 작용하게끔 설정
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      const nextScroll =
        window.scrollY + historyTarget.scrollLeft + event.deltaY;
      const targetTotalScroll =
        historyTarget.scrollWidth - historyTarget.offsetWidth;
      // console.log("nextScroll: " + nextScroll);
      // console.log("scrollLeft:" + historyTarget.scrollLeft);
      // console.log("historyContainer.offsetTop: " + historyContainer.offsetTop);
      // console.log("targetTotalScroll: " + targetTotalScroll);
      if (nextScroll < 0) {
        window.scrollTo({ left: 0, top: 0 });
      }
      if (nextScroll < historyContainer.offsetTop) {
        window.scrollTo({ left: 0, top: nextScroll, behavior: "auto" });
        historyTarget.scrollTo({
          left: 0,
          top: 0,
          behavior: "auto",
        });
      } else if (
        nextScroll >= historyContainer.offsetTop &&
        nextScroll < historyContainer.offsetTop + targetTotalScroll
      ) {
        window.scrollTo({
          left: 0,
          top: historyContainer.offsetTop,
          behavior: "auto",
        });
        historyTarget.scrollTo({
          left: nextScroll - historyContainer.offsetTop,
          top: 0,
          behavior: "auto",
        });
      } else if (nextScroll >= historyContainer.offsetTop + targetTotalScroll) {
        window.scrollTo({
          left: 0,
          top: nextScroll - targetTotalScroll,
          behavior: "auto",
        });
        historyTarget.scrollTo({
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
      className="w-full pt-[200px] pb-[166px] flex flex-col items-center"
      ref={historyContainerRef}
    >
      <div className="w-[1040px]">
        <TitleEn title="History" color="text - primary"></TitleEn>
      </div>
      <div
        className={`overflow-hidden w-full flex gap-[250px] px-[calc((100vw-1040px)/2)]`}
        ref={historyTargetRef}
      >
        <HistoryFootprint
          title="field S 창업"
          date="2021.05"
        ></HistoryFootprint>
        <HistoryFootprint
          title="세종대학교 창업경진대회 최우수상"
          date="2021.05"
        ></HistoryFootprint>
        <HistoryFootprint
          title="건국대학교 예비창업패키지 선정"
          date="2022.05"
        ></HistoryFootprint>
        <HistoryFootprint
          title="K-digital Challenge AI 창업경진대회 우수상 수상"
          date="2022.06"
        ></HistoryFootprint>
        <HistoryFootprint
          title="서울 혁신 챌린지 선정"
          date="2022.10"
        ></HistoryFootprint>
        <HistoryFootprint
          title="특허 출원 과정 시작"
          date="2022.11"
        ></HistoryFootprint>
        <HistoryFootprint
          title="잠실 본사 이전"
          date="2023.01"
        ></HistoryFootprint>
      </div>
      <div className="w-full h-1 absolute bg-primary translate-y-[610px]"></div>
    </div>
  );
}

export default History;
