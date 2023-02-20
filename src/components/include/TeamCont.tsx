import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import TeamProfile from "./TeamProfile";

function TeamCont(props) {
  const TeamVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
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
    <div>
      <motion.div
        className="grid grid-auto gap-[100px] mt-[100px] justify-center lg:grid-cols-3 "
        ref={ref}
        variants={TeamVariant}
        initial="hidden"
        animate={control}
      >
        <TeamProfile grid="col-start-1... lg:col-start-2 col-end-2..."></TeamProfile>
        <TeamProfile grid="col-start-2 ... lg:col-start-1"></TeamProfile>
        <TeamProfile grid="..."></TeamProfile>
        <TeamProfile grid="..."></TeamProfile>
        <TeamProfile grid="..."></TeamProfile>
        <TeamProfile grid="..."></TeamProfile>
        <TeamProfile grid="..."></TeamProfile>
        <TeamProfile grid="..."></TeamProfile>
        <TeamProfile grid="..."></TeamProfile>
        <TeamProfile grid="..."></TeamProfile>
      </motion.div>
    </div>
  );
}

export default TeamCont;
