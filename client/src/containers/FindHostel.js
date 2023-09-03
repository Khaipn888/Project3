import { Footer } from "../components/Footer";
import Header from "../components/Header";
import ProvincePopUp from "../components/ProvincePopUp";


function FindHostel() {
    return (
        <div>
            <Header/>
            <div className="filter-container w-[60%] mx-[auto]  ">

            </div>
            <ProvincePopUp />
            <div className="h-[1000px] bg-yelow-400  "></div>
            <Footer/>
        </div>
        
    )
}
export default FindHostel;