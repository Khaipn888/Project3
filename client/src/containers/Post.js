import { NavLink } from "react-router-dom";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import BackToTopButton from "../components/BackToTopButton";
import {
  apiGetProvinceOnline,
  apiGetDistrictOnline,
  apiGetWardOnline,
} from "../services/app";
import { useEffect, useState } from "react";

const listSideBar = [
  "Quản lý thông tin cá nhân",
  "Quản lý tin đăng",
  "Tin đã lưu",
  "Tạo tin",
  "Thông báo",
  "Đổi mật khẩu",
];

function Post() {
  const { isLogedIn } = useSelector((state) => state.auth);

  const [provinceOp, setProvinceOp] = useState([]);
  const [provinceCr, setProvinceCr] = useState();
  const [districtOp, setDistrictOp] = useState([]);
  const [districtCr, setDistrictCr] = useState();
  const [wardOp, setWardOp] = useState([]);
  const [wardCr, setWardCr] = useState();
  const [homeStreet, setHomeStreet] = useState("");
  const [reset, setReset] = useState(false);

  const [address, setAddress] = useState("");

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

  return (
    <div>
      <Header />
      {!isLogedIn && (
        <div className="text-4xl text-center mt-20">
          <div className="grid grid-rows-2 bg-slate-100 w-[800px] h-[200px] mx-auto mb-[100px] place-items-center py-[20px] rounded-3xl shadow-2xl">
            <p>
              Bạn cần{" "}
              {
                <NavLink
                  to={"/Login"}
                  className="text-blue-600 hover:text-red-600"
                >
                  Đăng Nhập
                </NavLink>
              }{" "}
              Để Đăng Tin
            </p>
            <p>
              Nếu chưa có tài khoản hãy{" "}
              {
                <NavLink
                  to={"/Register"}
                  className="text-blue-600 hover:text-red-600"
                >
                  Đăng Ký
                </NavLink>
              }
            </p>
          </div>
        </div>
      )}

      {isLogedIn && (
        <div className="flex relative w-full">
          <div className="fixed left-0 top-[65px] w-[16%]  bg-cyan-100/75 ">
            <div className="w-[90%] h-[150px] bg-white m-[5%] rounded-3xl justify-center relative">
              <div className="p-[10px]">
                <div className="w-[90px] h-[90px] rounded-full overflow-hidden mx-auto ">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                    alt="avatar"
                  />
                </div>
              </div>
              <div className="flex justify-center font-bold text-[20px]">
                Mya
              </div>
            </div>
            <div className="mt-[30px] ">
              {listSideBar.map((item) => (
                <div className="bg-cyan-100 pl-[5%] font-bold my-[5%] py-[5px] cursor-pointer hover:bg-white active:bg-white">
                  {item}
                </div>
              ))}
              <hr className="border border-black/50 mx-[5%]" />
              <div className="bg-cyan-100 pl-[5%] font-bold my-[5%] py-[5px] cursor-pointer hover:bg-white active:bg-white">
                Đăng xuất
              </div>
            </div>
          </div>
          <div className="post-form left-[15%] relative mx-[2%] w-[80%] my-[10px] ">
            <div className="flex justify-center items-center mb-[20px] text-[30px] font-bold ">
              Tạo tin của bạn
            </div>
            <div className="bg-slate-200 max-w-[100%]  mx-[4%] shadow-xl mb-[100px] ">
              <div className=" mt-[20px] mx-[50px]">
                <div className="">
                  <div className="text-[25px] font-bold text-cyan-900 pb-2 pt-4 border-b border-slate-400 my-4">
                    Khu vực
                  </div>
                  <div className="grid grid-cols-2 gap-20">
                    <div className="">
                      <div className="flex flex-col my-[10px] py-[10px] ">
                        <label htmlFor="tinh-thanh">Tỉnh/Thành phố</label>
                        <select
                          value={provinceCr}
                          onChange={(e) => setProvinceCr(e.target.value)}
                          name=""
                          id="tinh-thanh"
                          className="h-8 rounded"
                        >
                          <option value="">--Chọn Tỉnh/Thành phố--</option>
                          {provinceOp?.map((item) => {
                            return (
                              <option
                                key={item?.province_id}
                                value={item?.province_id}
                              >
                                {item?.province_name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="flex flex-col my-[10px] py-[10px] ">
                        <label htmlFor="tinh-thanh">Phường/Xã</label>
                        <select
                          name=""
                          id="tinh-thanh"
                          className="h-8 rounded"
                          value={reset ? "" : wardCr}
                          onChange={(e) => setWardCr(e.target.value)}
                        >
                          <option value="">--Chọn Phường/Xã--</option>
                          {wardOp?.map((item) => {
                            return (
                              <option key={item?.ward_id} value={item?.ward_id}>
                                {item?.ward_name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>

                    <div className="">
                      <div className="flex flex-col my-[10px] py-[10px] ">
                        <label htmlFor="tinh-thanh">Quận/Huyện</label>
                        <select
                          value={reset ? "" : districtCr}
                          onChange={(e) => setDistrictCr(e.target.value)}
                          name=""
                          id="tinh-thanh"
                          className="h-8 rounded"
                        >
                          <option value="">--Chọn Quận/Huyện--</option>
                          {districtOp?.map((item) => {
                            return (
                              <option
                                key={item?.district_id}
                                value={item?.district_id}
                              >
                                {item?.district_name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="flex flex-col my-[10px] py-[10px] ">
                        {/* <label htmlFor="tinh-thanh">Đường/Phố</label>
                        <select name="" id="tinh-thanh" className="h-8 rounded">
                          <option value="">--Chọn Đường/Phố--</option>
                        </select> */}
                        <label htmlFor="home-street">
                          Số nhà, ngõ, tên đường/phố
                        </label>
                        <input
                          id="home-street"
                          className="h-8 rounded focus:outline-none px-2"
                          type="text"
                          placeholder="VD: Nhà 33B ngõ 123 đường ABC"
                          value={homeStreet}
                          onChange={(e) => setHomeStreet(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full py-4">
                    <label htmlFor="address">Địa chỉ của bạn là:</label>
                    <input
                      readOnly
                      type="text"
                      className="w-full h-9 rounded focus:outline-none px-1 font-bold"
                      id="address"
                      value={`${homeStreet} ${
                        wardCr
                          ? `${
                              wardOp?.find((item) => item.ward_id === wardCr)
                                ?.ward_name
                            }`
                          : ""
                      } ${
                        districtCr
                          ? `${
                              districtOp?.find(
                                (item) => item.district_id === districtCr
                              )?.district_name
                            }`
                          : ""
                      } ${
                        provinceCr
                          ? `${
                              provinceOp?.find(
                                (item) => item.province_id === provinceCr
                              )?.province_name
                            }`
                          : ""
                      }`}
                    />
                  </div>
                </div>
                <div className="mt-14 ">
                  <div className="text-[25px] font-bold text-cyan-900 py-2 border-b border-slate-400 mb-4">
                    Thông tin chính
                  </div>
                  <div className="grid grid-cols-10 gap-4">
                    <div className="flex flex-col my-[10px] py-[10px] col-span-3 ">
                      <label htmlFor="cho-thue">Loại cho thuê</label>
                      <select name="" id="cho-thue" className="h-8 rounded fon">
                        <option value disabled selected>
                          Chọn thể loại
                        </option>
                        <option value="">Cho thuê phòng trọ</option>
                        <option value="">Cho thuê căn hộ</option>
                        <option value="">Cho thuê căn hộ</option>
                        <option value="">Tìm người ở ghép</option>
                      </select>
                    </div>
                    <div className="flex flex-col my-[10px] py-[10px] col-span-4">
                      <label htmlFor="price">Giá</label>
                      <div className="flex ">
                        <input
                          id="price"
                          type="text"
                          className="p-2 w-full h-8 rounded-l focus:outline-none"
                          placeholder="VD: 1,500,000 thì nhập là 1.5"
                        />
                        <select
                          name=""
                          id=""
                          className="rounded-r bg-slate-300"
                        >
                          <option value="">Triệu/Tháng</option>
                          <option value="">Nghìn/Tháng</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col my-[10px] py-[10px] col-span-3">
                      <label htmlFor="dien-tich">Diện tích</label>
                      <div className="flex items-center">
                        <input
                          id="dien-tich"
                          type="text"
                          className=" p-2 w-full h-8 rounded-l focus:outline-none"
                          placeholder="Nhập diện tích"
                        />
                        <span className="h-8 w-8 bg-slate-300 justify-center flex items-center">
                          m<sup>2</sup>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-14 ">
                  <div className="text-[25px] font-bold text-cyan-900 py-2 border-b border-slate-400 mb-10">
                    Thông tin chi tiết
                  </div>
                  <div className="mb-8">
                    <label htmlFor="tieu-de">Tiêu đề</label>
                    <input
                      type="text"
                      name=""
                      id="tieu-de"
                      className=" p-2 w-full h-10 rounded focus:outline-none"
                    />
                  </div>
                  <div className="">
                    <label htmlFor="mo-ta">Mô tả chi tiết</label>
                    <textarea
                      type="text"
                      name=""
                      id="mo-ta"
                      className=" p-2 w-full h-[300px] rounded focus:outline-none"
                    />
                  </div>
                </div>
                <div className="mt-14">
                  <div className="text-[25px] font-bold text-cyan-900 py-2 border-b border-slate-400 mb-10">
                    Hình ảnh/Video
                  </div>
                  <div className="">
                    <label htmlFor="file" className="h-[120px] w-[120px] bg-green-800 flex justify-center items-center relative cursor-pointer rounded">
                    <input hidden type="file" id="file" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 left-[50px] absolute top-[40px]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="absolute top-[60px]">Up ảnh/Video</span>
                    </label>
                  </div>
                </div>
                <div className="mt-14">
                  <div className="text-[25px] font-bold text-cyan-900 py-2 border-b border-slate-400 mb-6">
                    Liên hệ
                  </div>
                  <div className="grid grid-cols-3 gap-5">
                    <div className="flex flex-col my-[10px] py-[10px]">
                      <label htmlFor="ten">Tên</label>
                      <input
                        id="ten"
                        type="text"
                        className=" p-2 w-full h-8 rounded focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col my-[10px] py-[10px]">
                      <label htmlFor="sdt">Số điện thoại</label>
                      <input
                        id="sdt"
                        type="text"
                        className=" p-2 w-full h-8 rounded focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col my-[10px] py-[10px]">
                      <label htmlFor="zalo">Zalo</label>
                      <input
                        id="zalo"
                        type="text"
                        className=" p-2 w-full h-8 rounded focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-20 flex justify-center">
                <button className="bg-green-600 w-[50%] h-10 rounded p-1 hover:bg-green-700 hover:text-white text-xl font-bold">
                  Ok Đăng Tin Này
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <BackToTopButton />
      <Footer />
    </div>
  );
}
export default Post;
