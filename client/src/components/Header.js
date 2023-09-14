import { Disclosure } from "@headlessui/react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../assets/styles/headerStyles.css";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../store/actions/index";
import { apiGetCurrent } from "../services";
import { useEffect } from "react";


const navigation = [
  { name: "Tìm Trọ", href: "/FindHostel", current: true },
  { name: "Tìm người ở ghép", href: "/FindRoomMate", current: false },
  { name: "Đồ dùng", href: "/Neccessary", current: false },
  { name: "Diễn đàn", href: "/Forum", current: false },
];

export default function Header() {
  const { isLogedIn } = useSelector((state) => state.auth);
  const { currentData } = useSelector((state) => state.user);

  const dispatch = useDispatch();

   useEffect(() => {
     setTimeout(() => {
       isLogedIn && dispatch(action.getCurrent())
     }, 100)
   },[isLogedIn])
  return (
    <div className="h-[65px] ">
      <Disclosure
        as="nav"
        className="bg-cyan-100/75 fixed top-[0px] w-[100%] z-10 "
      >
        <div className="mx-auto max-w-[1400px] px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center relative w-[180px]">
                <Link to="/">
                  <img className="h-[170px] w-auto absolute top-[-57px] " src={logo} alt="Your Company" />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block ">
                <div className="flex space-x-1">
                  {navigation.map((item) => (
                    <NavLink
                      className=" font-medium rounded-lg text-lg navlink"
                      key={item.name}
                      to={item.href}
                    >
                      <div className="px-4 py-1 rounded-lg navlink">
                        {item.name}
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:block items-center  ">
              <div className="flex space-x-16">
                {isLogedIn ? (
                  <div className="flex space-x-5 items-center justify-center">
                    <div className="saved rounded-lg hover:bg-white cursor-pointer p-[5px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-7 h-7"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm1.5 1.5a.75.75 0 00-.75.75V16.5a.75.75 0 001.085.67L12 15.089l4.165 2.083a.75.75 0 001.085-.671V5.25a.75.75 0 00-.75-.75h-9z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="nofitication rounded-lg hover:bg-white cursor-pointer p-[5px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-7 h-7"
                      >
                        <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="avatar flex items-center cursor-pointer">
                      <div className="avatar-img h-10 w-10 rounded-full border border-current overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="avatar" />
                      </div>
                      <span className="user-name font-bold">&nbsp;{currentData?.name}</span>
                    </div>
                    <div className="logout flex items-center rounded-lg hover:bg-white p-[5px]">
                      <button onClick={() => dispatch(action.logout())}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-8 h-8"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex space-x-1">
                    <NavLink
                      className="font-medium rounded-lg text-lg navlink"
                      to="/Login"
                    >
                      <div className=" flex px-4 py-1 rounded-lg navlink items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 "
                        >
                          <path
                            fillRule="evenodd"
                            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                            clipRule="evenodd"
                          />
                        </svg>{" "}
                        <span className="mr-2">Đăng nhập</span>
                      </div>
                    </NavLink>
                    <NavLink
                      className="font-medium rounded-lg text-lg navlink"
                      to="/register"
                    >
                      <div className=" flex px-4 py-1 rounded-lg navlink items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                        </svg>{" "}
                        Đăng Ký
                      </div>
                    </NavLink>
                  </div>
                )}

                <div className="ml-[20px]">
                  <NavLink
                    className="font-medium rounded-lg text-lg navlink dang-tin"
                    to="/Post"
                  >
                    <div className=" flex px-4 py-1 rounded-lg navlink items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                        <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                      </svg>{" "}
                      Đăng Tin
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}
