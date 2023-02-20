import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";

interface ISubTitle {
  title: string;
  size: string;
  delay: number;
}

function SubTitle(props: ISubTitle) {
  const subTitleVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: props.delay },
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
      className={`${props.size} font-medium text-white`}
      ref={ref}
      variants={subTitleVariant}
      initial="hidden"
      animate={control}
    >
      {props.title}
    </motion.div>
  );
}

export default SubTitle;
