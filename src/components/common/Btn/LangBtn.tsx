import React, { useState } from "react";

function LangBtn() {
  const [lang, setlang] = useState(true);
  return (
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
        }}
      >
        E
      </div>
    </div>
  );
}

export default LangBtn;
