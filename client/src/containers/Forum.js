import { Footer } from "../components/Footer";
import Header from "../components/Header";

function Forum() {
    return (
        <div>
            <Header/>
            <div className="h-[5000px] w-[100%] bg-red-500 relative ">
                This is Forum page
            </div>
            <Footer/>
        </div>
        
    )
}
export default Forum;