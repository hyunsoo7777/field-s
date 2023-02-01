import React from "react";

function Title(props) {
  return (
    <div className={`text-[100px] ${props.color} font-bold mb-[50px]`}>
      {props.title}
    </div>
  );
}

export default Title;
