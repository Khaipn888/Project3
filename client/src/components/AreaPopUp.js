import { useState } from "react";
import ReactSlider from "react-slider";
import '../assets/styles/popUpStyle.css'

function AreaPopUp(props) {
    const MIN = 0;
    const MAX = 50;
    const [values, setValues] = useState([MIN,MAX]);

  return (
    <div className="pop-up-container w-full h-[100vh] fixed bg-gray-200/80 z-50 top-0 left-0 ">
      <div className="pop-up-box w-[800px] h-[300px] mx-auto mt-[50px] bg-white rounded-lg relative">
        <div className="price-values justify-center items-center text-center my-[20px] py-[30px]">
          <span className="mt-[20px] font-bold text-[25px] text-cyan-800 relative">
            Diện tích: {values[0]} m2  -  {values[1]} m2
          </span>
        </div>
        <div className="my-[30px]" >
          <ReactSlider
            className=" w-[80%] mx-[10%] bg-gray-400 h-[5px] "
            thumbClassName="w-[20px] h-[20px] rounded-full bg-gray-400 top-[-6px] focus:bg-red-500 cursor-grab"
            trackClassName="h-[5px] track "
            value={values}
            min={MIN}
            max={MAX}
            onChange={setValues}
            step={1}
          />
        </div>
        <div className="flex justify-between mx-[10%] font-bold text-[15px]">
            <span>0</span>
            <span>100m2</span>
        </div>
        <button
          className="exit-btn absolute rounded-full  w-[25px] h-[25px] top-[-5px] right-[-7px]"
          onClick={props.handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default AreaPopUp;