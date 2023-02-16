import Title from "../common/Text/TitleEn";
import TeamCont from "../include/TeamCont";

function Team({ teamContainerRef }) {
  return (
    <div
      className="w-full bg-primary pt-[200px] pb-[250px] flex flex-col items-center text-center z-30"
      ref={teamContainerRef}
    >
      <div className="w-[1040px]  rounded-b-[100px] ">
        <Title title={"Our team"} color={"text-white"}></Title>
        <TeamCont></TeamCont>
      </div>
    </div>
  );
}

export default Team;
