import { Footer } from "../components/Footer";
import Header from "../components/Header";

function Home() {
    return (
        <div>
            <Header/>
            <div className="text-4xl text-center mt-24 h-96">
                This is Home page
            </div>
            <Footer/>
        </div>
        
    )
}
export default Home;