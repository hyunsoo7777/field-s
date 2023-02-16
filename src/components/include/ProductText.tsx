import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";

function ProductCont(props) {
  const subTitleVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
    hidden: { opacity: 0, y: 30 },
  };
  const control = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, isInView]);
  return (
    <motion.div
      className={`${props.color} flex flex-col items-center text-center`}
      ref={ref}
      variants={subTitleVariant}
      initial="hidden"
      animate={control}
    >
      <div className="font-semibold text-[60px] mt-[60px]">
        3D로 구현되는 사실적인 서비스
      </div>
      <div className="font-normal text-[35px] mt-[50px]">
        우리는 공간의 제약 없이 몰입도 있는 경험을
        <br />할 수 있는 서비스를 만들고 있어요.
      </div>
    </motion.div>
  );
}

export default ProductCont;
