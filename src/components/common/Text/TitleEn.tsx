import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";

interface TitleProps {
  color: string;
  title: string;
}

function Title(props: TitleProps) {
  const TitleVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
      className={`text-[100px] ${props.color} font-bold mb-[50px] transition-colors duration-500`}
      ref={ref}
      variants={TitleVariant}
      initial="hidden"
      animate={control}
    >
      {props.title}
    </motion.div>
  );
}

export default Title;
