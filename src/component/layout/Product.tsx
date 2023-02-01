import Title from "../common/Text/TitleEn";

function Product() {
  return (
    <div className="pt-[200px] pb-[250px] w-full flex-columns flex flex-col items-center">
      <Title title="Our Product" color="text-primary"></Title>
      <div className="mt-[60px] font-semibold text-[60px]">
        3D로 구현되는 사실적인 서비스
      </div>
      <div className="mt-[50px] text-[35px] font-regular text-center">
        우리는 공간의 제약 없이 몰입도 있는 경험을
        <br />할 수 있는 서비스를 만들고 있어요.
      </div>
      <div className="bg-primary mt-[117px] w-[900px] h-[500px] rounded-[50px]"></div>
    </div>
  );
}

export default Product;
