import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import ProvincePopUp from "../components/ProvincePopUp";
import BackToTopButton from "../components/BackToTopButton";
import PricePopUp from "../components/PricePopUp";
import AreaPopUp from "../components/AreaPopUp";
import PostInstance from "../components/PostInstance";
import { getPosts, getPostsLimit } from "../store/actions/post";
import { useDispatch, useSelector } from "react-redux";

function FindHostel() {
  const [popUp, setIsOpen] = useState({
    kindIsOpen: false,
    provinceIsOpen: false,
    priceIsOpen: false,
    areaIsOpen: false,
  });
  const dispatch = useDispatch();
  const { posts, count } = useSelector((state) => state.post);
  const [pageChosed, setPageChosed] = useState(1);
  const [pageIndex, setPageIndex] = useState(1);
  const [page, setPage] = useState(0);
  const limit = 6;
  const maxPageIndex =
    (count % limit ? Math.floor(count / limit) + 1 : count / limit) % 3
      ? Math.floor(
          (count % limit ? Math.floor(count / limit) + 1 : count / limit) / 3
        ) + 1
      : (count % limit ? Math.floor(count / limit) + 1 : count / limit) / 3;

  useEffect(() => {
    dispatch(getPostsLimit(page, limit));
  }, [dispatch, page]);
  const popUpCopy = { ...popUp };
  // const handleKindPopUp = () => {
  //   popUpCopy.kindIsOpen = !popUpCopy.kindIsOpen;
  //   setIsOpen(popUpCopy);
  // };
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

  const handlePageNumber = () => {
    let maxPage = count % limit ? Math.floor(count / limit) + 1 : count / limit;
    console.log(maxPage);
    let arrNumber = [];
    for (let i = 1; i <= maxPage; i++) {
      arrNumber.push(i);
    }

    return arrNumber.length > 3
      ? arrNumber.filter((i) => i > 3 * (pageIndex - 1) && i <= 3 * pageIndex)
      : arrNumber;
  };

  const handleChosePageNumber = (e) => {
    setPageChosed(e.target.value);
    setPage(e.target.value - 1);
  };

  return (
    <div>
      <Header />
      {popUp.provinceIsOpen && (
        <ProvincePopUp handleClose={handleProvincePopUp} />
      )}
      {popUp.priceIsOpen && <PricePopUp handleClose={handlePricePopUp} />}
      {popUp.areaIsOpen && <AreaPopUp handleClose={handleAreaPopUp} />}
      <div className="filter-container w-[60%] mx-[20%] my-[10px]  grid grid-cols-10 gap-x-2 rounded-lg bg-cyan-100/75  top-[65px] px-[20px] py-[10px] items-center">
        <div className="grid grid-cols-3 gap-x-2 col-span-9 ">
          {/* <div
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
          </div> */}
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
      <div className=" grid grid-cols-2 gap-x-5 gap-y-5 max-w-[90%] mx-auto my-[50px] ">
        {posts?.length > 0 &&
          posts.map((item) => (
            <div className=" h-[180px] ">
              <PostInstance
                key={item.id}
                title={item?.title}
                thumbnail={item?.thumbnail}
                price={item?.price}
                area={item?.area}
                date={item?.createdAt}
                address={item?.address}
                numImage={JSON.parse(item?.images.image).length}
                province={item.province}
                district={item.district}
                ward={item.ward}
              />
            </div>
          ))}
      </div>
      <div className="flex items-center justify-center mt-[20px]">
        <div className="flex items-center justufy-center gap-1">
          {maxPageIndex > 1 && pageIndex > 1 && (
            <div
              onClick={setPageIndex(pageIndex - 1)}
              className=" px-[18px] py-[10px] rounded-lg bg-slate-200 cursor-pointer hover:bg-slate-300 active:bg-emerald-600 w-[45px] relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                />
              </svg>
            </div>
          )}
          {handlePageNumber().length > 0 &&
            handlePageNumber().map((item) => {
              return (
                <input
                  readOnly
                  type="text"
                  id={item}
                  value={item}
                  onClick={(e) => handleChosePageNumber(e)}
                  // eslint-disable-next-line eqeqeq
                  className={`px-[18px] py-[10px] rounded-lg  cursor-pointer  w-[45px] focus:outline-none ${
                    pageChosed == item
                      ? "bg-emerald-600 "
                      : "bg-slate-200 hover:bg-slate-300"
                  } `}
                />
              );
            })}

          {maxPageIndex > 1 && pageIndex === maxPageIndex && (
            <div
              onClick={setPageIndex(pageIndex + 1)}
              className=" px-[18px] py-[10px] rounded-lg bg-slate-200 cursor-pointer hover:bg-slate-300 active:bg-emerald-600 w-[45px] relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-6 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          )}
        </div>
      </div>

      <BackToTopButton />
      <Footer />
    </div>
  );
}
export default FindHostel;
