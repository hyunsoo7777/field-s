import Title from "../common/Text/TitleEn";
import ProductText from "../include/ProductText";

function Product() {
  return (
    <div className="w-[1040px] pt-[200px] pb-[250px] flex flex-col items-center">
      <Title title="Our Product" color="text-primary"></Title>
      <ProductText></ProductText>
      <div className="bg-primary mt-[117px] w-[900px] h-[500px] rounded-[50px]"></div>
    </div>
  );
}

export default Product;
