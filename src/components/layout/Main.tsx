import Button from "../common/Btn/Button";
import TitleKo from "../common/Text/TitleKo";
import GIF from "../../assets/main.gif";
import SubTitle from "../common/Text/SubTitle";
import { easeInOut, motion } from "framer-motion";

function Main(props) {
  return (
    <div className="w-full pb-[100px] flex justify-center">
      <motion.div
        className="w-full h-[800px] z-10 absolute"
        style={{
          backgroundImage: `url(${GIF})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        animate={{
          opacity: [0, 0, 1],
          transition: { duration: 2.4, ease: easeInOut },
        }}
      ></motion.div>
      <div className="w-[1040px] pt-[420px] flex flex-col items-start z-20">
        <TitleKo
          title="몰입감 있는 경험"
          color="text-white"
          delay="1"
        ></TitleKo>
        <SubTitle
          title="사실같은 경험을 할 수 있는 서비스를 만들고 있어요."
          size="text-[30px]"
          delay="1"
        ></SubTitle>
        <Button
          size="lg"
          title="더 알아보기"
          delay="1"
          duration="0.6"
          initial="hidden"
        ></Button>
      </div>
    </div>
  );
}

export default Main;
