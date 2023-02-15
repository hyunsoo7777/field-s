import Title from "../common/Text/TitleEn";
import TeamProfile from "../include/TeamProfile";

function Team() {
  return (
    <div className="w-full bg-primary pt-[200px] pb-[250px] flex flex-col items-center text-center">
      <div className="w-[1040px]  rounded-b-[100px] ">
        <Title title={"Our team"} color={"text-white"}></Title>
        <TeamProfile></TeamProfile>
      </div>
    </div>
  );
}

export default Team;
