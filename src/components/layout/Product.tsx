import Title from "../common/Text/TitleEn";
import ProductText from "../include/ProductText";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Product({ productContainerRef }) {
  const productVariant: Variants = {
    visible: {
      transition: { duration: 1.2 },
      scale: 8,
      y: -100,
    },
    hidden: { scale: 1, y: 0 },
  };
  const control = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [textColor, setColor] = useState("text-primary");

  useEffect(() => {
    if (isInView) {
      control.start("visible");
      setTimeout(() => {
        setColor("text-white");
      }, 500);
    } else {
      control.start("hidden");
    }
  }, [control, isInView]);

  return (
    <div
      className=" w-full overflow-hidden pt-[200px] pb-[250px] flex flex-col items-center relative rounded-b-[100px]"
      ref={productContainerRef}
    >
      <div className="w-[1040px] z-30 flex flex-col items-center">
        <Title title="Our product" color={textColor}></Title>
        <ProductText color={textColor}></ProductText>
        <div className="bg-white mt-[117px] w-[900px] h-[500px] rounded-[50px]"></div>
      </div>
      <motion.div
        className="bg-primary absolute top-[880px] z-20 w-96 h-96 rounded-full"
        ref={ref}
        variants={productVariant}
        initial="hidden"
        animate={control}
      ></motion.div>
    </div>
  );
}

export default Product;
