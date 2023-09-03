function ProvincePopUp() {
    return (
      <div className="pop-up-container w-full h-[100vh] fixed bg-gray-200/80 z-20">
        <div className="pop-up-box w-[500px] h-[500px] mx-auto mt-[50px] bg-white rounded-lg ">
          <div className="header flex border-b h-[50px] items-center font-bold relative">
            <button className="back-prev absolute top-[15px] left-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.793 2.232a.75.75 0 01-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 010 10.75H10.75a.75.75 0 010-1.5h2.875a3.875 3.875 0 000-7.75H3.622l4.146 3.957a.75.75 0 01-1.036 1.085l-5.5-5.25a.75.75 0 010-1.085l5.5-5.25a.75.75 0 011.06.025z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <span className="mx-auto">Chọn khu vực bạn muốn tìm kiếm</span>
            <button className="exit-btn absolute rounded-full  w-[25px] h-[25px] top-[-5px] right-[-7px]">
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
          <div className="list-province"></div>
        </div>
      </div>
    );
  }
  
  export default ProvincePopUp;