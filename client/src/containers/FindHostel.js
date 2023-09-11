import { useState } from "react";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import ProvincePopUp from "../components/ProvincePopUp";
import BackToTopButton from "../components/BackToTopButton";
import PricePopUp from "../components/PricePopUp";
import AreaPopUp from "../components/AreaPopUp";
import PostInstance from "../components/PostInstance";

function FindHostel() {
  const [popUp, setIsOpen] = useState({
    kindIsOpen: false,
    provinceIsOpen: false,
    priceIsOpen: false,
    areaIsOpen: false,
  });
  const popUpCopy = { ...popUp };
  const handleKindPopUp = () => {
    popUpCopy.kindIsOpen = !popUpCopy.kindIsOpen;
    setIsOpen(popUpCopy);
  };
  const handleProvincePopUp = () => {
    popUpCopy.provinceIsOpen = !popUpCopy.provinceIsOpen;
    setIsOpen(popUpCopy);
  };
  const handlePricePopUp = () => {
    setIsOpen((popUpCopy.priceIsOpen = !popUpCopy.priceIsOpen));
    setIsOpen(popUpCopy);
  };
  const handleAreaPopUp = () => {
    popUpCopy.areaIsOpen = !popUpCopy.areaIsOpen;
    setIsOpen(popUpCopy);
  };

  return (
    <div>
      <Header />
      {popUp.provinceIsOpen && (
        <ProvincePopUp handleClose={handleProvincePopUp} />
      )}
      {popUp.priceIsOpen && <PricePopUp handleClose={handlePricePopUp} />}
      {popUp.areaIsOpen && <AreaPopUp handleClose={handleAreaPopUp} />}
      <div className="filter-container w-[60%] mx-[20%] my-[10px] grid grid-cols-10 gap-x-2 rounded-lg bg-cyan-100/75  top-[65px] px-[20px] py-[10px] items-center">
        <div className="grid grid-cols-4 gap-x-2 col-span-9 ">
          <div
            className="kinds rounded-md bg-white cursor-pointer h-[40px] text-center hover:border hover:border-black "
            onClick={handleKindPopUp}
          >
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <select
              id="underline_select"
              className="block py-2.5 px-0 w-full text-center   bg-transparent  appearance-none  focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              aria-placeholder="jdshfjd"
            >
              <option selected>Loại trọ</option>
              <option value="US">Nhà cấp 4</option>
              <option value="CA">CCMN</option>
              <option value="OT">Khác</option>
            </select>
          </div>
          <div
            className="location rounded-md bg-white cursor-pointer h-[40px] text-center hover:border hover:border-black "
            onClick={handleProvincePopUp}
          >
            <span>Vị trí</span>
          </div>
          <div
            className="price rounded-md bg-white cursor-pointer h-[40px] text-center hover:border hover:border-black"
            onClick={handlePricePopUp}
          >
            <span>Khoảng giá</span>
          </div>
          <div
            className="area rounded-md bg-white cursor-pointer h-[40px] text-center hover:border hover:border-black"
            onClick={handleAreaPopUp}
          >
            <span>Diện tích</span>
          </div>
        </div>

        <div className="apply bg-gray-200 rounded-lg p[5px] text-center h-[30px] items-center hover:bg-red-400 font-bold flex hover:border hover:border-red-800">
          <button className="w-[100%]">Tìm</button>
        </div>
      </div>
      <div className=" grid grid-cols-2 gap-10 ">
        <div className="">
          <PostInstance />
          <PostInstance />
          <PostInstance />
        </div>
        <div className="">
          <PostInstance />
          <PostInstance />
          <PostInstance />
        </div>
      </div>
      <BackToTopButton />
      <Footer />
    </div>
  );
}
export default FindHostel;
