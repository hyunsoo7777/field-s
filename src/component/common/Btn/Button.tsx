const ButtonSize = {
  sm: "w-36 pt-[9px] pb-[9px] pl-5 pr-5 text-lg bg-secondary text-white text-center font-semibold rounded-[50px] cursor-pointer hover:bg-hover hover:text-primary transition-all duration-300 ease-out",
  lg: "w-60 pt-4 pb-4 pl-15 pr-15 text-[25px] font-semibold bg-secondary text-white text-center rounded-[50px] cursor-pointer hover:bg-hover hover:text-primary transition-all duration-300 ease-out",
};
function Button_sm(props) {
  return <div className={ButtonSize[props.size]}>{props.title}</div>;
}

export default Button_sm;
