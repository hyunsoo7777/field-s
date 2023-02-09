import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

function AboutCont() {
  const containerRef = useRef(null);
  const [left, setLeft] = useState(0);
  const handleScroll = (event) => {
    event.preventDefault();
    setLeft(left + event.deltaY);
  };
  return (
    <div
      className="overflow-hidden h-full"
      ref={containerRef}
      onWheel={handleScroll}
    >
      <div className="w-[400%] mt-[150px] flex">
        <motion.div className="w-[1040px] py-[30px] text-[70px] text-center font-bold rounded-[40px] bg-white text-primary">
          AI를 적용한 웹/모바일 앱 제작
        </motion.div>
      </div>
    </div>
  );
}

export default AboutCont;
