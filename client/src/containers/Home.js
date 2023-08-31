import BackToTopButton from "../components/BackToTopButton";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import SlickSlider from "../components/SlickSlider";
import '../assets/styles/homeStyles.css'
function Home() {
    return (
        <div>
            <Header/> 
            <div className="slider rounded-lg">
                <SlickSlider/>
            </div>
            <div className="text-4xl text-center mt-24 h-96">
                This is Home page
            </div>
            <BackToTopButton/> 
            <Footer/>
        </div>
        
    )
}
export default Home;