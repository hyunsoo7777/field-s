import React from "react";
import Title from "../common/Text/TitleEn";
import HistoryFootprint from "../include/HistoryFootprint";

function History(props) {
  return (
    <div className="w-full h-[950px] pt-[200px] pl-[200px]">
      <Title title="History" color="text - primary"></Title>
      <HistoryFootprint></HistoryFootprint>
      <div className="w-[40px] h-[40px] bg-primary rounded-full"></div>
    </div>
  );
}

export default History;
