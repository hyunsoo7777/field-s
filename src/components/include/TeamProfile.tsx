import React from "react";
import Profile from "../../assets/profile_1.png";

interface TeamProps {
  grid: string;
}

function TeamProfile(props: TeamProps) {
  return (
    <div
      className={`${props.grid}  bg-footprint w-[280px] h-[280px] rounded-[20px] overflow-hidden`}
    >
      <img src={Profile} alt="" className="object-cover" />
    </div>
  );
}

export default TeamProfile;
