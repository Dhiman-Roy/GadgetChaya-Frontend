import ShowBrand from "./ShowBrand";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
function SideDrawerCategory(props) {
  console.log(props.activeClick);

  const brandName = props.productData.map((product) => product.brand);
  const uniqueBrand = [...new Set(brandName)];

  const clickHandler = (id) => {
    props.setActiveClick(props.activeClick === id ? null : id);
  };
  console.log(props.productItems);
  const content = uniqueBrand.map((brand, index) => {
    return <ShowBrand brandName={brand} key={index} />;
  });

  return (
    <>
      <div className="flex flex-col ">
        <div className=" mb-1 p-2 pl-4 text-center font-bold text-xl cursor-pointer flex justify-between items-center px-3 ">
          {props.items}
          {props.activeClick !== props.id && (
            <div onClick={() => clickHandler(props.id)}>
              <IoIosArrowForward />
            </div>
          )}
          {props.activeClick === props.id && (
            <div onClick={() => clickHandler(props.id)}>
              <IoIosArrowDown />
            </div>
          )}
        </div>
        {props.activeClick === props.id && content}
      </div>
    </>
  );
}

export default SideDrawerCategory;
