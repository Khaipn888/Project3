import { NavLink } from "react-router-dom";
import "../assets/footerStyles.css";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto flex justify-between px-4">
        <div className="w-1/4">
          <h3 className="text-xl font-semibold mb-3">About My Web</h3>
          <p className="w-60">
            Đây là một trang web hướng tới việc hỗ trợ đa năng cho sinh viên
          </p>
        </div>
        <div className="w-1/4">
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <div>
            <div className="flex w-60 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>

              <span>123 Tây Hồ, Hai Bà Trưng, Hà Nội</span>
            </div>
            <div className="flex w-60 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clip-rule="evenodd"
                />
              </svg>

              <span>0123.456.789</span>
            </div>
            <div className="flex w-60 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 mr-2"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>

              <span>abcxyz@gmail.com</span>
            </div>
            <div className="flex w-60 mb-3">
              <ion-icon name="logo-facebook" className='icon' ></ion-icon>
              <ion-icon name="logo-instagram" className='icon'></ion-icon>
              <ion-icon name="logo-twitter" className='icon'></ion-icon>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <h3 className="text-xl font-semibold mb-3">Hỗ trợ</h3>
          <ul>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Chính sách bảo mật
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Hướng dẫn sử dụng
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Quy chế hoạt động
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Bảng giá dịch vụ
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/4">
          <h3 className="text-xl font-semibold mb-3">Bạn Cần</h3>
          <ul>
            <li>
              <NavLink to="/" className="text-gray-300 hover:text-white">
                Quay lại trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink to="/FindHostel" className="text-gray-300 hover:text-white">
                Tìm trọ
              </NavLink>
            </li>
            <li>
              <NavLink to="/FindRoomMate" className="text-gray-300 hover:text-white">
                Tìm người ở ghép
              </NavLink>
            </li>
            <li>
              <NavLink to="/Neccessary" className="text-gray-300 hover:text-white">
                Tìm mua đồ pass lại
              </NavLink>
            </li>
            <li>
              <NavLink to="/Forum" className="text-gray-300 hover:text-white">
                Tham gia diễn đàn trao đổi
              </NavLink>
            </li>
            <li>
              <NavLink to="/Post" className="text-gray-300 hover:text-white">
                Đăng tin
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
