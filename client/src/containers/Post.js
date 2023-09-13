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
import { memo, useEffect, useState } from "react";
import { apiUploadImages } from "../services/post";
import Loading from "../components/Loading";

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
  const { currentData } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [provinceOp, setProvinceOp] = useState([]);
  const [provinceCr, setProvinceCr] = useState();
  const [districtOp, setDistrictOp] = useState([]);
  const [districtCr, setDistrictCr] = useState();
  const [wardOp, setWardOp] = useState([]);
  const [wardCr, setWardCr] = useState();
  const [homeStreet, setHomeStreet] = useState("");
  const [reset, setReset] = useState(false);
  const [imagesReview, setImageReview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [payload, setPayload] = useState({
    province: "",
    district: "",
    ward: "",
    address: "",
    category: "",
    price: "",
    area: "",
    title: "",
    description: "",
    images: [],
    contact_name: "",
    contact_phone: "",
    zalo: "",
  });

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
    setPayload((prev) => ({
      ...prev,
      province: provinceCr
        ? provinceOp?.find((item) => item.province_id === provinceCr)
            ?.province_name
        : "",
      district: districtCr
        ? districtOp?.find((item) => item.district_id === districtCr)
            ?.district_name
        : "",
      ward: wardCr
        ? wardOp?.find((item) => item.ward_id === wardCr)?.ward_name
        : "",
      address: `${homeStreet} ${
        wardCr
          ? `${wardOp?.find((item) => item.ward_id === wardCr)?.ward_name}`
          : ""
      } ${
        districtCr
          ? `${
              districtOp?.find((item) => item.district_id === districtCr)
                ?.district_name
            }`
          : ""
      } ${
        provinceCr
          ? `${
              provinceOp?.find((item) => item.province_id === provinceCr)
                ?.province_name
            }`
          : ""
      }`,
    }));
  }, [provinceCr, districtCr, wardCr, homeStreet]);

  const handlieFiles = async (e) => {
    e.stopPropagation();
    setIsLoading(true);
    const images = [];
    const files = e.target.files;
    const formData = new FormData();
    for (let f of files) {
      formData.append("file", f);
      formData.append(
        "upload_preset",
        process.env.REACT_APP_UPLOAD_ASSETS_NAME
      );
      const response = await apiUploadImages(formData);

      if (response.status === 200) {
        images.push(response.data.secure_url);
      }
    }
    setIsLoading(false);
    setImageReview((prev) => [...prev, ...images]);
    setPayload((prev) => ({
      ...prev,
      images: [...payload.images, ...images],
    }));
  };

  const handleDeleteImage = (image) => {
    setImageReview((prev) => prev?.filter((item) => item !== image));
    setPayload((prev) => ({
      ...prev,
      images: [...payload.images.filter((item) => item !== image)],
    }));
  };

  const handleSubmit = () => {
    console.log(payload);
  }

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
                {/* {currentData.name} */}kai
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
                      <select
                        name=""
                        id="cho-thue"
                        className="h-8 rounded"
                        value={payload.category}
                        onChange={(e) =>
                          setPayload((prev) => ({
                            ...prev,
                            category: e.target.value,
                          }))
                        }
                      >
                        <option value disabled selected>
                          Chọn thể loại
                        </option>
                        <option value="Cho thuê phòng trọ">
                          Cho thuê phòng trọ
                        </option>
                        <option value="Cho thuê căn hộ">Cho thuê căn hộ</option>
                        <option value="Tìm người ở ghép">
                          Tìm người ở ghép
                        </option>
                      </select>
                    </div>
                    <div className="flex flex-col my-[10px] py-[10px] col-span-4">
                      <label htmlFor="price">Giá cho thuê</label>
                      <div className="flex ">
                        <input
                          id="price"
                          type="text"
                          className="p-2 w-full h-8 rounded-l focus:outline-none"
                          placeholder="VD: 1 triệu rưỡi thì nhập 1500000"
                          value={payload.price}
                          onChange={(e) =>
                            setPayload((prev) => ({
                              ...prev,
                              price: e.target.value,
                            }))
                          }
                        />
                        <div
                          name=""
                          id=""
                          className="rounded-r bg-slate-300 px-2 flex items-center"
                        >
                          Vnd/Tháng
                        </div>
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
                          value={payload.area}
                          onChange={(e) =>
                            setPayload((prev) => ({
                              ...prev,
                              area: e.target.value,
                            }))
                          }
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
                      value={payload.title}
                      onChange={(e) =>
                        setPayload((prev) => ({
                          ...prev,
                          title: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="">
                    <label htmlFor="mo-ta">Mô tả chi tiết</label>
                    <textarea
                      type="text"
                      name=""
                      id="mo-ta"
                      className=" p-2 w-full h-[300px] rounded focus:outline-none"
                      value={payload.description}
                      onChange={(e) =>
                        setPayload((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
                <div className="mt-14">
                  <div className="text-[25px] font-bold text-cyan-900 py-2 border-b border-slate-400 mb-10">
                    Hình ảnh/Video
                  </div>
                  <div className="grid grid-cols-4 gap-x-4 gap-y-8">
                    <div className="flex relative">
                      <label
                        htmlFor="file"
                        className="h-[120px] w-[120px] bg-green-800 flex justify-center items-center relative cursor-pointer rounded"
                      >
                        <input
                          onChange={handlieFiles}
                          hidden
                          type="file"
                          id="file"
                          multiple
                        />
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
                        <span className="absolute top-[60px]">
                          Up ảnh/Video
                        </span>
                      </label>

                      {isLoading ? (
                        <div className="w-10 h-10 absolute top-[25px] left-[140px]">
                          <Loading />
                        </div>
                      ) : (
                        imagesReview.length !== 0 && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-10 h-10 absolute top-[40px] left-[155px]"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        )
                      )}
                    </div>
                    {imagesReview.map((item) => {
                      return (
                        <div
                          key={item}
                          className="h-[120px] rounded overflow-hidden relative"
                        >
                          <img src={item} alt="imageUploaded " />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-8 h-8 absolute right-[1px] top-[1px] cursor-pointer p-2 rounded-full bg-slate-100/30 hover:bg-slate-100/80"
                            title="Xóa"
                            onClick={() => handleDeleteImage(item)}
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </div>
                      );
                    })}
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
                        value={payload.contact_name}
                        onChange={(e) =>
                          setPayload((prev) => ({
                            ...prev,
                            contact_name: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="flex flex-col my-[10px] py-[10px]">
                      <label htmlFor="sdt">Số điện thoại</label>
                      <input
                        id="sdt"
                        type="text"
                        className=" p-2 w-full h-8 rounded focus:outline-none"
                        value={payload.contact_phone}
                        onChange={(e) =>
                          setPayload((prev) => ({
                            ...prev,
                            contact_phone: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="flex flex-col mt-[10px] py-[10px] mb-[80px]">
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
              <div className="py-10 flex justify-center border-t border-slate-300 mx-[5%] ">
                <button
                  className="bg-green-600 w-[50%] h-10 rounded p-1 hover:bg-green-700 hover:text-white text-xl font-bold"
                  onClick={handleSubmit}
                >
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
export default memo(Post);
