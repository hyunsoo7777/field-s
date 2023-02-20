import { easeInOut } from "framer-motion";
import { motion } from "framer-motion";
import UNION from "../../assets/Union.png";

function Wave() {
  return (
    <div className="w-screen h-full flex justify-center">
      <motion.svg
        className="w-full absolute z-20"
        style={{
          backgroundImage: `url(${UNION})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100%",
        }}
        transition={{ duration: 2.4, ease: "easeInOut" }}
        animate={{
          y: [600, 250, 250, 250, 250],
          opacity: [1, 1, 1, 0, 0],
          scale: [1.4, 1.4, 3.2, 3.2, 4],
          height: [1000, 1000, 1000, 1000, 0],
          transitionEnd: {
            display: "none",
          },
          translateX: [200, 200, -1000, -1000, -1000],
          translateY: [0, 0, -700, -700, -700],
          // keyframe으로 배열 안에 넣으려면 px밖에 안됨,,, 화면 줄어들면 깨짐
          // 결국에 variant를 써야만 될것같긴한데 framer-motion자체가 반응형이 별로인것같음
        }}
      ></motion.svg>

      <motion.div className="absolute z-30 w-[1040px] flex justify-start">
        <motion.div
          className="pt-[420px] text-primary text-[70px] font-semibold"
          animate={{
            y: [20, 0, 0],
            opacity: [0, 1, 0],
            transition: { duration: 1.2, ease: easeInOut },
            height: [500, 500, 0],
            transitionEnd: {
              display: "none",
            },
          }}
        >
          몰입감 있는 경험
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Wave;
