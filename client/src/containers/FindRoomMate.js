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
import {
  apiGetDistrictOnline,
  apiGetProvinceOnline,
  apiGetWardOnline,
} from "../services/app";
import ReactSlider from "react-slider";
import "../assets/styles/popUpStyle.css";
import PostDetailInfo from "./PostDetailInfo";

function FindRoomMate() {
  const [popUp, setIsOpen] = useState({
    kindIsOpen: false,
    provinceIsOpen: false,
    priceIsOpen: false,
    areaIsOpen: false,
  });
  const TNOG = "Tìm người ở ghép";
  const dispatch = useDispatch();
  const { posts, count } = useSelector((state) => state.post);
  const [pageChosed, setPageChosed] = useState(1);
  const [pageIndex, setPageIndex] = useState(1);
  const [page, setPage] = useState(0);
  const [textResult, setTextResult] = useState("");
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  // province popup
  const [provinceOp, setProvinceOp] = useState([]);
  const [provinceCr, setProvinceCr] = useState();
  const [districtOp, setDistrictOp] = useState([]);
  const [districtCr, setDistrictCr] = useState();
  const [wardOp, setWardOp] = useState([]);
  const [wardCr, setWardCr] = useState();
  const [addr, setAddr] = useState({
    province: "",
    district: "",
    ward: "",
    address: "",
  });

  const [reset, setReset] = useState(false);
  const [result, setResult] = useState();
  useEffect(() => {
    setResult([...posts]);
  }, [posts]);
  useEffect(() => {
    const fetchProvinceOnline = async () => {
      const response = await apiGetProvinceOnline();
      if (response.status === 200) setProvinceOp(response?.data.results);
    };
    fetchProvinceOnline();
  }, []);

  useEffect(() => {
    setDistrictCr(null);
    const fetchDistrictOnline = async () => {
      const response = await apiGetDistrictOnline(provinceCr);
      if (response.status === 200) setDistrictOp(response?.data.results);
    };
    provinceCr && fetchDistrictOnline(provinceCr);
    provinceCr ? setReset(false) : setReset(true);
    !provinceCr && setDistrictOp([]);
  }, [provinceCr]);

  useEffect(() => {
    setWardCr(null);
    const fetchWardOnline = async () => {
      const response = await apiGetWardOnline(districtCr);
      if (response.status === 200) setWardOp(response?.data.results);
    };
    districtCr && fetchWardOnline(districtCr);
    districtCr ? setReset(false) : setReset(true);
    !districtCr && setWardOp([]);
  }, [districtCr]);

  useEffect(() => {
    setAddr((prev) => ({
      ...prev,
      province:
        provinceCr === "Tất cả"
          ? provinceCr
          : provinceCr
          ? provinceOp?.find((item) => item.province_id === provinceCr)
              ?.province_name
          : "",
      district:
        districtCr === "Tất cả"
          ? districtCr
          : districtCr
          ? districtOp?.find((item) => item.district_id === districtCr)
              ?.district_name
          : "",
      ward:
        wardCr === "Tất cả"
          ? wardCr
          : wardCr
          ? wardOp?.find((item) => item.ward_id === wardCr)?.ward_name
          : "",
    }));
  }, [provinceCr, districtCr, wardCr]);

  useEffect(() => {
    setTextResult(
      `Tìm thấy ${
        result?.filter((item) => item.category === TNOG).length
      } bài đăng tìm người ở ghép ${
        addr.province === "Tất cả" || addr.province == ""
          ? ""
          : `ở ${addr.province}`
      }${
        priceValues[0] !== 0 || priceValues[1] !== 50
          ? `, giá từ ${priceValues[0]}Tr - ${priceValues[1]}Tr`
          : ""
      }${
        areaValues[0] !== 0 || areaValues[1] !== 100
          ? `, diện tích từ ${areaValues[0]}m2 - ${areaValues[1]}m2`
          : ""
      }  `
    );
  }, [result]);

  const handleGetAddr = () => {
    let address = "";
    if (addr.province === "Tất cả" || addr.province == "") {
      address = "Tất cả";
    } else if (addr.district === "Tất cả" || addr.district == "") {
      address = addr.province;
    } else if (addr.ward === "Tất cả" || addr.ward == "") {
      address = addr.district + " " + addr.province;
    } else address = addr.ward + " " + addr.district + " " + addr.province;

    setAddr((prev) => ({
      ...prev,
      address: address,
    }));

    handleProvincePopUp();
  };

  //end province popup

  // price popup

  const PRICE_MIN = 0;
  const PRICE_MAX = 50;
  const [priceValues, setPriceValues] = useState([PRICE_MIN, PRICE_MAX]);

  const AREA_MIN = 0;
  const AREA_MAX = 100;
  const [areaValues, setAreaValues] = useState([AREA_MIN, AREA_MAX]);

  //end price popup

  const limit = 6;
  // const maxPageIndex =
  //   (count % limit ? Math.floor(count / limit) + 1 : count / limit) % 3
  //     ? Math.floor(
  //         (count % limit ? Math.floor(count / limit) + 1 : count / limit) / 3
  //       ) + 1
  //     : (count % limit ? Math.floor(count / limit) + 1 : count / limit) / 3;

  useEffect(() => {
    dispatch(getPosts());
  }, [page]);
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

  const handleShowDetail = () => {
    setIsShowDetail(!isShowDetail);
  };

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

  const handleFindResult = () => {
    const newResult = posts
      .filter((item) => item.category === TNOG)
      .filter(
        (item) =>
          item.price >= priceValues[0] * 1000000 &&
          item.price <= priceValues[1] * 1000000
      )
      .filter(
        (item) => item.area >= areaValues[0] && item.area <= areaValues[1]
      )
      .filter((item) =>
        addr.address === "Tất cả" ? true : item.address.includes(addr.address)
      );
    setResult(newResult);
  };
  console.log(result);
  return (
    <div>
      <Header />
      {popUp.provinceIsOpen && (
        <div className="pop-up-container w-full h-[100vh] fixed bg-gray-200/80 z-50 top-0 left-0 ">
          <div className="pop-up-box w-[500px] h-[450px] mx-auto mt-[50px] bg-white rounded-lg ">
            <div className="header flex border-b h-[50px] items-center font-bold relative">
              <span className="mx-auto">Chọn khu vực bạn muốn tìm kiếm</span>
              <button
                className="exit-btn absolute rounded-full  w-[25px] h-[25px] top-[-5px] right-[-7px]"
                onClick={handleProvincePopUp}
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
            <div className="list-province p-10">
              <div className="flex flex-col mb-[10px] pb-[10px] ">
                <label htmlFor="tinh-thanh">Tỉnh/Thành phố</label>
                <select
                  value={provinceCr}
                  onChange={(e) => setProvinceCr(e.target.value)}
                  name=""
                  id="tinh-thanh"
                  className="h-8 rounded bg-slate-100 px-2"
                >
                  <option value="Tất cả">Tất cả</option>
                  {provinceOp?.map((item) => {
                    return (
                      <option key={item?.province_id} value={item?.province_id}>
                        {item?.province_name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="flex flex-col my-[10px] py-[10px] ">
                <label htmlFor="tinh-thanh">Quận/Huyện</label>
                <select
                  value={reset ? "" : districtCr}
                  onChange={(e) => setDistrictCr(e.target.value)}
                  name=""
                  id="tinh-thanh"
                  className="h-8 rounded bg-slate-100 px-2"
                >
                  <option value="Tất cả">Tất cả</option>
                  {districtOp?.map((item) => {
                    return (
                      <option key={item?.district_id} value={item?.district_id}>
                        {item?.district_name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="flex flex-col my-[10px] pt-[10px] pb-[50px] ">
                <label htmlFor="tinh-thanh">Phường/Xã</label>
                <select
                  name=""
                  id="tinh-thanh"
                  className="h-8 rounded bg-slate-100 px-2"
                  value={reset ? "" : wardCr}
                  onChange={(e) => setWardCr(e.target.value)}
                >
                  <option value="Tất cả">Tất cả</option>
                  {wardOp?.map((item) => {
                    return (
                      <option key={item?.ward_id} value={item?.ward_id}>
                        {item?.ward_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="w-[20%] mx-auto ">
                <button
                  onClick={handleGetAddr}
                  className="w-full font-bold px-2 py-1 bg-red-500 rounded-lg hover:bg-red-700 hover:text-white"
                >
                  Áp dụng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {popUp.priceIsOpen && (
        <div className="pop-up-container w-full h-[100vh] fixed bg-gray-200/50 z-50 top-0 left-0 ">
          <div className="pop-up-box w-[800px] h-[300px] mx-auto mt-[50px] bg-white rounded-lg relative">
            <div className="price-values justify-center items-center text-center my-[20px] py-[30px]">
              <span className="mt-[20px] font-bold text-[25px] text-cyan-800">
                Mức giá: {priceValues[0]} Triệu - {priceValues[1]} Triệu
              </span>
            </div>
            <div className="my-[30px]">
              <ReactSlider
                className=" w-[80%] mx-[10%] bg-gray-400 h-[5px] "
                thumbClassName="w-[20px] h-[20px] rounded-full bg-gray-400 top-[-6px] focus:bg-red-500 cursor-grab"
                trackClassName=" h-[5px] track"
                value={priceValues}
                min={PRICE_MIN}
                max={PRICE_MAX}
                onChange={setPriceValues}
                step={0.5}
              />
            </div>
            <div className="flex justify-between mx-[10%] font-bold text-[15px]">
              <span>0</span>
              <span>50 Triệu</span>
            </div>
            <button
              className="exit-btn absolute rounded-full  w-[25px] h-[25px] top-[-8px] right-[-7px]"
              onClick={handlePricePopUp}
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

            <div className="w-[20%] mx-auto my-10">
              <button
                onClick={handlePricePopUp}
                className="w-full font-bold px-2 py-1 bg-red-500 rounded-lg hover:bg-red-700 hover:text-white"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
      {popUp.areaIsOpen && (
        <div className="pop-up-container w-full h-[100vh] fixed bg-gray-200/50 z-50 top-0 left-0 ">
          <div className="pop-up-box w-[800px] h-[300px] mx-auto mt-[50px] bg-white rounded-lg relative">
            <div className="price-values justify-center items-center text-center my-[20px] py-[30px]">
              <span className="mt-[20px] font-bold text-[25px] text-cyan-800 relative">
                Diện tích: {areaValues[0]} m2 - {areaValues[1]} m2
              </span>
            </div>
            <div className="my-[30px]">
              <ReactSlider
                className=" w-[80%] mx-[10%] bg-gray-400 h-[5px] "
                thumbClassName="w-[20px] h-[20px] rounded-full bg-gray-400 top-[-6px] focus:bg-red-500 cursor-grab"
                trackClassName="h-[5px] track"
                value={areaValues}
                min={AREA_MIN}
                max={AREA_MAX}
                onChange={setAreaValues}
                step={1}
              />
            </div>
            <div className="flex justify-between mx-[10%] font-bold text-[15px]">
              <span>0</span>
              <span>100m2</span>
            </div>
            <button
              className="exit-btn absolute rounded-full  w-[25px] h-[25px] top-[-8px] right-[-7px]"
              onClick={handleAreaPopUp}
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

            <div className="w-[20%] mx-auto my-10">
              <button
                onClick={handleAreaPopUp}
                className="w-full font-bold px-2 py-1 bg-red-500 rounded-lg hover:bg-red-700 hover:text-white"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {isShowDetail ? (
        <div className=" w-full  relative mt-5 ">
          <PostDetailInfo item={currentPost} />
        </div>
      ) : (
        <>
          <div className="filter-container w-[60%] mx-[20%] my-[10px]  grid grid-cols-10 gap-x-2 rounded-lg bg-cyan-100/75  top-[65px] px-[20px] py-[10px] items-center">
            <div className="grid grid-cols-3 gap-x-2 col-span-9 ">
              <>
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
              </>
              <div
                className="location rounded-md bg-white cursor-pointer h-[40px] text-center hover:border hover:border-black flex justify-center items-center text-[15px] "
                onClick={handleProvincePopUp}
              >
                {addr.address ? addr.address : "Khu vực"}
              </div>
              <div
                className="price rounded-md bg-white cursor-pointer h-[40px] text-center hover:border hover:border-black flex justify-center items-center"
                onClick={handlePricePopUp}
              >
                <span>
                  {priceValues[0] !== 0 || priceValues[1] !== 50
                    ? `Từ ${priceValues[0]}Tr - ${priceValues[1]}Tr`
                    : "Khoảng giá"}{" "}
                </span>
              </div>
              <div
                className="area rounded-md bg-white cursor-pointer h-[40px] text-center hover:border hover:border-black flex justify-center items-center"
                onClick={handleAreaPopUp}
              >
                <span>
                  {areaValues[0] !== 0 || areaValues[1] !== 100
                    ? `Từ ${areaValues[0]}m2 - ${areaValues[1]}m2`
                    : "Diện tích"}{" "}
                </span>
              </div>
            </div>

            <div className="apply bg-gray-200 rounded-lg p[5px] text-center h-[30px] items-center hover:bg-red-400 font-bold flex hover:border hover:border-red-800">
              <button className="w-[100%]" onClick={handleFindResult}>
                Tìm
              </button>
            </div>
          </div>
          <div className=" font-bold w-[90%] mx-auto mt-[30px] text-[20px]">
            {textResult}
          </div>
          <div className=" grid grid-cols-2 gap-x-5 gap-y-5 max-w-[90%] mx-auto mt-[20px] mb-[20px] min-h-screen">
            {result?.filter((item) => item.category === TNOG).length > 0 &&
              result
                ?.filter((item) => item.category === TNOG)
                .map((item) => (
                  <div
                    className=" h-[180px] "
                    key={item.id}
                    onClick={() => {
                      setCurrentPost(item);
                      handleShowDetail();
                    }}
                  >
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
          <>
            {/* ====================Phân trang==================== */}
            {/* <div className="flex items-center justify-center my-[20px]">
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
          </>
        </>
      )}

      <BackToTopButton />
      <Footer />
    </div>
  );
}
export default FindRoomMate;
