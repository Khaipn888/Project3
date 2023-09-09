import { NavLink } from "react-router-dom";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";

function Post() {
  const { isLogedIn } = useSelector((state) => state.auth);

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
        <div>
            
        </div>
      )}


      <Footer />
    </div>
  );
}
export default Post;
