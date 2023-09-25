import { useDispatch, useSelector } from "react-redux";
import BackToTopButton from "../components/BackToTopButton";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import PostPDInstance from "../components/PostPDInstance";
import { useEffect, useState } from "react";
import { getPosts, getPostsLimit } from "../store/actions";

function Neccessary() {


  const dispatch = useDispatch();
  const PD = null;
  const [pageChosed, setPageChosed] = useState(1);
  const [page, setPage] = useState(0);
  const [pageIndex, setPageIndex] = useState(1);
  const [result, setResult] = useState();
  const { posts, count } = useSelector((state) => state.post);

  useEffect(() => {
    setResult([...posts]);
  }, [posts]);

  const limit = 10;
  

  // const maxPageIndex =
  //   (count % limit ? Math.floor(count / limit) + 1 : count / limit) % 3
  //     ? Math.floor(
  //         (count % limit ? Math.floor(count / limit) + 1 : count / limit) / 3
  //       ) + 1
  //     : (count % limit ? Math.floor(count / limit) + 1 : count / limit) / 3;
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, page]);

  // const handlePageNumber = () => {
  //   let maxPage = count % limit ? Math.floor(count / limit) + 1 : count / limit;
  //   console.log(maxPage);
  //   let arrNumber = [];
  //   for (let i = 1; i <= maxPage; i++) {
  //     arrNumber.push(i);
  //   }

  //   return arrNumber.length > 3
  //     ? arrNumber.filter((i) => i > 3 * (pageIndex - 1) && i <= 3 * pageIndex)
  //     : arrNumber;
  // };

  // const handleChosePageNumber = (e) => {
  //   setPageChosed(e.target.value);
  //   setPage(e.target.value - 1);
  // };
console.log(result);
  return (
    <div>
      <Header />
      <div className="search-container flex w-[50%] h-[35px]  top-[65px] mx-[25%] my-[10px] fixed z-10">
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
      <div className=" grid grid-cols-5 w-[90%] mx-auto mt-[100px] gap-x-4 gap-y-4 min-h-screen">
        {result?.filter(item => item.category === PD)?.length > 0 &&
          result?.filter(item => item.category === PD)?.map((item) => (
            <div className=" max-w-[100%] min-w-[90%] h-[350px] ">
              <PostPDInstance
                key={item.id}
                title={item?.title}
                thumbnail={item?.thumbnail}
                price={item?.price}
                date={item?.createdAt}
                numImage={JSON.parse(item?.images.image).length}
                province={item.province}
                district={item.district}
                ward={item.ward}
              />
            </div>
          ))}
      </div>
      {/* <div className="flex items-center justify-center mt-[20px]">
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
      </div> */}
      <div className="h-[100px] bg-yelow-400  "></div>
      <BackToTopButton />
      <Footer />
    </div>
  );
}
export default Neccessary;
