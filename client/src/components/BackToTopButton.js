import { useState, useEffect } from "react"


function BackToTopButton(){
    const [backToTop, setBackToTop] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scollY > 10){
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
    }
    return(
        <div>
            {backToTop && (<button style={{
                position: "fixed",
                bottom: "50px",
                right: "50px",
                width: "40px",
                height: "40px",
                fontSize: "40px",
                backgroundColor: "grey"
            }} onClick={scrollUp}>^</button>)}
        </div>
    )
}
export default BackToTopButton