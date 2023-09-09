import Header from "../components/Header";
import "../assets/styles/loginStyles.css";
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import * as action from "../store/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState({
    email: "",
    password: "",
    // password1: ''
  });

  const { isLogedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const disPatch = useDispatch();

  const infoCopy = { ...info };


  useEffect(() => {
    console.log(isLogedIn);
    if (isLogedIn) {
      navigate('/')
    }
   })
  const handleChange = (e) => {
    infoCopy[e.target.name] = e.target.value;
    setInfo(infoCopy);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(info);
    disPatch(action.login(info));
  };

  const handleShowPass = () => {
    setShow(!show);
  };

  return (
    <div>
      <Header />
      <div className="login-bg relative">
        <div className="login-container shadow-2xl rounded-lg">
          <div className="bg-login">
            <div className="login-form items-center">
              <div className="login-header">
                <h1>Đăng Nhập</h1>
              </div>
              <form action="" onSubmit={handleSubmit}>
                <div className="email">
                  <label htmlFor="email" className="email-label">
                    Email
                    <input
                      type="email"
                      id="email"
                      placeholder="  Enter your email"
                      className="input input-email rounded-md"
                      name="email"
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div className="password">
                  <label htmlFor="password" className="pass-label">
                    Mật Khẩu
                    <input
                      type={show ? "text" : "password"}
                      id="password"
                      placeholder="  Enter your password"
                      className="input input-pass rounded-md"
                      name="password"
                      onChange={handleChange}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className={`eye eye-open ${show ? "hidden" : ""}`}
                      id="eye-close"
                      onClick={handleShowPass}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className={`eye eye-open ${show ? "" : "hidden"}`}
                      id="eye-open"
                      onClick={handleShowPass}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </label>
                </div>
                <div className="fogot-pass relative flex items-center justify-between">
                  <NavLink to="/">
                    <span className=" font-medium hover:text-blue-800 ">
                      Quên mật khẩu?
                    </span>
                  </NavLink>
                  <NavLink to="/Register">
                    <span className=" font-medium hover:text-blue-800">
                      Chưa có tài khoản?
                    </span>
                  </NavLink>
                </div>
                <button
                  type="submit"
                  className=" button-login rounded-md bg-sky-800 hover:bg-sky-900 "
                >
                  Đăng Nhập
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <BackToTopButton />
      <Footer />
    </div>
  );
}
export default Login;
