import React, { useEffect, useState } from "react";
import thumbnail from "../assets/images/thumbneil1.jpg";

const PostPDInstance = (info) => {
  const handlePrice = (price) => {
    if (price.length <= 3) {
      return price;
    } else {
      return (
        handlePrice(price.substring(0, price.length - 3)) +
        "." +
        price.substring(price.length - 3)
      );
    }
  };

  return (
    <div className=" rounded-lg w-full h-full grid grid-rows-2 bg-slate-100 hover:shadow-[0px_0px_10px_5px_rgba(0,0,0,0.5)] cursor-pointer relative">
      <div className=" h-full overflow-hidden w-full rounded-t-lg relative">
        <img
          src={info.thumbnail}
          className="h-full w-full rounded-t-lg transition hover:scale-110 "
          alt=""
        />
        <span className="px-1 text-sm text-white rounded bg-gray-800/50 absolute left-2 bottom-1 ">{info.numImage} ảnh</span>
      </div>
      <div className=" p-3 ">
        <div className=" h-[50%]  ">
            <p className="text-ellipsis overflow-hidden ...">{info.title}</p>
        </div>
        <div className=" h-[50%]">
          <div className="post-price text-sm  flex item-center relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-4 w-4 absolute bottom-[2px]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="ml-[30px] text-emerald-800">
              {handlePrice(info.price.toString())} VND
            </span>
          </div>
          <div className="post-location text-sm relative flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 absolute bottom-[2px]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span className="ml-[30px]">{info.province}</span>
          </div>
          <div className="clock text-sm  flex item-center absolute left-3 bottom-0 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <small className="ml-[10px] text-sm ">{info.date}</small>
          </div>
          <div className="absolute right-2 bottom-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5  text-slate-300 rounded-lg hover:bg-slate-300 hover:text-emerald-600 "
            >
              <path
                fill-rule="evenodd"
                d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z"
                clip-rule="evenodd"
              />
            </svg>

            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5  text-emerald-600 rounded-lg hover:bg-slate-300 "
            >
              <path
                fill-rule="evenodd"
                d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z"
                clip-rule="evenodd"
              />
            </svg> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPDInstance;
