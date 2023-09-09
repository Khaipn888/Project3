import BackToTopButton from "../components/BackToTopButton";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import SlickSlider from "../components/SlickSlider";
import '../assets/styles/homeStyles.css'
import PostInstance from "../components/PostInstance";
function Home() {
    return (
        <div className="">
            <Header/> 
            <div className="slider rounded-lg relative top-[65px] ">
                <SlickSlider/>
            </div>
            <div className="new-news max-w-[70%] ml-[100px] mt-[200px]">
                <div className=" font-bold text-[30px]">
                    <h2>Tin cho thuê trọ mới nhất</h2>
                </div>
                <hr />
                <br />
                
                <PostInstance />
                <PostInstance />
                <PostInstance />
            </div>
            <div className="new-news max-w-[70%] ml-[100px] mt-[200px]">
                <div className=" font-bold text-[30px]">
                    <h2>Tin tìm người ở ghép mới nhất</h2>
                </div>
                <hr />
                <br />
                
                <PostInstance />
                <PostInstance />
                <PostInstance />
            </div>
            <div className="w-[80%]">
                
            </div>
            <BackToTopButton/> 
            <Footer/>
        </div>
        
    )
}
export default Home;