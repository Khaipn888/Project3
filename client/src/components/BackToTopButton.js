import { useState, useEffect } from "react"
import '../assets/styles/backToTopStyles.css'


function BackToTopButton(){
    const [backToTop, setBackToTop] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 10){
               setBackToTop(true);
            }else{
                setBackToTop(false);
            }
        })
    }, [])

    const scrollUp = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        console.log("ok")
    }
    return(
        <div>
            {backToTop && (<button className="button-btt" onClick={scrollUp}>
            <span className="up">^</span> </button>)}      
        </div>
    )
}
export default BackToTopButton