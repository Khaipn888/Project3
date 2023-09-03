import BackToTopButton from "../components/BackToTopButton";
import { Footer } from "../components/Footer";
import Header from "../components/Header";

function Neccessary() {
  return (
    <div>
      <Header />
      <div className="search-container flex w-[50%] h-[35px]  top-[65px] mx-[25%] my-[10px] fixed">
        <input
          className="w-[90%] bg-gray-100 rounded-l-2xl border pl-[15px] "
          type="text"
          placeholder="  Nhập tên đồ dùng cần tìm"
        />
        <button className="rounded-r-2xl bg-gray-300 px-[15px] ">
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <div className="h-[1000px] bg-yelow-400  "></div>
      <BackToTopButton/> 
      <Footer />
    </div>
  );
}
export default Neccessary;
