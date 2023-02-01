import Title from "../common/Text/TitleEn";
import TeamProfile from "../include/TeamProfile";

function Team() {
  return (
    <div className="bg-primary pt-[200px] pb-[250px] rounded-b-[100px] w-full flex-columns flex flex-col items-center">
      <Title title={"Our team"} color={"text-white"}></Title>
      <TeamProfile></TeamProfile>
    </div>
  );
}

export default Team;
