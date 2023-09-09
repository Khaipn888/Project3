import React from "react";
import thumbnail from "../assets/images/thumbneil1.jpg";

function PostInstance() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <>
      <div className="post-container grid grid-cols-2 gap-x-4 w-[800px] h-[250px] my-[20px] bg-slate-100 relative rounded-md hover:shadow-xl cursor-pointer">
        <div className=" post-image h-[250px] w-[400px] overflow-hidden rounded-l-md ">
          <img
            src={thumbnail}
            alt="thumbnail img"
            className="w-full h-full rounded-l-md transition hover:scale-110"
          />
        </div>
        <div className="info m-[10px] text-left block">
          <div className="post-title text-2xl font-bold mb-[10px]">
            <h3>
              Chính chủ cho thuê chdv đẹp tại 4/4Đ, Nguyễn Thị Minh Khai, q1
            </h3>
          </div>
          <div className="post-price text-2xl mb-[5px] flex item-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="ml-[5px]">1.500.000 VND/Tháng</span>
          </div>
          <div className="post-area text-xl mb-[5px] flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
              />
            </svg>
            <span className="ml-[10px]"> 40m2 </span>
          </div>

          <div className="post-location text-xl mb-[5px] flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
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
            <span className="ml-[10px]">
              {" "}
              461 Minh Khai, Hai Bà Trưng, Hà Nội{" "}
            </span>
          </div>
          <div className="time-save . justify-between flex mt-[40px]">
            <div className="clock text-sm mb-[5px] flex item-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="ml-[10px]">{date}</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 rounded-lg hover:bg-slate-300 hover:text-red-800"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                // className="hover:text-red-800"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostInstance;
