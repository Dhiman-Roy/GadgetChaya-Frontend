import ShowBrand from "./ShowBrand";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
function SideDrawerCategory(props) {
  console.log(props.activeClick);

  const subCategoryName = props.categoryData.map((subC) => {
    console.log(subC);

    return subC.subCategories.map((data) => {
      console.log(data.name);
      return data.name;
    });
  });

  const uniqueSubCategory = [...new Set(subCategoryName[0])];

  const clickHandler = (id) => {
    props.setActiveClick(props.activeClick === id ? null : id);
  };
  console.log(props.productItems);
  const content = uniqueSubCategory.map((subcategory, index) => {
    console.log(subcategory);
    return <ShowBrand subCategoryName={subcategory} key={index} {...props} />;
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
