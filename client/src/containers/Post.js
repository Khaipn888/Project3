import { Footer } from "../components/Footer";
import Header from "../components/Header";

function Post() {
    return (
        <div>
            <Header/>
            <div className="text-4xl text-center mt-24 h-96">
                This is Post page
            </div>
            <Footer/>
        </div>
        
    )
}
export default Post;