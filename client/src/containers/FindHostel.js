import { useState } from "react";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import ProvincePopUp from "../components/ProvincePopUp";
import BackToTopButton from "../components/BackToTopButton";

function FindHostel() {
    const [isOpen, setIsOpen] = useState(false);
    const handlePopUp = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div>
      <Header />
      {isOpen && <ProvincePopUp handleClose={ handlePopUp} />}
      
      <div className="filter-container w-[60%] mx-[20%] my-[10px] grid grid-cols-10 gap-x-2 rounded-lg bg-cyan-100/75 fixed top-[65px] px-[20px] py-[10px] items-center">
        <div className="grid grid-cols-4 gap-x-2 col-span-9 ">
          <div className="kinds rounded-md bg-white cursor-pointer h-[40px] text-center hover:border hover:border-black " onClick={handlePopUp}>
            <span>Loại trọ</span>
            
          </div>
          <div className="location rounded-md bg-white cursor-pointer h-[40px] text-center hover:border hover:border-black " onClick={handlePopUp}>
            <span>Vị trí</span>
          </div>
          <div className="price rounded-md bg-white cursor-pointer h-[40px] text-center hover:border hover:border-black" onClick={handlePopUp}>
            <span>Khoảng giá</span>
          </div>
          <div className="area rounded-md bg-white cursor-pointer h-[40px] text-center hover:border hover:border-black" onClick={handlePopUp}>
            <span>Diện tích</span>
          </div>
        </div>

        <div className="apply bg-gray-200 rounded-lg p[5px] text-center h-[30px] items-center hover:bg-red-400 font-bold flex hover:border hover:border-red-800">
          <button className="w-[100%]">Lọc</button>
        </div>
      </div>
      <div className="h-[1000px] bg-yelow-400  "></div>
      <BackToTopButton/> 
      <Footer />
    </div>
  );
}
export default FindHostel;
