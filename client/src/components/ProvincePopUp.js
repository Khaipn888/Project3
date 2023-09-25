import { useEffect, useState } from "react";
import {
  apiGetDistrictOnline,
  apiGetProvinceOnline,
  apiGetWardOnline,
} from "../services/app";

function ProvincePopUp(props) {
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
    address:""
  });

  const [reset, setReset] = useState(false);

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
      province: provinceCr === "Tất cả" ? provinceCr : provinceCr
        ? provinceOp?.find((item) => item.province_id === provinceCr)
            ?.province_name
        : "",
      district: districtCr === "Tất cả" ? districtCr : districtCr
        ? districtOp?.find((item) => item.district_id === districtCr)
            ?.district_name
        : "",
      ward: wardCr === "Tất cả" ? wardCr : wardCr
        ? wardOp?.find((item) => item.ward_id === wardCr)?.ward_name
        : "",
    }));
  },[provinceCr, districtCr, wardCr])

  const handleGetAddr = () => {
    let address = "";
    if(addr.province === "Tất cả" || addr.province == ""){
      address = "Tất cả";
    } else 
      if(addr.district === "Tất cả" || addr.district == ""){
        address = addr.province;
      } else if(addr.ward === "Tất cả" || addr.ward == ""){
        address = addr.district + " " + addr.province;
      } else address = addr.ward + " " + addr.district + " " + addr.province;
    
    setAddr(prev => ({
      ...prev,
      address: address
    }))
    
    props.handleClose();
  };
  console.log({
    province: typeof provinceCr,
    district: typeof districtCr,
    ward: typeof wardCr,

  });
  console.log(addr.address);
 
  return (
    <div className="pop-up-container w-full h-[100vh] fixed bg-gray-200/80 z-50 top-0 left-0 ">
      <div className="pop-up-box w-[500px] h-[450px] mx-auto mt-[50px] bg-white rounded-lg ">
        <div className="header flex border-b h-[50px] items-center font-bold relative">
          <span className="mx-auto">Chọn khu vực bạn muốn tìm kiếm</span>
          <button
            className="exit-btn absolute rounded-full  w-[25px] h-[25px] top-[-5px] right-[-7px]"
            onClick={props.handleClose}
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
  );
}

export default ProvincePopUp;
