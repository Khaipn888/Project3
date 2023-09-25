import { Footer } from "../components/Footer";
import Header from "../components/Header";
import PostDetailInfo from "./PostDetailInfo";

function Forum() {
    return (
        <div>
            <Header/>
            
            <div className=" w-full  relative mt-5 ">
                <PostDetailInfo />
            </div>
            <Footer/>
        </div>
        
    )
}
export default Forum;