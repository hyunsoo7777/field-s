function HistoryFootprint(props) {
  return (
    <div className="w-[1040px]">
      <div className="w-max py-[10px] px-[30px] mt-[100px] bg-primary rounded-[70px] text-[25px] text-center text-white font-bold">
        {props.date}
      </div>
      <div className="w-max px-[40px] py-[30px] mt-[15px] mb-[100px] rounded-[20px] bg-secondary text-[40px] text-center text-white font-bold">
        {props.title}
      </div>
      <div className="w-[40px] h-[40px] bg-primary rounded-full"></div>
    </div>
  );
}

export default HistoryFootprint;
