import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";

interface ButtonProps {
  size: string;
  title: string;
  delay?: number;
  duration?: number;
  initial: string;
}

function Button(props: ButtonProps) {
  const ButtonSize = {
    sm: "w-[140px] py-[9px] px-[21px] text-[18px] bg-secondary text-white text-center font-semibold rounded-[50px] cursor-pointer hover:bg-hover hover:text-primary transition-all duration-300 ease-out",
    lg: "px-[62px] py-[14px] text-[25px] mt-[30px] font-semibold bg-secondary text-white text-center rounded-[50px] cursor-pointer hover:bg-hover hover:text-primary transition-all duration-300 ease-out",
  };
  const ButtonVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: props.duration, delay: props.delay },
    },
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
      className={ButtonSize[props.size]}
      ref={ref}
      variants={ButtonVariant}
      initial={props.initial}
      animate={control}
    >
      {props.title}
    </motion.div>
  );
}

export default Button;
