import { motion } from "framer-motion";

function AboutCont(props) {
  return (
    <div className="w-[1040px] flex items-center justify-center">
      <motion.div className="w-[1040px] px-[80px] py-[30px] text-[70px] text-center font-bold rounded-[40px] bg-white text-primary">
        {props.title}
      </motion.div>
    </div>
  );
}

export default AboutCont;
