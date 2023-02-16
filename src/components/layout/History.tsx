import TitleEn from "../common/Text/TitleEn";
import HistoryFootprint from "../include/HistoryFootprint";

interface HistoryProps {
  ContainerRef: React.LegacyRef<HTMLDivElement>;
  TargetRef: React.LegacyRef<HTMLDivElement>;
}
function History(props: HistoryProps) {
  return (
    <div
      className="w-full pt-[200px] pb-[166px] flex flex-col items-center"
      ref={props.ContainerRef}
    >
      <div className="w-[1040px]">
        <TitleEn title="History" color="text - primary"></TitleEn>
      </div>
      <div
        className={`overflow-hidden w-full flex gap-[250px] pl-[calc((100vw-1040px)/2)] pr-[calc(50vw+214px)]`}
        ref={props.TargetRef}
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
