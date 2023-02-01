import AboutCont from "../include/AboutCont";
import Title from "../common/Text/TitleEn";

function About() {
  return (
    <div className="w-full pt-[200px] pb-[250px] rounded-b-[100px] flex flex-col items-center bg-primary">
      <div className="w-[985px]">
        <Title title="About" color="text-white"></Title>
        <div className="mt-[50px] mb-[150px] text-[35px] font-medium text-white">
          field S는 다양한 기술을 통해 이런 일들을 하고 있어요.
        </div>
        <AboutCont></AboutCont>
      </div>
    </div>
  );
}

export default About;
