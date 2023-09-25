import React from "react";
import Iframe from "react-iframe";
import ImageGallery from "react-image-gallery";
import "../assets/styles/PostDetailStyles.css";


function PostDetailInfo({item}) {
  const images = [];
  const imagesArr = JSON.parse(item.images.image);
  console.log(imagesArr);
  imagesArr.forEach( image => {
    images.push({
      original: image,
      thumbnail: image
    })
    
  });
  

  console.log(item);

  return (
    <div className="w-[90%] mx-auto my-5">
      <div className="grid grid-cols-10 gap-5">
        <div className="col-span-6 bg-slate-100/75 p-5 rounded">
          <div className="title and main info ">
            <div className="title h-[60%] text-[25px] font-bold text-cyan-900 mb-[30px] ">
              {item?.title}
            </div>
            <div className=" h-[40%] ">
              <div className="h-[50%] flex items-center mb-[15px]">
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
                <span className="">
                  Địa chỉ: {item?.address}
                </span>
              </div>
              <div className="h-[50%] flex items-center justify-between">
                <div className="flex items-center">
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
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-bold text-emerald-700">
                    {item?.price} Vnd
                  </span>
                  <div className=" ml-[30px] flex items-center ">
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
                        d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                      />
                    </svg>
                    <span className="">{item?.area} m2</span>
                  </div>
                </div>

                <div className="flex items-center">
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
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="">{item?.createdAt}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="images overflow-hidden w-full items-center justify-center flex mt-[20px] rounded-lg">
            <ImageGallery items={images}
                          showIndex={true}
             />
          </div>
          <div className="description mt-[50px] ">
            <div className=" h-[60%] text-[25px] font-bold text-cyan-900 mb-[30px]  ">
              Mô tả
            </div>
            <div className="content bg-white min-h-[400px] rounded ">
              <div className="text p-5 whitespace-pre-wrap">
                {item?.description}
              </div>
            </div>
          </div>
          <div className="report pt-5 mt-[20px] ">
            <label
              className="report-title text-[18px] font-bold text-cyan-900 flex items-center"
              htmlFor="report"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 mr-2 fill-yellow-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>
                Nếu có bất kỳ ý kiến hay vấn đề gì với bài viết này hãy để lại
                phản hồi cho chúng tôi
              </span>
            </label>
            <textarea
              name="report"
              id="report"
              cols="30"
              rows="5"
              className="w-full p-2 outline-none rounded stroke-white stroke-1"
            ></textarea>
            <button className="py-0 px-4 rounded bg-yellow-400 font-bold hover:bg-yellow-500 hover:text-white">
              Gửi
            </button>
          </div>
        </div>
        <div className="col-span-4 ">
          <div className="user info and map">
            <div className="userinfo bg-slate-100/75 rounded-lg grid grid-cols-2  p-5 w-[85%] m-auto ">
              <div className="flex items-center border-r justify-center">
                <div className="">
                  <div className=" w-[80px] h-[80px] overflow-hidden rounded-full mx-[20px]">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                      alt="avatar"
                      className="  "
                    />
                  </div>
                  <div className="font-bold text-xl flex justify-center mb-2">
                    <span className="">Khai</span>
                  </div>
                  <div className="">
                    <button className="flex justify-center items-center bg-white rounded-full p-1 w-full font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 fill-blue-300 mr-2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                        />
                      </svg>
                      Chat
                    </button>
                  </div>
                </div>
              </div>
              <div className="pl-5">
                <div className="font-bold text-cyan-900 text-[20px] mb-2">
                  Thông tin liên hệ
                </div>
                <div className="rounded-lg bg-white w-[90%] flex justify-center items-center font-bold py-1 mb-2">
                  {item?.contact_name}
                </div>

                <div className="rounded-lg bg-white w-[90%] flex justify-center items-center font-bold py-1 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 fill-green-500 mr-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  {item?.contact_phone}
                </div>
                <div className="rounded-lg bg-white w-[90%] flex justify-center items-center font-bold py-1 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 fill-blue-200 mr-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                  Zalo
                </div>
              </div>
            </div>
            <div className="ggmap bg-slate-100 w-full h-[400px] mt-[20px] rounded">
              <Iframe
                width="100%"
                height="100%"
                className="rounded border"
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.848488077388!2d105.86509077525193!3d20.99870968881005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac043643a18d%3A0x3e9762de4aa7fd64!2zNDYxIFAuIE1pbmggS2hhaSwgVsSpbmggVHV5LCBIYWkgQsOgIFRyxrBuZywgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1695225767749!5m2!1svi!2s"
              ></Iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PostDetailInfo;
