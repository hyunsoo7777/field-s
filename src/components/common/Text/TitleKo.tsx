import React, { useRef } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect } from "react";

function Title_ko(props) {
  const titleVariant: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hidden: { opacity: 0, y: 20 },
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
      className="text-[70px] font-semibold text-white 
       mb-[30px] relative z-30"
      ref={ref}
      variants={titleVariant}
      initial="hidden"
      animate={control}
    >
      {props.title}
    </motion.div>
  );
}

export default Title_ko;
