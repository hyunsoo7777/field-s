import React from "react";

interface InputProps {
  text: string;
  height?: string;
}
function ContactInput(props: InputProps) {
  return (
    <input
      className={`w-full h-[${props.height}] bg-inputColor rounded-[10px] py-[16px] px-[20px] text-[24px] focus:outline-none focus:border-primary-500 focus:ring-primary-500
    placeholder:text-primary-200 text`}
      type="text"
      placeholder={props.text}
    ></input>
  );
}

export default ContactInput;
